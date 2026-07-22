import { QuestionComponent } from "../components/QuestionComponent";
import s from "./QuizPage.module.css";
import { SettingsModal } from "../components/SettingsModal";
import { useEffect, useState } from "react";
import { defaultSettings, type ISettings } from "../types/ISettings";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import type { IQuestion } from "../types/IQuestion";
import { allQuestions } from "../questions";
import { AnsweredTopicsComponent } from "../components/AnsweredTopicsComponent";
import { useAnsweredQuestions } from "../hooks/useAnsweredQuestions";
import { useTodaysStats } from "../hooks/useTodaysStats";

const listsCount = allQuestions.filter((q) => q.list).length;

export const QuizPage = () => {
  const [settings, setSettings] = useState<ISettings>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showAnswerButtons, setShowAnswerButtons] = useState(true);
  const [currenQuestionAnswered, setCurrentQuestionAnsered] = useState(false);

  const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);

  const [question, setQuestion] = useState<IQuestion | null>(null);

  const { todayAnswered, todayAnsweredLists, increaseAnsweredCount } =
    useTodaysStats();

  const { answeredQuestionsList, setAnsweredQuestionsList } =
    useAnsweredQuestions();

  const setNextQuestion = (list: IQuestion[]) => {
    if (!list.length) {
      setQuestion(null);
    }
    setShowAnswer(false);
    setShowAnswerButtons(true);
    setCurrentQuestionAnsered(false);
    if (settings && settings.random) {
      const index = generateRandomNumber(0, list.length - 1);
      setQuestion(list[index]);
    }
    if (settings && !settings.random) {
      setQuestion(list[0]);
    }
  };

  const buttonClick = (type: "yes" | "no") => {
    setCurrentQuestionAnsered(true);
    setAnsweredQuestionsList([...answeredQuestionsList, question!]); //Add question to answered list
    const updatedList = questionsList.filter((q) => q.id !== question?.id);
    setQuestionsList(updatedList);
    if (type === "yes") {
      setAnsweredCount(answeredCount + 1);
      increaseAnsweredCount(question?.list);
      setNextQuestion(updatedList);
    }
    if (type === "no" && showAnswer) {
      setWrongCount(wrongCount + 1);
      setNextQuestion(updatedList);
    }
    if (type === "no" && !showAnswer) {
      setWrongCount(wrongCount + 1);
      setShowAnswer(true);
      setShowAnswerButtons(false);
    }
  };

  //Set settings from LocalStorage
  useEffect(() => {
    if (settings) return;
    const savedSettings = localStorage.getItem("settings");
    const value = savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    setSettings(value);
  }, [settings]);

  //Set initial question index
  useEffect(() => {
    if (!question && questionsList.length) {
      setNextQuestion(questionsList);
    }
  }, [question, questionsList, settings]);

  useEffect(() => {
    let list = allQuestions.map((q, i) => ({ ...q, id: i }));
    if (settings?.tags.length) {
      list = list.filter((q) => settings.tags.includes(q.tag));
    }
    if (settings?.lists) {
      list = list.filter((q) => q.list);
    }
    setQuestionsList(list);
    setNextQuestion(list);
  }, [settings?.tags, settings?.lists]);

  return (
    <div className={s.wrapper}>
      <AnsweredTopicsComponent
        answeredCount={answeredCount}
        wrongCount={wrongCount}
        answeredQuestions={answeredQuestionsList}
      />
      <SettingsModal
        settings={settings || defaultSettings}
        onChangeSettings={(s) => setSettings(s)}
      />
      {question && (
        <>
          <QuestionComponent question={question} showAnswer={showAnswer} />
          <div className={s.buttons}>
            {!showAnswer && (
              <button
                className={`${s.button} ${s.show_answer}`}
                onClick={() => setShowAnswer(true)}
              >
                Show answer
              </button>
            )}
            {showAnswer && currenQuestionAnswered && (
              <button
                className={`${s.button} ${s.show_answer}`}
                onClick={() => setNextQuestion(questionsList)}
              >
                Next question
              </button>
            )}
            {showAnswerButtons && (
              <>
                <button
                  className={`${s.button} ${s.dont_know}`}
                  onClick={() => buttonClick("no")}
                >
                  Don't know
                </button>
                <button
                  className={`${s.button} ${s.know}`}
                  onClick={() => buttonClick("yes")}
                >
                  Know answer
                </button>
              </>
            )}
          </div>
        </>
      )}
      {!question && <p>No questions left</p>}
      <div className={s.todayAnswered}>
        <p className={s.todayAnsweredText}>
          Today answered: {todayAnswered} ({todayAnsweredLists})
        </p>
      </div>

      <div className={s.total}>
        <p className={s.totalText}>Total: {allQuestions.length}</p>
        <p>Total lists: {listsCount}</p>
        <p className={s.current}>
          Current questions: <span>{questionsList.length}</span>
        </p>
      </div>
    </div>
  );
};
