import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

import "./Styles/Color.css";
import "./index.css";
import App from "./App";
import worker from "Mocks/Worker";

export const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  worker?.start({
    onUnhandledRequest: "bypass",
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
