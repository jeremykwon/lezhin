type DateOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

// 작자 정보
type Artist = {
  name: string;
  role: string;
  id: string;
};

// 웹툰 연재 일정
type Schedule = {
  anchor: 0;
  periods: DateOfWeek[]; // TODO
};

// 서버에서 받아온 웹툰 정보
type WebtoonInfo = {
  alias: string; // "snail"
  artists: Artist[];
  contentsState: string; //"completed"
  currentRank: number;
  freedEpisodeSize: number;
  genres: string[]; //"romance"
  id: number;
  isPrint: false;
  schedule: Schedule;
  title: string;
  updatedAt: number;
  thumbnailSrc: string;
  previousRank: number;
  currentRank: number;
  isView?: boolean;
};

// 필터 옵션들 정의
// filter 추가시 type정의 필요
type FilterOption = "all" | "completed" | "scheduled" | "freedEpisode";
