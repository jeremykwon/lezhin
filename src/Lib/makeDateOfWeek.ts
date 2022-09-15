export default function makeDateOfWeek(enName: DateOfWeek) {
  switch (enName) {
    case "MON":
      return "월";
    case "TUE":
      return "화";
    case "WED":
      return "수";
    case "THU":
      return "목";
    case "FRI":
      return "금";
    case "SAT":
      return "토";
    case "SUN":
      return "일";
  }
}
