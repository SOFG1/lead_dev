import { questions } from "../questions";
import { QuestionComponent } from "../components/QuestionComponent";
import s from "./QuizPage.module.css";
import { SettingsModal } from "../components/SettingsModal";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultSettings, type ISettings } from "../types/ISettings";
import { generateRandomNumber } from "../utils/generateRandomNumber";

export const QuizPage = () => {
  const [settings, setSettings] = useState<ISettings>();
  const [questionIndex, setQuestionIndex] = useState<number>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showAnswerButtons, setShowAnswerButtons] = useState(true);
  const [currenQuestionAnswered, setCurrentQuestionAnsered] = useState(false)

  const question = useMemo(() => {
    if (typeof questionIndex === "number" && questions[questionIndex]) {
      return questions[questionIndex];
    }
  }, [questions, questionIndex]);

  const setNextQuestion = useCallback(() => {
    setShowAnswer(false);
    setShowAnswerButtons(true)
    setCurrentQuestionAnsered(false)
    if (settings && settings.random) {
      const index = generateRandomNumber(0, questions.length - 1);
      setQuestionIndex(index);
    }
    if (settings && !settings.random) {
      setQuestionIndex(0);
    }
  }, [settings, questions]);

  const buttonClick = (type: "yes" | "no") => {
    setCurrentQuestionAnsered(true)
    if (type === "yes") {
      setAnsweredCount(answeredCount + 1);
      setNextQuestion();
    }
    if (type === "no" && showAnswer) {
      setWrongCount(wrongCount + 1);
      setNextQuestion();
    }
    if (type === "no" && !showAnswer) {
      setWrongCount(wrongCount + 1);
      setShowAnswer(true);
      setShowAnswerButtons(false)
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
    if (typeof questionIndex !== "number") {
      setNextQuestion();
    }
  }, [questionIndex, setNextQuestion]);

  return (
    <div className={s.wrapper}>
      <div className={s.results}>
        <span style={{ color: "green" }}>{answeredCount}</span>{" "}
        <span style={{ color: "red" }}>{wrongCount}</span>
      </div>
      <SettingsModal
        settings={settings || defaultSettings}
        onChangeSettings={(s) => setSettings(s)}
      />
      {question && (
        <QuestionComponent
          question={question}
          showAnswer={showAnswer}
          index={0}
        />
      )}
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
            onClick={() => setNextQuestion()}
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
    </div>
  );
};
