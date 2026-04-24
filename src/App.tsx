import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/homepage-components/ScrollToTop";
import "./App.css";
import ProjectsSection from "./components/homepage-components/ProjectsSection";
import ProjectShikshaSankalp from "./pages/ProjectShikshaSankalp";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ExpertisePage from "./pages/ExpertisePage";
import ResearchPage from "./pages/ResearchPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import MentorshipPage from "./pages/MentorshipPage";
import ConsultancyMediaPage from "./pages/ConsultancyMediaPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<ProjectsSection />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="expertise" element={<ExpertisePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="workshops" element={<WorkshopsPage />} />
          <Route path="mentorship" element={<MentorshipPage />} />
          <Route path="consultancy" element={<ConsultancyMediaPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="shiksha-sankalp" element={<ProjectShikshaSankalp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// #70d6ff
// #ff70a6
// #ff9770
// #ffd670
// #e9ff70
