import { setupWorker } from "msw";
import { handlers } from "./Handler";

const worker = (() => {
  if (process.env.NODE_ENV === "development") {
    return setupWorker(...handlers);
  } else {
    return undefined;
  }
})();

export default worker;
