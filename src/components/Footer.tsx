import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-8 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            {language === 'pt' 
              ? '© 2024 Brendo Moreira. Todos os direitos reservados.'
              : '© 2024 Brendo Moreira. All rights reserved.'
            }
          </p>
          <p className="text-muted-foreground text-xs mt-2 font-mono">
            {language === 'pt'
              ? 'Desenvolvido com React.js, TypeScript e Tailwind CSS'
              : 'Built with React.js, TypeScript and Tailwind CSS'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};