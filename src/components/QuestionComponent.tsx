import type { IQuestion } from '../types/IQuestion';
import s from "./QuestionComponent.module.css"

interface Props {
    question: IQuestion
    index: number
    showAnswer: boolean
}

export const QuestionComponent = ({index, question, showAnswer}: Props) => {
    return <div>
        <h2 className={s.title}><span>{index + 1}.</span> {question.title}</h2>
        <p className={s.answer} style={{opacity: showAnswer ? 1 :0}}>{question.answer}</p>
    </div>
}