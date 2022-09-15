import { useInfiniteQuery } from "react-query";
import { useRecoilValue, useRecoilState } from "recoil";

// Store
import { genreState, webtoonListState } from "Store";

// Lib
import { sendAPI } from "Lib";

let nextPage: number | null | any = 1;

// api 에서 웹툰 데이터를 받아오는 Hook
export default function useGetWebtoonInfo() {
  const genre = useRecoilValue(genreState); // 설정된 장르에 따라 가져오는 장르가 달라짐
  const [webtoonList, setWebtoonList] = useRecoilState(webtoonListState);

  const { status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      "get_webtoon_info",
      ({ pageParam = nextPage }) =>
        sendAPI({
          url: `/api/comics/${genre}`,
          options: {
            params: {
              page: pageParam,
            },
          },
        }),
      {
        refetchOnWindowFocus: false,
        enabled: nextPage ? true : false,
        getNextPageParam: (res) => {
          if (res.data.hasNext) return nextPage;
          else return null;
        },
        onSuccess: (data) => {
          const tmpData = data?.pages[data.pages.length - 1].data.data.map(
            (data: WebtoonInfo) => {
              return { ...data, isView: true };
            }
          );
          nextPage++;
          setWebtoonList([...webtoonList, ...tmpData]);
        },
      }
    );
  return {
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
