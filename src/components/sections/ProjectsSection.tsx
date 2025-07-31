import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github, Star } from 'lucide-react';

export const ProjectsSection = () => {
  const { data } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {data.projects.title}
          </h2>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {data.projects.items.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-2 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};