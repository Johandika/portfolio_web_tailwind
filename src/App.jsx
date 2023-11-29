import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Navbar from "./pages/sections/Navbar";
import ProjectId from "./pages/ProjectId";
import AnimatedCursor from "react-animated-cursor"
import ScrollToTop from "./components/animation/ScrollToTop";

function App() {

  const isLaptop = window.innerWidth >= 768;
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      {isLaptop && (
        <AnimatedCursor
          innerSize={10}
          outerSize={12}
          color="360, 100, 91"
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={8}
          trailingSpeed={8}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
        />
      )}
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
