import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type AssignmentResult = {
  submission: string;
  feedback: {
    score: number;
    maxScore: number;
    strengths: string[];
    improvements: string[];
    summary: string;
  };
  submittedAt: number;
};

export type QuizResult = {
  score: number;
  total: number;
  answers: number[];
  takenAt: number;
};

type ProgressState = {
  completedLessons: Record<string, true>; // key: `${week}-${lessonId}`
  quizzes: Record<number, QuizResult>; // key: week
  assignments: Record<string, AssignmentResult>; // key: `${week}-${assignmentId}`
  capstone: Record<string, AssignmentResult>; // key: sectionId
  capstoneBusiness: string;
  markLessonComplete: (week: number, lessonId: string) => void;
  setQuizResult: (week: number, r: QuizResult) => void;
  setAssignment: (week: number, assignmentId: string, r: AssignmentResult) => void;
  setCapstone: (sectionId: string, r: AssignmentResult) => void;
  setCapstoneBusiness: (text: string) => void;
  resetAll: () => void;
  exportJSON: () => string;
  importJSON: (json: string) => boolean;
};

const initial = {
  completedLessons: {},
  quizzes: {},
  assignments: {},
  capstone: {},
  capstoneBusiness: "",
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initial,
      markLessonComplete: (week, lessonId) =>
        set((s) => ({
          completedLessons: { ...s.completedLessons, [`${week}-${lessonId}`]: true },
        })),
      setQuizResult: (week, r) =>
        set((s) => ({ quizzes: { ...s.quizzes, [week]: r } })),
      setAssignment: (week, assignmentId, r) =>
        set((s) => ({
          assignments: { ...s.assignments, [`${week}-${assignmentId}`]: r },
        })),
      setCapstone: (sectionId, r) =>
        set((s) => ({ capstone: { ...s.capstone, [sectionId]: r } })),
      setCapstoneBusiness: (text) => set({ capstoneBusiness: text }),
      resetAll: () => set(initial),
      exportJSON: () => JSON.stringify(get(), null, 2),
      importJSON: (json) => {
        try {
          const parsed = JSON.parse(json);
          set({ ...initial, ...parsed });
          return true;
        } catch {
          return false;
        }
      },
    }),
    {
      name: "mba-progress-v1",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : (undefined as never))),
      partialize: (s) => ({
        completedLessons: s.completedLessons,
        quizzes: s.quizzes,
        assignments: s.assignments,
        capstone: s.capstone,
        capstoneBusiness: s.capstoneBusiness,
      }),
    },
  ),
);

export function isLessonComplete(state: ProgressState, week: number, lessonId: string) {
  return Boolean(state.completedLessons[`${week}-${lessonId}`]);
}