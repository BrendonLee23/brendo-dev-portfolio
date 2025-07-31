import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export const EducationSection = () => {
  const { data } = useLanguage();

  return (
    <section id="education" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {data.education.title}
          </h2>
          
          {/* Education Items */}
          <div className="space-y-6">
            {data.education.items.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-2 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {item.institution}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold text-primary">{item.course}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <Badge 
                        variant={item.status === 'Concluído' || item.status === 'Completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};