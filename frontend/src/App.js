import "./App.css";
import FourSculpture from "./pages/FourSculpture";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<FourSculpture />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
