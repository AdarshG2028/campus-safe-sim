import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    title: "Frontend",
    color: "bg-gradient-to-r from-blue-500 to-purple-600",
    technologies: [
      "HTML", "CSS", "JS", "Next.js", "Angular", "React", "Framer", "Chart.js"
    ]
  },
  {
    title: "Backend and Database",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    technologies: [
      "Node.js", "Express", "Redis", "MongoDB", "PostgreSQL", "Fast API"
    ]
  },
  {
    title: "Python Libraries",
    color: "bg-gradient-to-r from-yellow-500 to-orange-600",
    technologies: [
      "Numpy", "Pandas", "Seaborn", "Sklearn", "MLflow", "Matplotlib"
    ]
  },
  {
    title: "Other Technologies",
    color: "bg-gradient-to-r from-pink-500 to-red-600",
    technologies: [
      "Docker", "AWS", "Azure", "Netlify"
    ]
  }
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-gradient-hero text-white px-6 py-3 rounded-full inline-block mb-6 text-lg font-semibold">
            TECH STACK
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powered by Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our disaster preparedness platform is built using cutting-edge technologies 
            to ensure reliability, scalability, and optimal performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`${category.color} p-4`}>
                <h3 className="text-xl font-bold text-white text-center">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="w-full justify-center py-2 text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-muted/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Architecture Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Scalable Backend</h4>
                <p className="text-muted-foreground text-sm">
                  Microservices architecture with Node.js and Express for handling high user loads
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Real-time Updates</h4>
                <p className="text-muted-foreground text-sm">
                  WebSocket connections for live emergency alerts and drill coordination
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">AI Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Machine learning models for predictive analytics and personalized training
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};