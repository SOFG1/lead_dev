import { memo, useMemo } from 'react';
import type { IQuestion } from '../types/IQuestion';
import s from './AnsweredTopicsComponent.module.css';
import { allQuestions } from '../questions';

interface Props {
  answeredQuestions: IQuestion[];
  answeredCount: number;
  wrongCount: number;
}

//List of topics
const allTopics = allQuestions.reduce((a: string[], q: { tag: string }) => {
  if (!a.includes(q.tag)) a.push(q.tag);
  return a;
}, []);

export const AnsweredTopicsComponent = memo(
  ({ answeredQuestions, answeredCount, wrongCount }: Props) => {
    const topicsList = useMemo(() => {
      return allTopics.filter((topic) => {
        const totalCount = allQuestions.filter((q) => q.tag === topic).length;
        const answered = answeredQuestions.filter(
          (q) => q.tag === topic
        ).length;
        return totalCount === answered;
      });
    }, [answeredQuestions]);

    return (
      <div className={s.results}>
        <span style={{ color: 'green' }}>{answeredCount}</span>{' '}
        <span style={{ color: 'red' }}>{wrongCount}</span>
        <div className={s.list}>
          {topicsList.map((t) => (
            <p className={s.topic} key={t}>
              {t}
            </p>
          ))}
        </div>
      </div>
    );
  }
);
