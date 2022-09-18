import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Record from "./pages/Record/Record";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./components/MainPage/MainPage";
function App() {
  return (
    <div className="mainWrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/record" element={<Record />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
