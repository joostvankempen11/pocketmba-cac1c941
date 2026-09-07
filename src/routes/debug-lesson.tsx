import { createFileRoute } from "@tanstack/react-router";
import { LessonMarkdown } from "@/components/lesson/LessonMarkdown";
import { FurtherStudy } from "@/components/FurtherStudy";
import { getWeek } from "@/content/curriculum";

export const Route = createFileRoute("/debug-lesson")({
  component: () => {
    const w = getWeek(3)!;
    const l = w.lessons.find((x) => x.id === "l1")!;
    return (
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)] gap-8 overflow-x-clip px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="min-w-0">
          <article className="w-full min-w-0 max-w-[45rem] lg:mx-auto">
            <LessonMarkdown body={l.body} title={l.title} />
            <FurtherStudy videos={l.videos} readings={l.readings} lessonTitle={l.title} />
          </article>
        </div>
      </div>
    );
  },
});
