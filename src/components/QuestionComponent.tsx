import SyntaxHighlighter from "react-syntax-highlighter";
import type { IQuestion } from "../types/IQuestion";
import s from "./QuestionComponent.module.css";
//import all from 'react-syntax-highlighter/dist/esm/styles/prism';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/hljs';


interface Props {
  question: IQuestion;
  showAnswer: boolean;
}

export const QuestionComponent = ({ question, showAnswer }: Props) => {
  return (
    <div>
      <p className={s.tag}>{question.tag}</p>
      <h2 className={s.title}>
        <span>{question.id! + 1}.</span> {question.title}
      </h2>
      <p className={s.answer} style={{ opacity: showAnswer ? 1 : 0 }}>
        {question.answer}
      </p>
      {question.code && (
        <SyntaxHighlighter language="TypeScript" style={dark} customStyle={{fontSize: "12px"}}>
          {question.code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
