import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Calendar, CheckCircle } from 'lucide-react';

export const ExperienceSection = () => {
  const { data } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {data.experience.title}
          </h2>
          
          {/* Experience Timeline */}
          <div className="space-y-8">
            {data.experience.items.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-2 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        {item.company}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary">{item.position}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {item.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{responsibility}</span>
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