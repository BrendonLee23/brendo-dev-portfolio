import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Github, Linkedin, Languages } from 'lucide-react';
import { useState } from 'react';
import { ContactSheet } from '../contactSheet';

export const ContactSection = () => {
  const { data } = useLanguage();
    const [open, setOpen] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: 'E-mail',
      value: data.contact.info.email,
      href: `mailto:${data.contact.info.email}`,
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: data.contact.info.phone,
      href: `tel:${data.contact.info.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: data.contact.info.location,
    },
    {
      icon: Languages,
      label: 'Idiomas',
      value: data.contact.info.languages,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-muted/50">
            <ContactSheet open={open} onOpenChange={setOpen} />
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-glow">
            {data.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {data.contact.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <Card key={index} className="bg-gradient-card border-2 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground">{item.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : content;
              })}
            </div>
            
            {/* CTA and Social */}
            <div className="flex flex-col justify-center">
              <Card className="bg-gradient-card border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Vamos trabalhar juntos!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Button 
                      variant="gradient"
                      className="w-full"
                      onClick={() => setOpen(true)}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar E-mail
                    </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const msg = encodeURIComponent(
                        "Olá, tudo bem? Encontrei seu contato pelo portfólio e gostaria de conversar sobre um projeto. Podemos agendar uma call?"
                      );
                      window.open(`https://wa.me/5592982113979?text=${msg}`, '_blank');
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                    <a
                      href="https://github.com/BrendonLee23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/brendo-moreira-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};