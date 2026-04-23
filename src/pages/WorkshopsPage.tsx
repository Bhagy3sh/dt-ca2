import { Link } from "react-router-dom";

const workshops = [
  { title: "Design Thinking for Industry 4.0", type: "Corporate Training", organization: "Tata Consultancy Services (TCS)", date: "March 2025", participants: "120+", description: "A 3-day intensive workshop on applying Design Thinking to Industry 4.0 challenges including IoT, AI, and smart manufacturing." },
  { title: "Innovation Sprint: From Idea to Prototype in 48 Hours", type: "Hackathon / Workshop", organization: "Symbiosis Institute of Technology", date: "January 2025", participants: "250+", description: "A university-wide innovation sprint where students built functional prototypes for real-world problems using the Design Thinking process." },
  { title: "Empathy-Driven Product Design", type: "Faculty Development Program", organization: "AICTE", date: "November 2024", participants: "80+", description: "A week-long FDP training faculty members across India on integrating empathy-driven approaches into engineering curricula." },
  { title: "Lean Startup + Design Thinking Masterclass", type: "Seminar", organization: "Pune Startup Ecosystem (PSE)", date: "August 2024", participants: "150+", description: "A full-day masterclass for early-stage entrepreneurs on combining Lean Startup methodology with Design Thinking for rapid validation." },
  { title: "AI in Education: Transforming Learning Through Technology", type: "International Conference Talk", organization: "IEEE International Conference on Education Technology", date: "June 2024", participants: "500+", description: "Keynote presentation on how AI is reshaping educational paradigms and the role of Design Thinking in humanizing technology." },
  { title: "Supply Chain Excellence Through Design Thinking", type: "Corporate Training", organization: "Mahindra & Mahindra", date: "February 2024", participants: "60+", description: "A 2-day workshop for supply chain managers on applying human-centered design to logistics and procurement challenges." },
];

const WorkshopsPage = () => {
  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">workshops & training</h1>
      <p className="roboto text-gray-600 mb-10">
        Conducting impactful workshops, seminars, and corporate training programs that empower teams to think differently and innovate effectively.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { value: "80+", label: "Workshops Conducted" },
          { value: "5,000+", label: "Total Participants" },
          { value: "15+", label: "Organizations Served" },
        ].map((s, i) => (
          <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border border-blue-100 text-center">
            <p className="text-3xl font-bold text-[#70d6ff]">{s.value}</p>
            <p className="text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Workshops List */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">FEATURED WORKSHOPS</h2>
      <div className="space-y-6">
        {workshops.map((w, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-48 flex-shrink-0">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffd670] text-gray-800 inline-block mb-2">{w.type}</span>
                <p className="text-sm text-gray-500">{w.date}</p>
                <p className="text-sm text-gray-500">{w.organization}</p>
                <p className="text-sm text-gray-500">{w.participants} participants</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600">{w.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workshop Topics */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px] mt-16">AVAILABLE WORKSHOP TOPICS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {[
          "Design Thinking Foundations",
          "Innovation Sprint (48-hour)",
          "Lean Startup Methodology",
          "Empathy-Driven Product Design",
          "AI in Education & Research",
          "Supply Chain Excellence",
          "Six Sigma & Process Innovation",
          "Entrepreneurship & Startups",
          "Human-Centered AI Systems",
        ].map((topic, i) => (
          <div key={i} className="bg-[#ff9770] p-4 text-white text-center rounded-lg font-bold roboto text-sm" style={{ minHeight: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {topic}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/contact" className="text-[#70d6ff] font-bold hover:underline">
          → Request a Workshop for Your Organization
        </Link>
      </div>
    </div>
  );
};

export default WorkshopsPage;
