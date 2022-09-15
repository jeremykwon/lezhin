import { BrowserRouter, Route, Routes } from "react-router-dom";

// page
import { CartoonRanking } from "Pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartoonRanking />} />
      </Routes>
    </BrowserRouter>
  );
}
