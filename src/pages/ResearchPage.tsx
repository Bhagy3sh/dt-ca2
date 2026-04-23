import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const publications = [
  { title: "Design Thinking as a Catalyst for Innovation in Indian Engineering Education", journal: "Journal of Engineering Education Transformations", year: "2024", type: "Journal Paper", doi: "10.16920/jeet/2024/v37i1/24015" },
  { title: "AI-Enhanced Empathy Mapping: A New Paradigm for User Research", journal: "International Journal of Human-Computer Interaction", year: "2023", type: "Journal Paper", doi: "10.1080/10447318.2023.2198765" },
  { title: "Integrating Design Thinking with Lean Startup for Student Ventures", journal: "Procedia - Social and Behavioral Sciences", year: "2023", type: "Conference Paper", doi: "10.1016/j.sbspro.2023.05.042" },
  { title: "The Role of Prototyping in Design Thinking: A Systematic Literature Review", journal: "Design Studies", year: "2022", type: "Journal Paper", doi: "10.1016/j.destud.2022.101098" },
  { title: "Innovation Ecosystems in Higher Education: Lessons from Indian Universities", journal: "Technovation", year: "2022", type: "Journal Paper", doi: "10.1016/j.technovation.2022.102545" },
  { title: "Empathy-Driven Product Development: Case Studies from Student Innovation Labs", journal: "DESRIST 2021", year: "2021", type: "Conference Paper", doi: "10.1007/978-3-030-82405-1_22" },
  { title: "Six Sigma and Design Thinking: A Synergistic Framework for Process Innovation", journal: "Quality Engineering", year: "2020", type: "Journal Paper", doi: "10.1080/08982112.2020.1784321" },
  { title: "Smart Campus Design: Applying Human-Centered Methods to University Infrastructure", journal: "Facilities", year: "2020", type: "Journal Paper", doi: "10.1108/F-03-2020-0032" },
];

const patents = [
  { title: "AI-Powered Design Thinking Assessment Framework", number: "IN202121045678", year: "2023", status: "Granted" },
  { title: "Gamified Innovation Pedagogy Platform", number: "IN202021034567", year: "2022", status: "Published" },
  { title: "IoT-Based Smart Classroom Engagement Tracker", number: "IN201921056789", year: "2021", status: "Granted" },
];

const ResearchPage = () => {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(publications.map(p => p.type)))];
  const filtered = filter === "All" ? publications : publications.filter(p => p.type === filter);

  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">research & publications</h1>
      <p className="roboto text-gray-600 mb-10">
        Contributing to the body of knowledge in Design Thinking, Innovation Management, and AI in Education through rigorous academic research.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { value: "45+", label: "Publications" },
          { value: "8", label: "Patents" },
          { value: "350+", label: "Citations" },
        ].map((s, i) => (
          <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border border-blue-100 text-center">
            <p className="text-3xl font-bold text-[#70d6ff]">{s.value}</p>
            <p className="text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm font-bold text-gray-700">Filter:</span>
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              filter === t ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Publications List */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">PUBLICATIONS</h2>
      <div className="space-y-4">
        {filtered.map((pub, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffd670] text-gray-800">{pub.year}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">{pub.type}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{pub.title}</h3>
                <p className="text-sm text-gray-500">{pub.journal}</p>
              </div>
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors flex-shrink-0">
                <FiExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Patents */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px] mt-16">PATENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {patents.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.status === "Granted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                {p.status}
              </span>
              <span className="text-xs text-gray-500">{p.year}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
            <p className="text-xs text-gray-500 font-mono">{p.number}</p>
          </div>
        ))}
      </div>

      {/* Research Interests */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px] mt-16">CURRENT RESEARCH INTERESTS</h2>
      <div className="grid grid-cols-2 gap-2">
        {[
          "AI-Enhanced Design Thinking Pedagogy",
          "Innovation Ecosystem Frameworks",
          "Human-Centered AI Systems",
          "Startup Success Prediction Models",
          "Empathy Measurement in Design",
          "Sustainable Innovation in SMEs",
        ].map((topic, i) => (
          <div key={i} className="bg-[#ff9770] p-6 text-white text-center rounded-lg font-bold roboto" style={{ minHeight: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
