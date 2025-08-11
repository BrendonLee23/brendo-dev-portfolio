import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from "react";
import { ContactSheet } from '../contactSheet';

export const HeroSection = () => {
  const { data } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 lg:px-8 hero-bg">
      <ContactSheet open={open} onOpenChange={setOpen} />
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-2 font-mono">
            <Typewriter
              words={['Olá mundo, meu nome é ', 'Hello World, my name is ']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent title-float">
            {data.hero.name}
          </h1>
          
          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 title-glow">
            {data.hero.role}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {data.hero.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gradient" size="lg">
              <a
                href="/public/brendo-cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                {data.hero.downloadCV}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                scrollToContact();
                setOpen(true);
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              {data.hero.contactMe}
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/BrendonLee23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brendo-moreira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};