import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const softwareEngineering = [
     "React", "Node.js", "Express", "MongoDB", "PHP", "Laravel"
  ];

  const dataScienceAI = [
    "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Python", "SQL"
  ];

  const toolsPlatforms = [
    "Git", "Supabase", "Docker", "AWS", "Jupyter", "VS Code"
  ];

  const skills = [
    {
      title: "AI & Machine Learning Expert",
      description: "I specialize in building intelligent systems using cutting-edge ML techniques, from NLP to computer vision applications."
    },
    {
      title: "Full-Stack Developer", 
      description: "Proficient in the MERN stack and PHP/Laravel, I create seamless end-to-end applications with modern architectures."
    },
    {
      title: "Data-Driven Solutions",
      description: "I transform complex data into actionable insights, helping businesses make informed decisions through analytics and modeling."
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
              Hello! I'm Mary, a passionate Data Scientist and Software Engineer who bridges 
              the gap between data insights and practical applications. I love creating AI-powered 
              solutions that solve real-world problems, from mental wellness applications to risk 
              analysis models. My expertise spans both traditional software development and 
              cutting-edge machine learning technologies. 
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
            {/* Software Engineering */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Software <span className="gradient-text">Engineering</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {softwareEngineering.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Data Science & AI */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Data Science & <span className="gradient-text">AI</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {dataScienceAI.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Tools & <span className="gradient-text">Platforms</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {toolsPlatforms.map((tool, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;