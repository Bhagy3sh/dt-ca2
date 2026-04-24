import { FiLinkedin, FiAward } from 'react-icons/fi';
import { FaGoogleScholar, FaResearchgate } from 'react-icons/fa6';

const AboutSection = () => {
  return (
    <section className="mx-auto py-16 w-full">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
        {/* Profile Header */}
        <div className="md:flex">
          {/* Profile Image (Left) */}
          <div className="md:w-[50%] p-6 md:p-8 flex justify-center bg-gray-50">
            <div className="relative w-[440px] h-[420px] rounded-[30px] overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-gradient-to-br from-[#70d6ff]/20 to-purple-100">
              <div className="text-8xl font-bold">
                <span className="text-[#70d6ff]">R</span>
                <span className="text-purple-600">K</span>
              </div>
            </div>
          </div>

          {/* Content (Right) */}
          <div className="md:w-[50%] p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dr. Rajesh Kothawade</h1>
            
            {/* Certification Badge */}
            <div className="flex items-center mb-4 gap-2 flex-wrap">
              <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                <FiAward className="mr-2" />
                IDEO / Stanford d.school Certified
              </div>
              <div className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                <FiAward className="mr-2" />
                Ph.D. Innovation Management
              </div>
            </div>

            <p className="text-xl text-purple-600 font-medium mb-6">Professor & Head | Design Thinking & Innovation</p>

            {/* Specialization Highlight */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 mb-6 border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✧</span>
                Design Thinking & Innovation
              </h3>
              <p className="text-gray-700">
                Empowering innovation through empathy-driven design. 
                <span className="block"><span className="font-semibold">18+ years in academia & industry</span> — mentoring startups, research, and building innovation ecosystems.</span> 
              </p>
            </div>

            {/* Main Bio */}
            <div className="prose prose-lg text-gray-600 space-y-4 mb-8">
              <p>
                I design <strong>human-centered innovation ecosystems</strong> where empathy meets technology and every solution begins with understanding real users. My work sits at the intersection of Design Thinking, AI, and Entrepreneurship.
              </p>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Education Column */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">EDUCATION</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Indian Institute of Technology (IIT), Bombay</h4>
                    <p className="text-sm text-gray-600">Ph.D. in Innovation Management</p>
                    <p className="text-xs text-gray-500">2009-2012</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">VNIT, Nagpur</h4>
                    <p className="text-sm text-gray-600">M.Tech in Industrial Engineering</p>
                    <p className="text-xs text-gray-500">2004-2006</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pune University</h4>
                    <p className="text-sm text-gray-600">B.E. in Mechanical Engineering</p>
                    <p className="text-xs text-gray-500">2000-2004</p>
                  </div>
                </div>
              </div>

              {/* Experience Column */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">EXPERIENCE</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Symbiosis Institute of Technology</h4>
                    <p className="text-sm text-gray-600">Professor & Head, Design Thinking</p>
                    <p className="text-xs text-gray-500">2018 - Present</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">MIT World Peace University</h4>
                    <p className="text-sm text-gray-600">Associate Professor</p>
                    <p className="text-xs text-gray-500">2014 - 2018</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tata Motors Ltd.</h4>
                    <p className="text-sm text-gray-600">Senior Engineer, Supply Chain</p>
                    <p className="text-xs text-gray-500">2006 - 2009</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">EXPERTISE</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Design Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">INNOVATION</h4>
                  <ul className="text-sm space-y-1">
                    {['Design Thinking', 'Innovation Management', 'Startup Mentoring', 'EDIPT Framework'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Technical Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">TECHNICAL</h4>
                  <ul className="text-sm space-y-1">
                    {['AI in Education', 'Six Sigma', 'Supply Chain', 'Lean Methodology'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Additional Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">ACADEMIC</h4>
                  <ul className="text-sm space-y-1">
                    {['45+ Publications', '8 Patents', '200+ Startups Mentored', '80+ Workshops'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rajeshkothawade/" className="text-gray-500 hover:text-blue-800 transition">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="https://scholar.google.com/citations?user=rajeshkothawade" className="text-gray-500 hover:text-gray-800 transition">
                <FaGoogleScholar className="w-6 h-6" />
              </a>
              <a href="https://www.researchgate.net/profile/Rajesh-Kothawade" className="text-gray-500 hover:text-green-700 transition">
                <FaResearchgate className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Location Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <p className="text-gray-500 italic flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Symbiosis Institute of Technology, Pune
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;