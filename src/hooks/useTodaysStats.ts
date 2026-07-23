import { useEffect, useMemo, useState } from "react";

const TODAYS_STATS = "TODAYS_STATS";

interface StorageData {
  [data: string]: {
    count: number;
    listsCount: number;
  };
}

export const useTodaysStats = () => {
  const [count, setCount] = useState<number>(0);
  const [listsCount, setListsCount] = useState<number>(0);

  const todayDate = useMemo(() => {
    return new Date().getDate().toString();
  }, []);

  const increaseAnsweredCount = (isList?: boolean) => {
    const increased = count + 1;
    const listsIncreased = isList ? listsCount + 1 : listsCount;
    const data: StorageData = {
      [todayDate]: {
        count: increased,
        listsCount: listsIncreased,
      },
    };
    localStorage.setItem(TODAYS_STATS, JSON.stringify(data));
    setCount(increased);
    setListsCount(listsIncreased);
  };

  useEffect(() => {
    const storageData = localStorage.getItem(TODAYS_STATS);
    const data: StorageData = JSON.parse(storageData || "{}");
    if (data[todayDate]) {
      setCount(data[todayDate].count ? Number(data[todayDate].count) : 0);
      setListsCount(
        data[todayDate].listsCount ? Number(data[todayDate].listsCount) : 0
      );
    }
  }, [todayDate]);

  return {
    todayAnswered: count,
    todayAnsweredLists: listsCount,
    increaseAnsweredCount,
  };
};
