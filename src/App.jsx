import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Error</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
