import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", type: "General Inquiry", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">contact & collaboration</h1>
      <p className="roboto text-gray-600 mb-10">
        Whether it's a research collaboration, consulting engagement, workshop invitation, or mentorship opportunity — I'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-6 tracking-[8px]">GET IN TOUCH</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <FiMail className="mt-1 text-[#70d6ff]" size={20} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:rajesh.kothawade@sit.edu.in" className="font-semibold text-gray-900 hover:text-[#70d6ff] transition-colors">
                  rajesh.kothawade@sit.edu.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="mt-1 text-[#70d6ff]" size={20} />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-gray-900">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiMapPin className="mt-1 text-[#70d6ff]" size={20} />
              <div>
                <p className="text-sm text-gray-500">Office</p>
                <p className="font-semibold text-gray-900">Symbiosis Institute of Technology</p>
                <p className="text-sm text-gray-500">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Professional Networks</h3>
          <div className="space-y-2">
            {[
              { label: "LinkedIn", url: "https://www.linkedin.com/in/rajeshkothawade/" },
              { label: "Google Scholar", url: "https://scholar.google.com/citations?user=rajeshkothawade" },
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Rajesh-Kothawade" },
              { label: "ORCID", url: "https://orcid.org/0000-0002-1234-5678" },
            ].map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#70d6ff] hover:underline">
                → {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Office Hours</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-semibold">Monday – Friday:</span> 10:00 AM – 5:00 PM IST</p>
              <p><span className="font-semibold">Saturday:</span> 10:00 AM – 1:00 PM IST (Mentorship)</p>
              <p><span className="font-semibold">By Appointment:</span> Flexible for international collaborations</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-6 tracking-[8px]">SEND A MESSAGE</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-4xl mb-4">✓</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500">Thank you for reaching out. I'll respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#70d6ff]" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#70d6ff]" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase">Inquiry Type</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#70d6ff]">
                      <option>General Inquiry</option>
                      <option>Research Collaboration</option>
                      <option>Workshop Invitation</option>
                      <option>Consulting Engagement</option>
                      <option>Mentorship Request</option>
                      <option>Speaking Engagement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase">Subject *</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#70d6ff]" placeholder="Brief subject" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#70d6ff] resize-none" placeholder="Tell me about your project or inquiry..." />
                </div>
                <button type="submit" className="w-full bg-[#70d6ff] text-white py-3 rounded-lg font-bold hover:bg-[#5bc4ef] transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
