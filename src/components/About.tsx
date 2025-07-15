import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const programmingLanguages = [
    "Python", "JavaScript", "TypeScript", "SQL", "Golang", "Dart", "C"
  ];

  const toolsFrameworks = [
    "React", "Node.js", "Flask", "Next.js", "Laravel", "Flutter", "SQLAlchemy"
  ];

  const aiInnovation = [
    "AI Integration", "Prompt Engineering", "Machine Learning", "Automation", "Data Analysis"
  ];

  const skills = [
    {
      title: "Rapid Technology Adoption",
      description: "I get genuinely excited about learning new tech. Give me a weekend and some good docs, and I'll figure it out!"
    },
    {
      title: "Creative Problem Solver", 
      description: "I love those \"aha!\" moments when you finally crack a tough problem. It's like solving puzzles, but with code!"
    },
    {
      title: "AI Explorer",
      description: "I'm fascinated by what AI can do and love experimenting with it. It feels like we're living in the future!"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h2 className="text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          
          {/* Main Description */}
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What's up! 👋 I'm just a guy who really loves building things with code and
              figuring out how stuff works. I spend way too much time watching coding tutorials, 
              trying out new frameworks, and getting excited about AI possibilities. When I'm not 
              coding, I'm probably thinking about coding or planning my next project. I genuinely 
              believe anyone can learn anything if they're curious enough! 🚀
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-12">
            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Programming <span className="gradient-text">Languages</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {programmingLanguages.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Tools & <span className="gradient-text">Frameworks</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {toolsFrameworks.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* AI & Innovation */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                AI & <span className="gradient-text">Innovation</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {aiInnovation.map((ai, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {ai}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;