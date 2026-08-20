// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { QuizPage } from "./QuizPage";

describe("QuizPage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("shows the current question and reveals the answer when requested", () => {
    render(<QuizPage />);

    expect(screen.getByRole("heading", { name: /1\./i })).toBeTruthy();
    const answerText = screen.getByText(/hidden, image, color, month, week, search/i);
    const answerWrapper = answerText.parentElement as HTMLElement;

    expect(answerWrapper.style.opacity).toBe("0");

    fireEvent.click(screen.getAllByRole("button", { name: /show answer/i })[0]);

    expect(answerWrapper.style.opacity).toBe("1");
  });

  it("moves to the next question after answering a question", () => {
    render(<QuizPage />);

    fireEvent.click(screen.getAllByRole("button", { name: /show answer button/i })[0]);
    fireEvent.click(screen.getAllByRole("button", { name: /know button/i })[0]);

    expect(screen.getByRole("heading", { name: /2\./i })).toBeTruthy();
    expect(screen.getByText(/css float/i)).toBeTruthy();
  });
});
