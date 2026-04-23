import { useState } from "react";

const blogPosts = [
  {
    id: "design-thinking-beyond-buzzword",
    title: "Design Thinking: Beyond the Buzzword",
    excerpt: "In an era where every organization claims to practice Design Thinking, it's crucial to distinguish genuine empathy-driven innovation from superficial adoption.",
    date: "March 15, 2025",
    category: "Design Thinking",
    readTime: "8 min read",
    content: "Design Thinking has become one of the most overused terms in modern business and education. Every corporate training brochure mentions it. Every startup pitch deck includes it. But how many truly practice it?\n\nThe answer, unfortunately, is very few.\n\nTrue Design Thinking is not about following a five-step process mechanically. It is about fundamentally shifting how you approach problems — from solution-first to empathy-first. It requires you to set aside your assumptions, step into your users' shoes, and let their pain points guide your innovation.\n\nIn my 18 years of teaching and consulting, I've seen organizations fall into three common traps:\n\nTrap 1: Skipping Empathy — The most critical and most skipped stage. Teams rush to ideation because it feels productive. But without deep empathy research, you're solving the wrong problem beautifully.\n\nTrap 2: Confusing Brainstorming with Ideation — Ideation is not a 30-minute brainstorming session. It involves multiple techniques — mind mapping, SCAMPER, reverse brainstorming, crazy-8s — applied systematically.\n\nTrap 3: Building the Final Product as the Prototype — A prototype is meant to be rough, fast, and disposable. Its purpose is to learn, not to ship.\n\nAs I tell my students: \"Fall in love with the problem, not your solution.\"",
  },
  {
    id: "ai-empathy-paradox",
    title: "The AI-Empathy Paradox: Can Machines Understand Human Needs?",
    excerpt: "As AI becomes increasingly sophisticated, a fundamental question emerges: can artificial intelligence truly understand human empathy?",
    date: "February 2, 2025",
    category: "AI & Innovation",
    readTime: "10 min read",
    content: "The intersection of Artificial Intelligence and Design Thinking presents us with a fascinating paradox. AI can process millions of user feedback points in seconds, identify patterns invisible to human researchers, and predict user behavior with remarkable accuracy. But can it truly empathize?\n\nEmpathy — the cornerstone of Design Thinking — requires emotional intelligence, cultural sensitivity, and the ability to connect with human experiences on a deeply personal level.\n\nHowever, AI can be a powerful amplifier of human empathy when used correctly:\n\nAI as a Research Accelerator: NLP can analyze thousands of user interviews to surface recurring pain points.\n\nAI as a Bias Detector: ML models can identify unconscious biases in our empathy research.\n\nAI as a Pattern Finder: Clustering algorithms can reveal user segments for more nuanced persona development.\n\nThe key insight: AI should augment human empathy, not replace it. The most innovative solutions will come from teams that combine the depth of human understanding with the breadth of AI analysis.",
  },
  {
    id: "future-skills-2030",
    title: "Future Skills 2030: What Every Graduate Needs to Know",
    excerpt: "The World Economic Forum predicts that 65% of children entering primary school today will work in jobs that don't exist yet.",
    date: "January 10, 2025",
    category: "Future of Education",
    readTime: "7 min read",
    content: "Every few years, a new report emerges predicting the skills that will define the future workforce. The details change, but the underlying message remains consistent: technical skills alone are no longer enough.\n\nThe graduates who will thrive in 2030 and beyond need a blend of technical competence and human skills — what I call the 'T-shaped innovator' model.\n\nBased on my research and industry interactions, here are the 5 critical skills every graduate needs:\n\n1. Empathy & User Research — The ability to understand and articulate user needs\n2. Creative Problem Solving — Moving beyond analytical thinking to generative thinking\n3. Prototyping & Experimentation — Building fast, testing cheap, learning quickly\n4. Data Literacy — The ability to make data-driven decisions\n5. Adaptive Leadership — Leading teams through ambiguity and change\n\nThis is why I believe Design Thinking should not be a single course — it should be a pedagogy integrated across the entire curriculum.",
  },
  {
    id: "startup-mentoring-lessons",
    title: "10 Lessons from Mentoring 200 Student Startups",
    excerpt: "After a decade of mentoring student entrepreneurs, these are the patterns I've observed.",
    date: "December 5, 2024",
    category: "Entrepreneurship",
    readTime: "12 min read",
    content: "Over the past 10 years, I've had the privilege of mentoring over 200 student startups. Here are the 10 most important lessons:\n\n1. The Problem Matters More Than the Solution — Spend 70% of your time validating the problem.\n\n2. Talk to Users Before Writing Code — The best startups start with 50+ user conversations before writing a single line of code.\n\n3. Your First Idea is Usually Wrong — Embrace the iteration.\n\n4. Teams Beat Individuals — Solo founders have a 3x higher failure rate.\n\n5. Revenue Validates, Not Awards — Focus on finding your first paying customer.\n\n6. Prototype with Paper Before Pixels — The fastest prototype is a sketch on a napkin.\n\n7. Metrics Must Drive Decisions — Define your North Star metric early.\n\n8. Mentors Open Doors, You Walk Through Them — The work is yours to do.\n\n9. Failure is Data, Not Defeat — Document your failures as rigorously as your successes.\n\n10. Impact Over Income — The most successful student startups are driven by genuine impact.",
  },
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const activePost = blogPosts.find(p => p.id === selectedPost);

  // Blog Post Detail View
  if (activePost) {
    return (
      <div className="w-full mb-20">
        <button onClick={() => setSelectedPost(null)} className="text-[#70d6ff] font-bold hover:underline mb-6 inline-block">
          ← Back to all articles
        </button>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffd670] text-gray-800">{activePost.category}</span>
          <span className="text-xs text-gray-500">{activePost.date} • {activePost.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">{activePost.title}</h1>
        <div className="space-y-4">
          {activePost.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed roboto">{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="w-full mb-20">
      <h1 className="text-4xl font-extrabold mb-5">blog / thought leadership</h1>
      <p className="roboto text-gray-600 mb-10">
        Articles, insights, and perspectives on Design Thinking, Innovation, AI, and the future of education.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedPost(post.id)}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffd670] text-gray-800">{post.category}</span>
              <span className="text-xs text-gray-500">{post.date}</span>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#70d6ff] transition-colors">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.excerpt}</p>
            <p className="text-[#70d6ff] font-bold text-sm mt-3">Read more →</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
