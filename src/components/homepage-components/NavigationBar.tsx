import { scroller } from "react-scroll";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      // Already on home → smooth scroll
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -70, // adjust for fixed navbar height
      });
    } else {
      // Go to home and pass scroll target
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className={`p-8 h-[100px] justify-between flex items-center`}>
      <Link to="/" className="text-6xl font-bold">
        <span className="text-[#70d6ff]">R</span>
        <span className="text-purple-600">K</span>
      </Link>
      <div className="flex gap-8 justify-end content-end flex-wrap">
        <button onClick={() => handleNavClick("about")}>About</button>
        <Link to="/expertise">Expertise</Link>
        <button onClick={() => handleNavClick("projects")}>Projects</button>
        <Link to="/research">Research</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/mentorship">Mentorship</Link>
        <Link to="/consultancy">Consultancy</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;