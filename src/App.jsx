import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Comment from "./pages/Comment";
import ProjectDetail from "./components/ProjectDetail";

// Komponen untuk Landing Page
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Comment />
      <Footer />
    </>
  );
};

// Komponen Footer
const Footer = () => {
  return (
    <footer className="relative">
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Vicky-Chaubey™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* Animated Background akan selalu dirender pertama */}
      <AnimatedBackground />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman Detail Project Terpisah */}
        <Route
          path="/project/:id"
          element={
            <>
              <ProjectDetail />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;