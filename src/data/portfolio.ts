// Dados do portfólio em múltiplos idiomas
export const portfolioData = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      services: "Serviços", // Adicione aqui
      experience: "Experiência",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato"
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Brendo Moreira",
      role: "Desenvolvedor Full Stack",
      description: "Especializado em React.js, Node.js e TypeScript. Apaixonado por criar soluções digitais elegantes e funcionais.",
      downloadCV: "Baixar Currículo",
      contactMe: "Entrar em Contato"
    },
    about: {
      title: "Sobre Mim",
      description: "Desenvolvedor Full Stack com foco em tecnologias modernas e boas práticas de desenvolvimento. Experiência em projetos do front-end ao back-end, sempre buscando código limpo e soluções eficientes.",
      highlights: [
        "4+ anos de experiência em desenvolvimento web",
        "Especialista em React.js e Node.js",
        "Experiência com TypeScript e banco de dados",
        "Conhecimento em DevOps e deploy de aplicações"
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: {
        frontend: {
          title: "Front-end",
          items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3", "JavaScript"]
        },
        backend: {
          title: "Back-end",
          items: ["Node.js", "Express.js", "Prisma ORM", "REST APIs", "JWT", "Bcrypt"]
        },
        database: {
          title: "Banco de Dados",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
        },
        devops: {
          title: "DevOps & Ferramentas",
          items: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Heroku"]
        },
        design: {
          title: "Design & UX",
          items: ["Figma", "Adobe XD", "UI/UX", "Prototipagem"]
        },
        testing: {
          title: "Testes e Revisão",
          items: ["Jest", "React Testing Library", "Revisão de Código", "Testes Automatizados"]
        },
        security: {
          title: "Segurança",
          items: ["OWASP", "Autenticação", "Autorização", "Criptografia", "HTTPS", "Helmet.js"]
        },
        methodologies: {
          title: "Metodologias",
          items: ["Scrum", "Kanban", "Agile", "Code Review", "TDD", "Clean Code"]
        }
      }
    },
    experience: {
      title: "Experiência Profissional",
      description: "Aqui estão minhas principais experiências durante minha carreira como desenvolvedor.",
      items: [
        {
          company: "Freelancer",
          position: "Desenvolvedor Full Stack",
          period: "2021 - Presente",
          responsibilities: [
            "Desenvolvimento de aplicações web completas",
            "Criação de APIs RESTful com Node.js",
            "Implementação de interfaces responsivas com React",
            "Integração com bancos de dados PostgreSQL"
          ]
        },
        {
          company: "Driven Projects",
          position: "Desenvolvedor Web Full Stack",
          period: "Abr 2023 – Mai 2024"
        },
        {
          company: "IT Works S/A",
          position: "Desenvolvedor Full Stack",
          period: "Mai 2024 – Presente"
        },
        {
          company: "Lugenius",
          position: "Desenvolvedor Full Stack",
          period: "Junho 2025 – Presente"
        }
      ]
    },
    projects: {
      title: "Projetos Principais",
      items: [
        {
          name: "Driven.T",
          description: "Sistema completo de gerenciamento de eventos com inscrições, check-in e pagamentos online.",
          technologies: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
          highlights: ["Sistema de pagamentos integrado", "Dashboard administrativo", "API RESTful completa"]
        },
        {
          name: "Driviagens",
          description: "Plataforma de reservas de viagens com sistema de busca avançada e gestão de reservas.",
          technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "Express.js"],
          highlights: ["Sistema de busca inteligente", "Interface intuitiva", "Gestão completa de reservas"]
        }
      ]
    },
    education: {
      title: "Formação Acadêmica",
      items: [
        {
          institution: "Cursos Livres de Programação",
          course: "Formação Autodidata em Desenvolvimento",
          period: "2020 - 2022",
          status: "Concluído",
          description: "Participei de diversos cursos online e bootcamps, focando em lógica de programação, algoritmos, estruturas de dados, fundamentos web, APIs REST, bancos de dados e boas práticas de desenvolvimento. Aprimorei habilidades em JavaScript, TypeScript, React, Node.js e Git."
        },
        {
          institution: "FIAP",
          course: "Engenharia de Software",
          period: "jan de 2023 – dez de 2023",
          status: "Trancado",
          description: "Graduação com foco em linguagens modernas, desenvolvimento web, segurança da informação, manipulação de dados, Python, Java, C#, metodologias ágeis e soluções em nuvem. Abordou OOP, blockchain, metaverso, soluções digitais e Quality Assurance. Curso trancado em dezembro de 2023."
        },
        {
          institution: "Driven Education",
          course: "Engenharia de Software",
          period: "abr de 2023 – dez de 2023",
          status: "Concluído",
          description: "Formação intensiva (+1200h) com projetos práticos em React, Node.js, TypeScript e Prisma. Aprofundei fundamentos de engenharia de software, metodologias ágeis, testes, DevOps e bancos de dados relacionais e não relacionais."
        },
        {
          institution: "Wyden",
          course: "Bacharelado em Análise e Desenvolvimento de Sistemas",
          period: "abr de 2024 – abr de 2026",
          status: "Cursando",
          description: "Graduação com foco em arquitetura de computadores, algoritmos, estrutura de dados, programação orientada a objetos, bancos de dados SQL/NoSQL, cloud, inteligência artificial, métodos ágeis e desenvolvimento web/mobile."
        }
      ]
    },
    contact: {
      title: "Vamos Conversar",
      subtitle: "Estou sempre aberto a novas oportunidades e projetos interessantes.",
      info: {
        email: "brendo.business1@gmail.com",
        phone: "+55 (92) 98211-3979",
        location: "Manaus, Amazonas - Brasil",
        languages: "Português (nativo), Inglês (fluente), Espanhol (básico)"
      }
    },
    services: {
  title: "Serviços",
  items: [
    {
      num: "1",
      title: "Desenvolvimento de Aplicações Web",
      description: "Criação de sistemas completos, como e-commerce, dashboards administrativos e plataformas de gestão. Tecnologias: React, Next.js, Vue.js, Node.js, etc.",
      href: ""
    },
    {
      num: "2",
      title: "Desenvolvimento de APIs e Integrações",
      description: "Construção de APIs RESTful e GraphQL para conectar sistemas e aplicações. Integração com serviços de terceiros (pagamentos, redes sociais, CRMs, etc.).",
      href: ""
    },
    {
      num: "3",
      title: "Manutenção de Aplicações e Suporte Técnico",
      description: "Correção de bugs, atualizações de software e suporte técnico contínuo para sistemas existentes.",
      href: ""
    },
    {
      num: "4",
      title: "Automação de Processos e Bots",
      description: "Desenvolvimento de bots para atendimento (chatbots, WhatsApp, Telegram). Automação de tarefas repetitivas (extração de dados, envio de e-mails, web scraping, etc.). Uso de RPA (Robotic Process Automation) para otimizar fluxos de trabalho.",
      href: ""
    }
  ]
}
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      services: "Services", // Adicione aqui
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Brendo Moreira",
      role: "Full Stack Developer",
      description: "Specialized in React.js, Node.js and TypeScript. Passionate about creating elegant and functional digital solutions.",
      downloadCV: "Download CV",
      contactMe: "Get in Touch"
    },
    about: {
      title: "About Me",
      description: "Full Stack Developer focused on modern technologies and development best practices. Experience in projects from front-end to back-end, always seeking clean code and efficient solutions.",
      highlights: [
        "4+ years of web development experience",
        "React.js and Node.js specialist",
        "Experience with TypeScript and databases",
        "Knowledge in DevOps and application deployment"
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: {
          title: "Front-end",
          items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3", "JavaScript"]
        },
        backend: {
          title: "Back-end",
          items: ["Node.js", "Express.js", "Prisma ORM", "REST APIs", "JWT", "Bcrypt"]
        },
        database: {
          title: "Database",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
        },
        devops: {
          title: "DevOps & Tools",
          items: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Heroku"]
        },
        design: {
          title: "Design & UX",
          items: ["Figma", "Adobe XD", "UI/UX", "Prototyping"]
        },
        testing: {
          title: "Testing and Review",
          items: ["Jest", "React Testing Library", "Code Review", "Automated Tests"]
        },
        security: {
          title: "Security",
          items: ["OWASP", "Authentication", "Authorization", "Cryptography", "HTTPS", "Helmet.js"]
        },
        methodologies: {
          title: "Methodologies",
          items: ["Scrum", "Kanban", "Agile", "Code Review", "TDD", "Clean Code"]
        }
      }
    },
    experience: {
      title: "Professional Experience",
      description: "Here are my main experiences during my developer career.",
      items: [
        {
          company: "Freelancer",
          position: "Full Stack Developer",
          period: "2021 - Present",
          responsibilities: [
            "Development of complete web applications",
            "Creation of RESTful APIs with Node.js",
            "Implementation of responsive interfaces with React",
            "Integration with PostgreSQL databases"
          ]
        },
        {
          company: "Driven Projects",
          position: "Web Fullstack Developer",
          period: "Apr 2023 – May 2024"
        },
        {
          company: "IT Works S/A",
          position: "Fullstack Developer",
          period: "May 2024 – Present"
        },
        {
          company: "Lugenius",
          position: "Fullstack Developer",
          period: "June 2025 – Present"
        }
      ]
    },
    projects: {
      title: "Main Projects",
      items: [
        {
          name: "Driven.T",
          description: "Complete event management system with registrations, check-in and online payments.",
          technologies: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
          highlights: ["Integrated payment system", "Administrative dashboard", "Complete RESTful API"]
        },
        {
          name: "Driviagens", 
          description: "Travel booking platform with advanced search system and reservation management.",
          technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "Express.js"],
          highlights: ["Smart search system", "Intuitive interface", "Complete reservation management"]
        }
      ]
    },
    education: {
      title: "Academic Background",
      items: [
        {
          institution: "Free Programming Courses",
          course: "Self-taught Development Training",
          period: "2020 - 2022",
          status: "Completed",
          description: "Participated in various online courses and bootcamps, focusing on programming logic, algorithms, data structures, web fundamentals, REST APIs, databases and development best practices. Improved skills in JavaScript, TypeScript, React, Node.js and Git."
        },
          {
        institution: "FIAP",
        course: "Software Engineering",
        period: "Jan 2023 – Dec 2023",
        status: "Locked",
        description: "Undergraduate studies focused on modern programming languages, web development, cybersecurity, data manipulation, Python, Java, C#, agile methodologies, and cloud solutions. Covered topics such as OOP, blockchain, metaverse, digital solutions, and Quality Assurance. Course paused in December 2023."
        },
        {
          institution: "Driven Education",
          course: "Software Engineering",
          period: "Apr 2023 – Dec 2023",
          status: "Completed",
          description: "Intensive training (+1200h) with practical projects in React, Node.js, TypeScript and Prisma. Deepened software engineering fundamentals, agile methodologies, testing, DevOps and relational/non-relational databases."
        },
        {
          institution: "Wyden",
          course: "Bachelor's in Systems Analysis and Development",
          period: "Apr 2024 – Apr 2026",
          status: "In Progress",
          description: "Degree focused on computer architecture, algorithms, data structures, object-oriented programming, SQL/NoSQL databases, cloud computing, artificial intelligence, agile methods and web/mobile development."
        }
      ]
    },
    contact: {
      title: "Let's Talk",
      subtitle: "I'm always open to new opportunities and interesting projects.",
      info: {
        email: "brendo.business1@gmail.com",
        phone: "+55 (92) 98211-3979",
        location: "Manaus, Amazonas - Brazil",
        languages: "Portuguese (native), English (fluent), Spanish (basic)"
      }
    },
    services: {
    title: "Services",
    items: [
      {
        num: "1",
        title: "Web Application Development",
        description: "Creation of complete systems, such as e-commerce, administrative dashboards and management platforms. Technologies: React, Next.js, Vue.js, Node.js, etc.",
        href: ""
      },
      {
        num: "2",
        title: "API and Integration Development",
        description: "Building RESTful and GraphQL APIs to connect systems and applications. Integration with third-party services (payments, social networks, CRMs, etc.).",
        href: ""
      },
      {
        num: "3",
        title: "Application Maintenance and Technical Support",
        description: "Bug fixes, software updates and ongoing technical support for existing systems.",
        href: ""
      },
      {
        num: "4",
        title: "Process Automation and Bots",
        description: "Development of bots for customer service (chatbots, WhatsApp, Telegram). Automation of repetitive tasks (data extraction, sending emails, web scraping, etc.). Use of RPA (Robotic Process Automation) to optimize workflows.",
        href: ""
      }
    ]
  },
  }
};