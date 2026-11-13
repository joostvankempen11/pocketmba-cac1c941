CREATE OR REPLACE FUNCTION public.is_study_group_member(_group_id uuid, _user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.study_group_members WHERE group_id = _group_id AND user_id = _user_id)
$$;
REVOKE EXECUTE ON FUNCTION public.is_study_group_member(uuid, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_study_group_member(uuid, uuid) TO authenticated;

DROP POLICY IF EXISTS "Members can view group messages" ON public.study_group_messages;
CREATE POLICY "Group members can view group messages" ON public.study_group_messages
  FOR SELECT TO authenticated
  USING (public.is_study_group_member(group_id, auth.uid()));

DROP POLICY IF EXISTS "Members post own group messages" ON public.study_group_messages;
CREATE POLICY "Group members post own group messages" ON public.study_group_messages
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = author_id AND public.is_study_group_member(group_id, auth.uid()));