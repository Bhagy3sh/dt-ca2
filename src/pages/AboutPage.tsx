import { Link } from "react-router-dom";

const qualifications = [
  { degree: "Ph.D. in Innovation Management", institution: "Indian Institute of Technology (IIT), Bombay", year: "2012", thesis: "A Framework for Design Thinking-led Innovation in Indian Manufacturing SMEs" },
  { degree: "M.Tech in Industrial Engineering", institution: "Visvesvaraya National Institute of Technology (VNIT), Nagpur", year: "2006" },
  { degree: "B.E. in Mechanical Engineering", institution: "Pune University", year: "2004" },
];

const careerTimeline = [
  { year: "2018 – Present", role: "Professor & Head, Design Thinking & Innovation", org: "Symbiosis Institute of Technology, Pune", description: "Leading the department, establishing innovation cells, mentoring startups, and integrating AI into Design Thinking pedagogy." },
  { year: "2014 – 2018", role: "Associate Professor, Innovation & Entrepreneurship", org: "MIT World Peace University, Pune", description: "Developed the Innovation & Entrepreneurship curriculum, launched the university's first startup incubator." },
  { year: "2012 – 2014", role: "Assistant Professor, Mechanical Engineering", org: "College of Engineering, Pune (COEP)", description: "Taught Design Thinking and Product Development courses, supervised M.Tech research." },
  { year: "2006 – 2009", role: "Senior Engineer, Operations & Supply Chain", org: "Tata Motors Ltd., Pune", description: "Led process improvement initiatives using Six Sigma and Lean methodologies in the supply chain division." },
];

const memberships = [
  "Fellow, Institution of Engineers (India)",
  "Member, IEEE Education Society",
  "Member, Design Research Society (DRS)",
  "IDEO Design Thinking Network Member",
  "Advisory Board, Maharashtra State Innovation Society",
  "Reviewer, Journal of Engineering Education Transformations",
];

const AboutPage = () => {
  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">about</h1>

      {/* Bio */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-10 border border-blue-100">
        <p className="text-gray-700 leading-relaxed">
          Dr. Rajesh Kothawade is a distinguished professor, researcher, and innovation enabler with over 18 years of experience in academia and industry. He specializes in Design Thinking, Innovation Management, Entrepreneurship, and the integration of Artificial Intelligence in education and business processes. As the Head of the Design Thinking & Innovation department at Symbiosis Institute of Technology, Pune, he has mentored over 200 startups, published 45+ research papers, and conducted 80+ workshops across India and internationally. His work bridges the gap between academic theory and industry practice, creating innovation ecosystems that produce market-ready solutions.
        </p>
      </div>

      {/* Teaching Philosophy */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">TEACHING PHILOSOPHY</h2>
      <div className="border-l-6 border-l-[#ffd670] pl-6 mb-10">
        <p className="text-[#70d6ff] text-xl font-bold italic roboto">
          "I believe that true innovation begins with empathy. My teaching philosophy centers on guiding students beyond textbooks — into the real world, where messy problems demand creative, human-centered solutions. Design Thinking is not just a methodology; it is a mindset that I strive to instill in every student, entrepreneur, and professional I work with."
        </p>
        <cite className="not-italic block text-gray-500 mt-4">- Dr. Rajesh Kothawade</cite>
      </div>

      {/* Qualifications */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">ACADEMIC QUALIFICATIONS</h2>
      <div className="space-y-4 mb-16">
        {qualifications.map((q, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-1">{q.degree}</h3>
            <p className="text-gray-600">{q.institution}</p>
            <p className="text-sm text-gray-500">{q.year}</p>
            {q.thesis && <p className="mt-2 text-sm text-gray-500 italic">Thesis: "{q.thesis}"</p>}
          </div>
        ))}
      </div>

      {/* Career Timeline */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">CAREER TIMELINE</h2>
      <div className="space-y-4 mb-16">
        {careerTimeline.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffd670] text-gray-800">{item.year}</span>
              <span className="text-xs text-gray-500">{item.org}</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.role}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Professional Memberships */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px]">PROFESSIONAL MEMBERSHIPS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
        {memberships.map((m, i) => (
          <div key={i} className="bg-[#ff9770] p-4 text-white rounded-lg font-bold roboto text-sm" style={{ minHeight: "50px", display: "flex", alignItems: "center" }}>
            ✓ {m}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/contact" className="text-[#70d6ff] font-bold hover:underline">
          → Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
