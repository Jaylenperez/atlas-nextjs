"use server";

import { revalidatePath } from "next/cache";
import { insertTopic, insertQuestion, incrementVotes, insertAnswer, markCorrectAnswer } from "./data";
import { redirect } from "next/navigation";
import { title } from "process";

export async function addTopic(data: FormData) {
  let topic;
  try {
    topic = await insertTopic({
      title: data.get("title") as string,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add topic.");
  } finally {
    revalidatePath("/ui/topics/[id]", "page");
    topic && redirect(`/ui/topics/${topic.id}`);
  }
}

export async function addQuestion(question: FormData) {
  try {
    insertQuestion({
      title: question.get("title") as string,
      topic_id: question.get("topic_id") as string,
      votes: 0,
    });
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add question.");
  }
}

export async function addVote(data: FormData) {
    try {
        incrementVotes(data.get("id") as string);
        revalidatePath("/ui/topics/[id]", "page");
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to add vote.");
    }
}

export async function answerQuestion(data: FormData) {
    try{
        insertAnswer({
            answer: data.get("title") as string,
            question_id: data.get("question_id") as string,
        });
        revalidatePath("/ui/questions/[id]", "page");
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to add answer.")
    }
    }


export async function Correct(question: FormData){
    try{
        markCorrectAnswer({
            id: question.get("question_id") as string,
            answer_id: question.get("answer_id") as string
        })
        
    }catch (e){
        console.error("Didn't mark new answer")
        throw new Error("Didnt mark new answer")
    }
}