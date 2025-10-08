import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Correct } from "@/lib/actions";

interface AnswerProps {
  id: string;
  answer: string;
  question_id: string;
  correct: boolean;
}

export function Answers({ answer, id, question_id, correct }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <p className="text w-full text-left font-semibold">{answer}</p>
      <form action={Correct}>
        <input type="hidden" name="answer_id" value={id} />
        <input type="hidden" name="question_id" value={question_id} />
        {correct === true ? (
          <button
            type="submit"
            className="h-8 w-8 min-w-[2rem] rounded-full ring-green-600 text-atlas-teal active:bg-teal-500 active:text-white  ring-2 "
          >
            <CheckIcon />
          </button>
        ) : (
          <button
            type="submit"
            className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 text-atlas-teal active:bg-primary active:text-white active:outline-hidden active:ring-2 active:ring-primary"
          >
            <CheckIcon />
          </button>
        )}
      </form>
    </div>
  );
}
