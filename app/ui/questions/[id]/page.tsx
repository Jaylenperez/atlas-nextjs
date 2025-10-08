import { AnswerQuestion } from "@/components/AnswerQuestions";
import { Answers } from "@/components/Answers";
import { fetchAnswers, fetchQuestion } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  const answers = await fetchAnswers(id);

  if (!question) {
    return <div>Question Not found</div>;
  }

  if (!answers) {
    return <p>No answers</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" /> {question.title}
      </h1>
      <AnswerQuestion question={question.id} />
      {(await answers).map((answer) =>
        answer.correct === true ? (
          <Answers
            key={answer.id}
            id={answer.id}
            answer={answer.answer}
            question_id={question.id}
            correct={answer.correct}
          />
        ) : (
          <Answers
            key={answer.id}
            id={answer.id}
            answer={answer.answer}
            question_id={question.id}
            correct={answer.correct}
          />
        )
      )}
    </div>
  );
}
