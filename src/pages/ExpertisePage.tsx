import { Link } from "react-router-dom";

const expertise = [
  {
    title: "Design Thinking",
    description: "Expert in applying the EDIPT framework to solve complex, real-world problems. Pioneer of Design Thinking pedagogy in Indian engineering education with a focus on empathy-driven innovation.",
    contributions: [
      "Developed a proprietary 5-stage Design Thinking curriculum adopted by 12+ institutions",
      "Published 15+ papers on Design Thinking in engineering education",
      "Trained 5,000+ students and professionals in DT methodology",
    ],
  },
  {
    title: "Innovation & Entrepreneurship",
    description: "Building innovation ecosystems that transform student ideas into market-ready ventures. Deep experience in startup mentoring, incubation, and scaling.",
    contributions: [
      "Established 3 innovation cells across universities",
      "Mentored 200+ startups with a 40% survival rate (3x national average)",
      "Secured ₹2.5 Cr in startup funding through mentorship programs",
    ],
  },
  {
    title: "AI in Education",
    description: "Integrating Artificial Intelligence into pedagogical frameworks to personalize learning, automate assessment, and predict student outcomes.",
    contributions: [
      "Developed AI-powered student assessment tools for Design Thinking courses",
      "Published research on AI-driven personalization in project-based learning",
      "Led an AICTE-funded project on AI-enhanced innovation ecosystems",
    ],
  },
  {
    title: "Supply Chain & Operations",
    description: "Industry expertise in supply chain optimization, Lean Six Sigma, and operations management from years at Tata Motors and consulting engagements.",
    contributions: [
      "Delivered 30+ corporate training programs in SCM and Six Sigma",
      "Consultancy projects with 10+ manufacturing firms",
      "Reduced supply chain costs by 18% at Tata Motors through process redesign",
    ],
  },
];

const ExpertisePage = () => {
  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">areas of expertise</h1>
      <p className="roboto text-gray-600 mb-10">
        Deep specialization across Design Thinking, Innovation, AI in Education, and Supply Chain — bridging theory and practice for real-world impact.
      </p>

      <div className="space-y-8">
        {expertise.map((area, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h2>
            <p className="text-gray-600 mb-6">{area.description}</p>
            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
              Key Contributions
            </h4>
            <ul className="space-y-2">
              {area.contributions.map((c, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#70d6ff] mt-2 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* EDIPT Framework */}
      <div className="mt-16">
        <h1 className="text-xl font-bold mb-6 tracking-[8px]">THE EDIPT FRAMEWORK</h1>
        <p className="text-gray-600 mb-8">
          Every project, workshop, and mentorship engagement follows the five-stage Design Thinking process — ensuring solutions are human-centered, creative, and validated.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { stage: "Empathize", desc: "Understand users deeply" },
            { stage: "Define", desc: "Frame the real problem" },
            { stage: "Ideate", desc: "Generate creative solutions" },
            { stage: "Prototype", desc: "Build to learn" },
            { stage: "Test", desc: "Validate and iterate" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#ff9770] p-6 text-white text-center rounded-lg"
              style={{ minHeight: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
            >
              <h3 className="font-bold text-lg mb-1">{s.stage}</h3>
              <p className="text-xs opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link to="/contact" className="text-[#70d6ff] font-bold hover:underline">
          → Schedule a Consultation
        </Link>
      </div>
    </div>
  );
};

export default ExpertisePage;
