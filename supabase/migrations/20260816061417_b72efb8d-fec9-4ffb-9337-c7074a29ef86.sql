
CREATE TABLE public.community_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text NOT NULL,
  avatar_url text,
  job_title text,
  industry text,
  working_on text,
  bio text,
  founding_number integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.community_profiles TO authenticated;
GRANT ALL ON public.community_profiles TO service_role;
ALTER TABLE public.community_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view all community profiles" ON public.community_profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users insert own community profile" ON public.community_profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own community profile" ON public.community_profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.set_founding_number()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  SELECT beta_user_number INTO NEW.founding_number FROM public.profiles WHERE id = NEW.id;
  RETURN NEW;
END;
$$;
CREATE TRIGGER community_profiles_founding BEFORE INSERT ON public.community_profiles
FOR EACH ROW EXECUTE FUNCTION public.set_founding_number();
CREATE TRIGGER community_profiles_updated BEFORE UPDATE ON public.community_profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week integer,
  title text,
  body text NOT NULL,
  pinned boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.community_posts TO authenticated;
GRANT ALL ON public.community_posts TO service_role;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view posts" ON public.community_posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members create own posts" ON public.community_posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Members update own posts" ON public.community_posts FOR UPDATE TO authenticated USING (auth.uid() = author_id) WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Members delete own posts" ON public.community_posts FOR DELETE TO authenticated USING (auth.uid() = author_id);

CREATE TABLE public.community_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  author_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.community_replies TO authenticated;
GRANT ALL ON public.community_replies TO service_role;
ALTER TABLE public.community_replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view replies" ON public.community_replies FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members create own replies" ON public.community_replies FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Members delete own replies" ON public.community_replies FOR DELETE TO authenticated USING (auth.uid() = author_id);

CREATE TABLE public.community_reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  emoji text NOT NULL DEFAULT '👏',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (post_id, user_id, emoji)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.community_reactions TO authenticated;
GRANT ALL ON public.community_reactions TO service_role;
ALTER TABLE public.community_reactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view reactions" ON public.community_reactions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members create own reactions" ON public.community_reactions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Members delete own reactions" ON public.community_reactions FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.study_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  focus text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_groups TO authenticated;
GRANT ALL ON public.study_groups TO service_role;
ALTER TABLE public.study_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view groups" ON public.study_groups FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members create groups" ON public.study_groups FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Creators update groups" ON public.study_groups FOR UPDATE TO authenticated USING (auth.uid() = created_by) WITH CHECK (auth.uid() = created_by);

CREATE TABLE public.study_group_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (group_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_group_members TO authenticated;
GRANT ALL ON public.study_group_members TO service_role;
ALTER TABLE public.study_group_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view group members" ON public.study_group_members FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members join groups themselves" ON public.study_group_members FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Members leave groups themselves" ON public.study_group_members FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.study_group_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  author_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_group_messages TO authenticated;
GRANT ALL ON public.study_group_messages TO service_role;
ALTER TABLE public.study_group_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view group messages" ON public.study_group_messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members post own group messages" ON public.study_group_messages FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Members delete own group messages" ON public.study_group_messages FOR DELETE TO authenticated USING (auth.uid() = author_id);

CREATE TABLE public.capstone_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  summary text NOT NULL,
  link text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.capstone_projects TO authenticated;
GRANT ALL ON public.capstone_projects TO service_role;
ALTER TABLE public.capstone_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view projects" ON public.capstone_projects FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members create own projects" ON public.capstone_projects FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Members update own projects" ON public.capstone_projects FOR UPDATE TO authenticated USING (auth.uid() = author_id) WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Members delete own projects" ON public.capstone_projects FOR DELETE TO authenticated USING (auth.uid() = author_id);

CREATE TABLE public.capstone_kudos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES public.capstone_projects(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  comment text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.capstone_kudos TO authenticated;
GRANT ALL ON public.capstone_kudos TO service_role;
ALTER TABLE public.capstone_kudos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view kudos" ON public.capstone_kudos FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members give own kudos" ON public.capstone_kudos FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Members remove own kudos" ON public.capstone_kudos FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.connection_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  to_user uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (from_user, to_user)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.connection_requests TO authenticated;
GRANT ALL ON public.connection_requests TO service_role;
ALTER TABLE public.connection_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Participants view requests" ON public.connection_requests FOR SELECT TO authenticated USING (auth.uid() = from_user OR auth.uid() = to_user);
CREATE POLICY "Senders create requests" ON public.connection_requests FOR INSERT TO authenticated WITH CHECK (auth.uid() = from_user);
CREATE POLICY "Recipients update requests" ON public.connection_requests FOR UPDATE TO authenticated USING (auth.uid() = to_user) WITH CHECK (auth.uid() = to_user);
CREATE POLICY "Senders delete requests" ON public.connection_requests FOR DELETE TO authenticated USING (auth.uid() = from_user);

INSERT INTO public.community_posts (id, author_id, week, title, body, pinned)
SELECT gen_random_uuid(), id, NULL, 'Introduce yourself', 'New here? Tell the cohort who you are, what you do, and what you want to build by week 12.', true
FROM auth.users ORDER BY created_at LIMIT 1;
