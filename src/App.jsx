import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/sections/Navbar";
import ProjectId from "./pages/ProjectId";
import ProjectProgrammerId from "./pages/ProjectProgrammerId";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/animation/ScrollToTop";
import UnderConstruction from "./pages/UnderConstruction";
import Logo from "./pages/Logo";
import MultipleLink from "./pages/MultipleLink";
import Fonts from "./pages/Fonts";
import UIGallery from "./pages/UIGallery";
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
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
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
          path="/project-programmer/:id"
          element={<ProjectProgrammerId />}
        />
        <Route
          path="/test"
          element={<UnderConstruction />}
        />
        <Route
          path="/products/logo"
          element={<Logo />}
        />
        <Route
          path="/products/fonts"
          element={<Fonts />}
        />
        <Route
          path="/products/code"
          element={<UnderConstruction />}
        />
        <Route
          path="/products/uidesign"
          element={<UIGallery />}
        />
        <Route
          path="/links/:id"
          element={<MultipleLink />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
