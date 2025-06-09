// app/ui/questions/[id]/page.tsx
import React from "react";

export default function QuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <div className="p-6">
      Placeholder for question {id}
    </div>
  );
}
