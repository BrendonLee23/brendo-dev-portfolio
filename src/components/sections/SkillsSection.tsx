import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Database, Server, Settings } from 'lucide-react';

export const SkillsSection = () => {
  const { data } = useLanguage();

  const categoryIcons = {
    frontend: Code,
    backend: Server,
    database: Database,
    devops: Settings,
  };

  return (
    <section id="skills" className="py-20 px-4 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-glow">
            {data.skills.title}
          </h2>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(data.skills.categories).map(([key, category]) => {
              const IconComponent = categoryIcons[key as keyof typeof categoryIcons];
              
              return (
                <Card key={key} className="bg-gradient-card border-2 hover:shadow-md transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};