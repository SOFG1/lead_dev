// @vitest-environment jsdom

import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { allQuestions } from '../questions';
import { useAnsweredQuestions } from './useAnsweredQuestions';
import { useTodaysStats } from './useTodaysStats';
import type { IQuestion } from '../types/IQuestion';

describe('hooks', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-01-15T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('tracks today answered counts and list counts in storage', () => {
    const { result } = renderHook(() => useTodaysStats());

    expect(result.current.todayAnswered).toBe(0);
    expect(result.current.todayAnsweredLists).toBe(0);

    act(() => {
      result.current.increaseAnsweredCount(true);
    });

    expect(result.current.todayAnswered).toBe(1);
    expect(result.current.todayAnsweredLists).toBe(1);

    const todaysStats = JSON.parse(
      localStorage.getItem('TODAYS_STATS') || '{}'
    );
    expect(todaysStats).toEqual({ '15': { count: 1, listsCount: 1 } });

    act(() => {
      result.current.increaseAnsweredCount(false);
    });

    expect(result.current.todayAnswered).toBe(2);
    expect(result.current.todayAnsweredLists).toBe(1);
  });

  it('loads saved todays stats from localStorage on mount', () => {
    localStorage.setItem(
      'TODAYS_STATS',
      JSON.stringify({ '15': { count: 4, listsCount: 2 } })
    );

    const { result } = renderHook(() => useTodaysStats());

    expect(result.current.todayAnswered).toBe(4);
    expect(result.current.todayAnsweredLists).toBe(2);
  });

  it('stores answered questions and restores them for the same day', () => {
    const questions = allQuestions.slice(0, 2);

    const { result } = renderHook(() => useAnsweredQuestions());

    act(() => {
      result.current.setAnsweredQuestionsList(questions as IQuestion[]);
    });

    expect(result.current.answeredQuestionsList).toEqual(questions);

    const storageValue = JSON.parse(
      localStorage.getItem('ANSWERED_INDEXES') || '{}'
    );
    expect(storageValue).toMatchObject({
      date: 15,
      listOfIndexes: [0, 1],
    });

    const { result: restoredResult } = renderHook(() => useAnsweredQuestions());

    expect(restoredResult.current.answeredQuestionsList).toEqual(questions);
  });

  it('ignores answered questions from a different day', () => {
    localStorage.setItem(
      'ANSWERED_INDEXES',
      JSON.stringify({ date: 14, listOfIndexes: [0, 1] })
    );

    const { result } = renderHook(() => useAnsweredQuestions());

    expect(result.current.answeredQuestionsList).toEqual([]);
  });
});
