import { Link } from "react-router-dom";

const startups = [
  { name: "EduFlow", domain: "EdTech", outcome: "Secured ₹50 Lakh seed funding, serving 10,000+ students", year: "2023" },
  { name: "GreenRoute", domain: "Sustainable Logistics", outcome: "Won Smart India Hackathon 2022, pilot with Pune Municipal Corporation", year: "2022" },
  { name: "MediTrack", domain: "HealthTech", outcome: "Selected for NASSCOM 10,000 Startups program", year: "2021" },
  { name: "FarmConnect", domain: "AgriTech", outcome: "Operational in 3 districts of Maharashtra, 500+ farmers onboarded", year: "2020" },
];

const successStories = [
  { name: "Ananya Sharma", role: "Founder, EduFlow", quote: "Dr. Kothawade didn't just mentor my startup — he taught me to see the world through my users' eyes. That single shift in perspective changed everything." },
  { name: "Rohan Deshmukh", role: "CTO, GreenRoute", quote: "The Design Thinking workshops with Dr. Kothawade gave our team the framework to go from a vague idea to a validated product in just 8 weeks." },
  { name: "Priya Mehta", role: "Product Lead, TCS Innovation Lab", quote: "As his student, I learned that innovation isn't about technology — it's about empathy. That lesson has defined my career." },
];

const MentorshipPage = () => {
  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">mentorship & impact</h1>
      <p className="roboto text-gray-600 mb-10">
        Over the past decade, I have mentored 200+ student startups, guided innovation cells across 3 universities, and facilitated the journey of young entrepreneurs from ideation to market.
      </p>

      {/* Startups */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">STARTUPS MENTORED</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {startups.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-900">{s.name}</h3>
                <span className="text-xs text-gray-500">{s.domain}</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffd670] text-gray-800">{s.year}</span>
            </div>
            <p className="text-sm text-gray-600">{s.outcome}</p>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">STUDENT SUCCESS STORIES</h2>
      <div className="space-y-8 mb-16">
        {successStories.map((story, i) => (
          <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className="w-[70%]">
              <p className="text-[#70d6ff] text-2xl font-bold italic roboto">"{story.quote}"</p>
              <cite className="not-italic block text-gray-500 mt-4">
                - {story.name}, {story.role}
              </cite>
            </div>
          </div>
        ))}
      </div>

      {/* Innovation Cells */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">INNOVATION CELL INITIATIVES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "SIT Innovation Cell", desc: "University-wide innovation hub fostering entrepreneurship and design thinking across all departments.", metric: "500+ students engaged annually" },
          { name: "Startup Incubation Program", desc: "12-month structured program providing mentoring, funding access, and market validation support.", metric: "40% startup survival rate" },
          { name: "Industry-Academia Bridge", desc: "Connecting students with industry partners for real-world problem solving and internship opportunities.", metric: "25+ industry partners" },
        ].map((cell, i) => (
          <div key={i} className="bg-[#ff9770] p-6 text-white rounded-lg" style={{ minHeight: "150px" }}>
            <h3 className="font-bold text-lg mb-2">{cell.name}</h3>
            <p className="text-sm opacity-90 mb-3">{cell.desc}</p>
            <p className="text-xs font-bold">✓ {cell.metric}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/contact" className="text-[#70d6ff] font-bold hover:underline">
          → Apply for Mentorship
        </Link>
      </div>
    </div>
  );
};

export default MentorshipPage;
