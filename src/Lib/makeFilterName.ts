export default function makeFilterName(type: FilterOption) {
  switch (type) {
    case "completed":
      return "완결";
    case "scheduled":
      return "연재중";
    case "freedEpisode":
      return "무료회차 3회 이상";
    default:
      return "전체";
  }
}
