CREATE TABLE public.lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()
NOT NULL,

  week_number INTEGER NOT NULL,
  lesson_number INTEGER NOT NULL,

  title TEXT NOT NULL,
  summary TEXT,

  estimated_read_time INTEGER DEFAULT 10,

  content TEXT NOT NULL,

  order_index INTEGER DEFAULT 0,

  UNIQUE (week_number, lesson_number)
);
``
