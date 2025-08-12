import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const companyLinks: Record<string, string> = {
  "Driven Projects": "https://www.linkedin.com/company/projetos-driven/",
  "IT Works S/A": "https://www.itworks.com.br/",
  "Lugenius": "https://lugenius.com/"
};

export const ExperienceSection = () => {
  const { data } = useLanguage();
  const experiences = data.experience.items;

  return (
    <section id="experience" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 title-glow">
            {data.experience.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {data.experience.description}
          </p>
          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2 z-0" />
            <div className="space-y-12 relative z-10">
              {experiences.map((exp, idx) => {
              const isLinked = !!companyLinks[exp.company];
              const cardContent = (
                <div
                  className={`bg-gradient-card border-2 rounded-lg p-6 shadow-md inline-block transition-transform duration-200
                    ${isLinked ? "cursor-pointer hover:scale-105" : ""}
                  `}
                >
                  <h3 className="font-bold text-lg">{exp.position}</h3>
                  <p className="text-primary font-semibold">
                    {exp.company}
                  </p>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              );

              return (
                <motion.div
                  key={idx}
                  className="flex items-center w-full"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.18 }}
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        {isLinked ? (
                          <a
                            href={companyLinks[exp.company]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {cardContent}
                          </a>
                        ) : cardContent}
                      </div>
                      {/* Ponto central */}
                      <div className="w-0 flex flex-col items-center">
                        <span className="block w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />
                      </div>
                      <div className="w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2" />
                      {/* Ponto central */}
                      <div className="w-0 flex flex-col items-center">
                        <span className="block w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />
                      </div>
                      <div className="w-1/2 pl-8 text-left">
                        {isLinked ? (
                          <a
                            href={companyLinks[exp.company]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {cardContent}
                          </a>
                        ) : cardContent}
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};