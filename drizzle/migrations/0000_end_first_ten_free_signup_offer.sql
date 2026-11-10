CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, subscription_status, trial_ends_at)
  VALUES (NEW.id, NEW.email, 'trialing', now() + interval '7 days');
  RETURN NEW;
END;
$$;