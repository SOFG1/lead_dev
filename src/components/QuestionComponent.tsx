import SyntaxHighlighter from "react-syntax-highlighter";
import type { IQuestion } from "../types/IQuestion";
import s from "./QuestionComponent.module.css";
//import all from 'react-syntax-highlighter/dist/esm/styles/prism';
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  question: IQuestion;
  showAnswer: boolean;
}

export const QuestionComponent = ({ question, showAnswer }: Props) => {
  return (
    <div>
      <p className={s.tag}>{question.tag}</p>
      <h2 className={s.title}>
        <span>{question.id! + 1}.</span> {question.title} {question.list && <span>(list)</span>}
      </h2>
      <div style={{ opacity: showAnswer ? 1 : 0 }}>
        <p className={s.answer}>{question.answer}</p>
        <div className={s.code_wrapper}>
        {question.code && (
          <SyntaxHighlighter
            language="typescript"
            style={monokai}
            customStyle={{ fontSize: "12px", width: "370px", margin: "0 auto"}}
          >
            {question.code}
          </SyntaxHighlighter>
        )}
        </div>
      </div>
    </div>
  );
};
