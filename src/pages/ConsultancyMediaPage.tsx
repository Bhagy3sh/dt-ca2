import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const consultancy = [
  { client: "Tata Motors Ltd.", domain: "Supply Chain Optimization", description: "Redesigned the vendor management process using Design Thinking, resulting in 18% cost reduction and 25% faster onboarding.", year: "2023-24" },
  { client: "Persistent Systems", domain: "Innovation Culture Building", description: "Developed and deployed an internal innovation framework for 2,000+ employees across 4 offices.", year: "2023" },
  { client: "Pune Smart City Development Corporation", domain: "Urban Innovation", description: "Advisory role for the citizen engagement platform — applying human-centered design to public service delivery.", year: "2022-23" },
  { client: "Maharashtra State Innovation Society", domain: "Startup Ecosystem Development", description: "Designed the state-level startup mentorship program structure and evaluation framework.", year: "2021-22" },
];

const awards = [
  { title: "Best Innovation Mentor Award", org: "AICTE", year: "2024" },
  { title: "Excellence in Design Thinking Education", org: "IEEE Education Society", year: "2023" },
  { title: "Outstanding Faculty Award", org: "Symbiosis International University", year: "2022" },
  { title: "Best Paper Award – DESRIST 2021", org: "International Conference on Design Science", year: "2021" },
  { title: "National Innovation Champion", org: "Ministry of Education, Govt. of India", year: "2020" },
  { title: "Certified Design Thinking Practitioner", org: "IDEO / Stanford d.school", year: "2018" },
];

const mediaFeatures = [
  { title: "Design Thinking: The Future of Indian Engineering Education", outlet: "The Hindu Education Plus", year: "2024" },
  { title: "How This Pune Professor is Building India's Next Entrepreneurs", outlet: "YourStory", year: "2023" },
  { title: "Innovation Cells: Transforming Universities into Startup Hubs", outlet: "Education Times", year: "2022" },
  { title: "Panel Discussion: AI and the Future of Work", outlet: "NDTV Profit", year: "2022" },
];

const ConsultancyMediaPage = () => {
  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">consultancy & recognition</h1>
      <p className="roboto text-gray-600 mb-10">
        Industry collaborations, advisory roles, awards, and media recognition — demonstrating real-world impact beyond academia.
      </p>

      {/* Consultancy */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">INDUSTRY ENGAGEMENTS</h2>
      <div className="space-y-4 mb-16">
        {consultancy.map((c, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-bold text-lg text-gray-900">{c.client}</h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">{c.domain}</span>
              <span className="text-xs text-gray-500">{c.year}</span>
            </div>
            <p className="text-gray-600">{c.description}</p>
          </div>
        ))}
      </div>

      {/* Awards */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">AWARDS & CERTIFICATIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {awards.map((a, i) => (
          <div key={i} className="border-l-4 border-[#ff70a6] p-6 bg-[#fff6f9] rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
            <p className="text-sm text-gray-600">{a.org} • {a.year}</p>
          </div>
        ))}
      </div>

      {/* Media */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">MEDIA COVERAGE</h2>
      <div className="space-y-4">
        {mediaFeatures.map((m, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{m.title}</h3>
              <p className="text-sm text-gray-500">{m.outlet} • {m.year}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 cursor-pointer hover:bg-blue-100 transition-colors">
              <FiExternalLink size={14} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/contact" className="text-[#70d6ff] font-bold hover:underline">
          → Discuss Your Consulting Project
        </Link>
      </div>
    </div>
  );
};

export default ConsultancyMediaPage;
