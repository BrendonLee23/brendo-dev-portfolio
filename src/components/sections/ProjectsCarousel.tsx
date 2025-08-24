import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

type PortfolioProject = {
  name: string;
  description?: string;
  technologies?: string[];
  highlights?: string[];
  deploy?: string;
  repository?: string;
  image?: string; // opcional futuro
};

export const ProjectsCarousel = () => {
  const { data } = useLanguage();
  const projects = (data.projects.items || []) as PortfolioProject[];

  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  // Auto-play
  useEffect(() => {
    if (isInView && !isHovering && projects.length > 1) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, projects.length]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => setIsInView(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  // Touch handlers
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActiveProject(p => (p + 1) % projects.length);
    } else if (distance < -minSwipeDistance) {
      setActiveProject(p => (p - 1 + projects.length) % projects.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === activeProject) return "scale-100 opacity-100 z-20";
    if (index === (activeProject + 1) % projects.length) return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (activeProject - 1 + projects.length) % projects.length) return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0 pointer-events-none";
  };

  if (!projects.length) return null;

  return (
    <section id="projects" ref={projectsRef} className="bg-background py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            {data.projects.title}
          </h2>
          {isMobile && projects.length > 1 && (
            <div className="flex items-center justify-center mt-4 animate-pulse-slow">
              <div className="flex items-center text-primary">
                <ChevronLeft size={16} />
                <p className="text-sm mx-1">{data.nav?.projects ? "Arraste para navegar" : "Swipe to navigate"}</p>
                <ChevronRight size={16} />
              </div>
            </div>
          )}
        </div>

        <div
          className="relative h-[550px] overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
          aria-roledescription="carousel"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                role="group"
                aria-label={`${project.name} (${index + 1} / ${projects.length})`}
              >
                <Card className="overflow-hidden h-[500px] border border-border shadow-sm hover:shadow-md flex flex-col bg-card">
                  <div className="relative flex items-center justify-center h-48 overflow-hidden bg-primary/80">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`Imagem do projeto ${project.name}`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-card-foreground text-sm font-semibold opacity-70">
                        Imagem em breve
                      </span>
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-foreground">
                        {project.name}
                      </h3>
                      {project.technologies?.length && (
                        <p className="text-muted-foreground text-xs font-medium">
                          {project.technologies.join(", ")}
                        </p>
                      )}
                    </div>

                    {project.description && (
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                    )}

                    <div className="mt-auto">
                      {!!project.highlights?.length && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.highlights.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs animate-pulse-slow"
                              style={{ animationDelay: `${idx * 120}ms` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {(project.deploy || project.repository) && (
                        <div className="flex gap-4 text-sm items-center">
                          {project.deploy && (
                            <a
                              href={project.deploy}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Abrir deploy de ${project.name}`}
                              title="Deploy"
                              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                            >
                              <Globe className="w-5 h-5" />
                            </a>
                          )}
                          {project.repository && (
                            <a
                              href={project.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Abrir repositório de ${project.name}`}
                              title="Repositório"
                              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {!isMobile && projects.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 backdrop-blur rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background z-30 shadow-md transition-all duration-300 hover:scale-110"
                onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
                aria-label="Projeto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 backdrop-blur rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background z-30 shadow-md transition-all duration-300 hover:scale-110"
                onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
                aria-label="Próximo projeto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {projects.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3 z-30">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${activeProject === idx ? "bg-primary w-6" : "bg-muted w-2 hover:bg-primary/60"}`}
                  onClick={() => setActiveProject(idx)}
                  aria-label={`Ir para o projeto ${idx + 1}`}
                  aria-current={activeProject === idx}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
