import { useEffect, useState } from "react";
import type { IQuestion } from "../types/IQuestion";
import { allQuestions } from "../questions";

const ANSWERED_INDEXES = "ANSWERED_INDEXES";

export const useAnsweredQuestions = () => {
  const [answeredQuestionsList, setAnsweredQuestionsList] = useState<
    IQuestion[]
  >([]);

  const setQuestionsHandler = (questions: IQuestion[]) => {
    setAnsweredQuestionsList(questions);
    //Set in local storage
    const listOfIndexes = questions.map((question) =>
      allQuestions.findIndex(
        (q) => q.tag === question.tag && q.title === question.title
      )
    );
    localStorage.setItem(
      ANSWERED_INDEXES,
      JSON.stringify({ listOfIndexes, date: new Date().getDate() })
    );
  };

  //Load saved items from Local Storage
  useEffect(() => {
    const savedItems = localStorage.getItem(ANSWERED_INDEXES);
    if (!savedItems) return;
    const data = JSON.parse(savedItems);
    if (data.date === new Date().getDate()) {
      const items = data.listOfIndexes.map((i: number) => allQuestions[i]);
      setAnsweredQuestionsList(items);
    }
  }, []);

  return {
    answeredQuestionsList,
    setAnsweredQuestionsList: setQuestionsHandler,
  };
};
