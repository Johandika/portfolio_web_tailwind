import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Navbar from "./pages/sections/Navbar";
import ProjectId from "./pages/ProjectId";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/project/:id"
          element={<ProjectId />}
        />
        <Route
          path="/test"
          element={<Test />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
