import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';


export const AboutSection = () => {
  const { data } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 title-glow">
            {data.about.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {data.about.description}
              </p>
              
              {/* Highlights */}
              <div className="space-y-4">
                {data.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Profile Image Area */}
            <div className="flex justify-center">
              <Card className="w-80 h-80 bg-gradient-card border-2 overflow-hidden">
                <CardContent className="p-0 h-full">
                  <img 
                    src="/lovable-uploads/487d7533-2a71-40ac-acad-2fc089818a6c.png"
                    alt="Brendo Moreira" 
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};