import { atom, selector } from "recoil";

// 재사용을 위해 타입 추가 필요, 모든 단어가 장르에 있지 않으므로 타입으로 엄격히 관리
type GenreTypes = "romance";

/** 웹툰 장르 */
export const genreState = atom<GenreTypes>({
  key: "genre",
  default: "romance",
});

/** 웹툰 장르 한글명 반환 selector */
export const genreKorean = selector({
  key: "genre_korean",
  get: ({ get }) => {
    switch (get(genreState)) {
      case "romance":
        return "로맨스";
      default:
        return "로맨스";
    }
  },
});

/** 웹툰 리스트 */
export const webtoonListState = atom<WebtoonInfo[]>({
  key: "webtoonList",
  default: [],
});

/** 필터 */
export const filterObState = atom<{
  [key: string]: (value: any) => boolean | any;
}>({
  key: "filterOb",
  default: {},
});
