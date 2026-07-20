import { useEffect, useMemo, useState } from "react";

const TODAYS_STATS = "TODAYS_STATS";

export const useTodaysStats = () => {
  const [count, setCount] = useState<number>(0);

  const todayDate = useMemo(() => {
    return new Date().getDate().toString();
  }, []);

  const increaseAnsweredCount = () => {
    const increased = count + 1;
    localStorage.setItem(
      TODAYS_STATS,
      JSON.stringify({ [todayDate]: increased })
    );
    setCount(increased);
  };

  useEffect(() => {
    const todaysStats = localStorage.getItem(TODAYS_STATS);
    const todayCount: string | undefined =
      todaysStats && JSON.parse(todaysStats)[todayDate];
    console.log("saveddddddd", todayCount);
    setCount(todayCount ? Number(todayCount) : 0);
  }, [todayDate]);

  return {
    todayAnswered: count,
    increaseAnsweredCount,
  };
};
