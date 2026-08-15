CREATE TYPE public.subscription_status AS ENUM ('trialing','active','free_beta','canceled','expired');
CREATE TYPE public.subscription_plan AS ENUM ('monthly','yearly','beta_free');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  subscription_status public.subscription_status NOT NULL DEFAULT 'trialing',
  subscription_plan public.subscription_plan,
  trial_ends_at timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  beta_user_number integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER profiles_set_updated_at BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  rank integer;
BEGIN
  SELECT count(*) + 1 INTO rank FROM public.profiles;
  IF rank <= 10 THEN
    INSERT INTO public.profiles (id, email, subscription_status, subscription_plan, beta_user_number)
    VALUES (NEW.id, NEW.email, 'free_beta', 'beta_free', rank);
  ELSE
    INSERT INTO public.profiles (id, email, subscription_status, trial_ends_at)
    VALUES (NEW.id, NEW.email, 'trialing', now() + interval '7 days');
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();