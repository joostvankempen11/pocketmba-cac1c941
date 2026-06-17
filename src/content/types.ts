export type Resource = {
  title: string;
  source: string; // e.g. "Harvard Business Review", "YouTube — Aswath Damodaran"
  url: string;
  note?: string;
};

export type Lesson = {
  id: string;
  title: string;
  summary: string;
  body: string; // markdown
  videos?: Resource[];
  readings?: Resource[];
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
};

export type Assignment = {
  id: string;
  title: string;
  prompt: string;
  rubric: string;
};

export type Week = {
  week: number;
  title: string;
  tagline: string;
  topics: string[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
  assignment: Assignment;
};

export type CapstoneSection = {
  id: string;
  title: string;
  prompt: string;
  rubric: string;
};