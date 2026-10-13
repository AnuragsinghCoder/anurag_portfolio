import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I aim to write readable, organized, and reusable code that is easier to understand and maintain.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "I enjoy debugging errors, understanding their root causes, and finding practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "I keep improving my knowledge of JavaScript, React, backend development, databases, and web technologies.",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "I focus on responsive layouts, intuitive navigation, and interfaces that work well across different screen sizes.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-text-secondary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-text-secondary">
              A Developer
              <span className="font-serif italic font-normal text-white">
                {" "}
                who learns by building.
              </span>
            </h2>

            <div className="space-y-4 text-text-muted animate-fade-in animation-delay-200">
              <p>
                  I'm Anurag Singh, a Computer Science graduate with a strong interest in full-stack web development. I completed my B.Sc. in Computer Science in 2025 and am currently pursuing an M.Sc. in Computer Science.
              </p>
              <p>
                My development journey focuses on building complete web applications, from creating responsive user interfaces with React and Tailwind CSS to developing backend APIs using Node.js and Express.js. I work with MongoDB and Mongoose for database operations and have experience implementing authentication and connecting frontend applications to backend services.
              </p>
              <p>
                I enjoy understanding how applications work behind the scenes, debugging problems, and learning better ways to structure code. My goal is to grow into a skilled Full-Stack Developer by contributing to real projects and learning from experienced developers.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build practical, reliable, and user-friendly web applications while continuously growing as a developer."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;