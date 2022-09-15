import { useMemo, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { cloneDeep, isEqual } from "lodash";

// Store
import { filterObState, webtoonListState } from "Store";

export default function useFilterEvent(type: FilterOption) {
  const [filterOb, setFilterOb] = useRecoilState(filterObState);
  const [webtoonList, setWebtoonList] = useRecoilState(webtoonListState);

  // 무료회차 3회 이상 필터링
  const freedEpisodeHandler = useCallback(() => {
    let tmpFilterOb = cloneDeep(filterOb);
    if (tmpFilterOb.hasOwnProperty("freedEpisode")) {
      delete tmpFilterOb.freedEpisode;
    } else {
      tmpFilterOb.freedEpisode = (webtoon: WebtoonInfo) => {
        if (webtoon.freedEpisodeSize >= 3) return true;
        else return false;
      };
    }
    setFilterOb(tmpFilterOb);
  }, [filterOb]);

  // 연재중 필터링
  const scheduledHandler = useCallback(() => {
    let tmpFilterOb = cloneDeep(filterOb);
    if (tmpFilterOb.hasOwnProperty("scheduled")) {
      delete tmpFilterOb.scheduled;
    } else {
      delete tmpFilterOb.completed;
      tmpFilterOb.scheduled = (webtoon: WebtoonInfo) => {
        if (webtoon.contentsState === "scheduled") return true;
        else return false;
      };
    }
    setFilterOb(tmpFilterOb);
  }, [filterOb]);

  // 완결 필터링
  const completedHandler = useCallback(() => {
    let tmpFilterOb = cloneDeep(filterOb);
    if (tmpFilterOb.hasOwnProperty("completed")) {
      delete tmpFilterOb.completed;
    } else {
      delete tmpFilterOb.scheduled;
      tmpFilterOb.completed = (webtoon: WebtoonInfo) => {
        if (webtoon.contentsState === "completed") return true;
        else return false;
      };
    }
    setFilterOb(tmpFilterOb);
  }, [filterOb]);

  // 전체
  const allHandler = useCallback(() => {
    setFilterOb({});
  }, []);

  // 필터 버튼 클릭 이벤트를 컨트롤 하는 핸들러
  const handler = useMemo(() => {
    switch (type) {
      case "completed":
        return completedHandler;
      case "scheduled":
        return scheduledHandler;
      case "freedEpisode":
        return freedEpisodeHandler;
      case "all":
        return allHandler;
    }
  }, [filterOb]);

  // 선택된 필터 로직들을 검사해 필터링된 데이터만 보여주도록 하는 effect
  useEffect(() => {
    let tmpWebtoonList = cloneDeep(webtoonList);

    tmpWebtoonList = tmpWebtoonList.map((webtoon) => {
      let flag = true;
      for (let filterKey of Object.keys(filterOb)) {
        flag = filterOb[filterKey](webtoon);
        if (!flag) break;
      }

      if (flag) return { ...webtoon, isView: true };
      else return { ...webtoon, isView: false };
    });

    if (!isEqual(tmpWebtoonList, webtoonList)) setWebtoonList(tmpWebtoonList);
  }, [webtoonList, filterOb]);

  return { handler };
}
