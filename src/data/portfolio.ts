// Dados do portfólio em múltiplos idiomas
import driviagens from '@/assets/driviagens-image.png'; // importa a imagem
import climaAtual from '@/assets/clima-image.png';
import casaAposta from '@/assets/apostas-image.jpeg';
import doceImage from '@/assets/doce-image.jpg';
import portifolioImage from '@/assets/portfolio-image.jpg';
import belfortImage from '@/assets/belfort-image.jpg';
import memoryImage from '@/assets/memory-image.png';
import brendo2Image from '@/assets/brendo2-image.jpg';
import sensorImage from '@/assets/sensor-image.png';

export const portfolioData = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      services: "Serviços",
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
          name: "Viagens Aéreas API",
          description: "Plataforma de reservas de viagens com sistema de busca avançada e gestão de reservas.",
          technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "Express.js"],
          highlights: ["Sistema de busca inteligente", "Interface intuitiva", "Gestão completa de reservas"],
          image: driviagens,
          repository: "https://github.com/BrendonLee23/viagens-aereas-API"
        },
        {
          name: "Clima Atual",
          description: "Aplicação responsiva que exibe relatório meteorológico atual e detalhado a partir da busca por cidade, estado ou país.",
          technologies: ["React.js", "TypeScript", "Vite", "Styled-Components", "Axios", "OpenWeather API", "Geolocalização"],
          highlights: [
            "Busca por localização (cidade / estado / país)",
            "Detecção de geolocalização",
            "Interface responsiva",
            "Consumo de API externa (OpenWeather)",
            "Deploy na Vercel"
          ],
          image: climaAtual,
          deploy: "https://project-good-weather-frontend.vercel.app/",
          repository: "https://github.com/Brendonlee23/project-good-weather-frontend"
        },
        {
          name: "Casa de Apostas API",
          description: "API REST para apostas esportivas, desenvolvida com TypeScript, Node.js, Express e Prisma. Permite cadastro de participantes, jogos e apostas, com integração ao banco de dados Postgres e testes automatizados.",
          technologies: [
            "TypeScript",
            "Node.js",
            "Express",
            "Prisma ORM",
            "PostgreSQL",
            "Jest",
            "Supertest"
          ],
          highlights: [
            "Cadastro de participantes, jogos e apostas",
            "Controle de saldo e cálculo de ganhos",
            "Testes automatizados",
            "Deploy gratuito no Render"
          ],
          image: casaAposta,
          deploy: "https://desafio-tecnico-api-7q98.onrender.com/",
          repository: "https://github.com/BrendonLee23/casa-de-apostas-API"
        },
        {
          name: "Loja de Doce - Laboleria API",
          description: "API para gerenciar pedidos de bolos na confeitaria Laboleria. Permite cadastro de bolos, clientes, pedidos, listagem e controle de entrega. Desenvolvida com Node.js e PostgreSQL.",
          technologies: [
            "Node.js",
            "PostgreSQL",
            "Express.js"
          ],
          highlights: [
            "Cadastro e listagem de bolos",
            "Gestão de clientes e pedidos",
            "Controle de entrega dos pedidos"
          ],
          image: doceImage,
          repository: "https://github.com/BrendonLee23/sweet-shop-laboleria-API"
        },
        {
          name: "Portfólio Web",
          description: "Site portfólio profissional desenvolvido em React, TypeScript e Tailwind CSS. Apresenta experiências, projetos, habilidades e contato, com design responsivo, suporte a temas claro/escuro e multilíngue.",
          technologies: [
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "shadcn/ui"
          ],
          highlights: [
            "Design responsivo e moderno",
            "Multilíngue (português/inglês)",
            "Formulário de contato funcional",
            "Currículo para download",
            "Deploy automático na Vercel"
          ],
          image: portifolioImage,
          deploy: "https://brendo-dev-portifolio.vercel.app/",
          repository: "https://github.com/BrendonLee23/brendo-dev-portfolio"
        },
        {
          name: "Jogo da memória",
          description: "Jogo da memória online desenvolvido com Next.js, React e Tailwind CSS. Interface responsiva, animações suaves e lógica de jogo dinâmica. Permite jogar no navegador, com embaralhamento automático das cartas e contagem de movimentos.",
          technologies: [
            "Next.js",
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ],
          highlights: [
            "Interface responsiva e intuitiva",
            "Animações suaves",
            "Contador de movimentos",
            "Embaralhamento automático",
            "Deploy na Vercel"
          ],
          image: memoryImage,
          deploy: "https://memory-card-game-three-pied.vercel.app/",
          repository: "https://github.com/BrendonLee23/memory-card-game"
        },
        {
          name: "Belfort Healthcare SaaS",
          description: "Landing page institucional para a Belfort Healthcare, referência em representação e distribuição de produtos hospitalares. Site moderno, responsivo, web e mobile, com suporte a temas claro/escuro, animações e arquitetura componentizada.",
          technologies: [
            "Next.js 15",
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "Lucide Icons",
            "Next Themes",
            "ESLint + Prettier",
            "Vercel"
          ],
          highlights: [
            "Design moderno e responsivo",
            "Multilíngue (PT/EN)",
            "Dark/light mode",
            "Animações sofisticadas",
            "Deploy automático na Vercel"
          ],
          image: belfortImage,
          deploy: "https://belfort-project.vercel.app/",
          repository: "https://github.com/BrendonLee23/belfort-project"
        },
        {
          name: "Meu Portfolio Pessoal",
          description: "Portfólio pessoal desenvolvido com Next.js, TailwindCSS e bibliotecas modernas de UI. Apresenta experiências, projetos, habilidades, estatísticas e formas de contato de maneira interativa e responsiva.",
          technologies: [
            "Next.js",
            "React",
            "TailwindCSS",
            "Framer Motion",
            "Radix UI",
            "EmailJS",
            "React Icons",
            "Swiper"
          ],
          highlights: [
            "Página inicial com apresentação e estatísticas",
            "Navegação responsiva (desktop e mobile)",
            "Listagem de projetos com links para repositórios",
          ],
          image: brendo2Image,
          deploy: "https://portfolio-dev-zeta-ten.vercel.app/",
          repository: "https://github.com/BrendonLee23/my-portfolio"
        },
        {
          name: "Monitoramento de Sensores",
          description: "Sistema completo de monitoramento sensorial em tempo real com alertas automáticos por email. Dashboard interativo para gestão de sensores industriais e análise de leituras.",
          technologies: [
            "ASP.NET Core",
            "React.js",
            "TypeScript",
            "PostgreSQL",
            "TanStack Query",
            "Tailwind CSS"
          ],
          highlights: [
            "Dashboard com atualização a cada 15s",
            "Alertas inteligentes via email",
            "Gestão completa de sensores e setores",
            "Histórico detalhado de leituras",
            "Simulador de leituras em lote"
          ],
          image: sensorImage,
          deploy: "https://sensorpulse-monitor.vercel.app/",
          repository: "https://github.com/BrendonLee23/monitoring-sensors-api"
        },
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
          name: "Air Travel API",
          description: "Travel booking platform with advanced search system and reservation management.",
          technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "Express.js"],
          highlights: ["Smart search system", "Intuitive interface", "Complete reservation management"],
          image: driviagens,
          repository: "https://github.com/BrendonLee23/viagens-aereas-API"
        },
        {
          name: "Current Weather",
          description: "Responsive application that shows current and detailed weather report by searching a city, state or country.",
          technologies: ["React.js", "TypeScript", "Vite", "Styled-Components", "Axios", "OpenWeather API", "Geolocation"],
            highlights: [
              "Location search (city / state / country)",
              "Geolocation detection",
              "Responsive UI",
              "External API consumption (OpenWeather)",
              "Deployed on Vercel"
            ],
          image: climaAtual,
          deploy: "https://project-good-weather-frontend.vercel.app/",
          repository: "https://github.com/Brendonlee23/project-good-weather-frontend"
        },    
        {
          name: "Betting House API",
          description: "REST API for sports betting, built with TypeScript, Node.js, Express and Prisma. Allows registration of participants, games and bets, with PostgreSQL integration and automated tests.",
          technologies: [
            "TypeScript",
            "Node.js",
            "Express",
            "Prisma ORM",
            "PostgreSQL",
            "Jest",
            "Supertest"
          ],
          highlights: [
            "Participants, games and bets registration",
            "Balance control and winnings calculation",
            "Automated tests",
            "Free deploy on Render"
          ],
          image: casaAposta,
          deploy: "https://desafio-tecnico-api-7q98.onrender.com/",
          repository: "https://github.com/BrendonLee23/casa-de-apostas-API"
        },
        {
          name: "Sweet Shop - Laboleria API",
          description: "API to manage cake orders for Laboleria sweet shop. Allows registering cakes, clients, orders, listing and delivery control. Built with Node.js and PostgreSQL.",
          technologies: [
            "Node.js",
            "PostgreSQL",
            "Express.js"
          ],
          highlights: [
            "Cake registration and listing",
            "Client and order management",
            "Order delivery control"
          ],
          image: doceImage,
          repository: "https://github.com/BrendonLee23/sweet-shop-laboleria-API"
        },
        {
          name: "Portfolio Web",
          description: "Professional portfolio website built with React, TypeScript and Tailwind CSS. Showcases experience, projects, skills and contact, with responsive design, dark/light theme support and multilingual interface.",
          technologies: [
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "shadcn/ui"
          ],
          highlights: [
            "Modern responsive design",
            "Multilingual (Portuguese/English)",
            "Functional contact form",
            "Downloadable CV",
            "Automatic deploy on Vercel"
          ],
          image: portifolioImage,
          deploy: "https://brendo-dev-portifolio.vercel.app/",
          repository: "https://github.com/BrendonLee23/brendo-dev-portfolio"
        },
        {
          name: "Memory Card Game",
          description: "Online memory card game built with Next.js, React and Tailwind CSS. Responsive interface, smooth animations and dynamic game logic. Play in the browser with automatic card shuffling and move counter.",
          technologies: [
            "Next.js",
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ],
          highlights: [
            "Responsive and intuitive UI",
            "Smooth animations",
            "Move counter",
            "Automatic shuffling",
            "Deployed on Vercel"
          ],
          image: memoryImage,
          deploy: "https://memory-card-game-three-pied.vercel.app/",
          repository: "https://github.com/BrendonLee23/memory-card-game"
        },
        {
          name: "Belfort Healthcare SaaS",
          description: "Institutional landing page for Belfort Healthcare, a reference company in representation and distribution of hospital products. Modern, responsive website (web and mobile), with dark/light mode, animations and component architecture.",
          technologies: [
            "Next.js 15",
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "Lucide Icons",
            "Next Themes",
            "ESLint + Prettier",
            "Vercel"
          ],
          highlights: [
            "Modern and responsive design",
            "Multilingual (PT/EN)",
            "Dark/light mode",
            "Sophisticated animations",
            "Automatic deploy on Vercel"
          ],
          image: belfortImage,
          deploy: "https://belfort-project.vercel.app/",
          repository: "https://github.com/BrendonLee23/belfort-project"
        },
        {
          name: "Personal Portfolio",
          description: "Personal portfolio built with Next.js, TailwindCSS and modern UI libraries. Showcases experience, projects, skills, stats and contact in an interactive and responsive way.",
          technologies: [
            "Next.js",
            "React",
            "TailwindCSS",
            "Framer Motion",
            "Radix UI",
            "EmailJS",
            "React Icons",
            "Swiper"
          ],
          highlights: [
            "Home page with presentation and stats",
            "Responsive navigation (desktop and mobile)",
            "Project listing with repository links",
          ],
          image: brendo2Image,
          deploy: "https://portfolio-dev-zeta-ten.vercel.app/",
          repository: "https://github.com/BrendonLee23/my-portfolio"
        },
        {
          name: "Sensor Monitoring System",
          description: "Complete real-time sensor monitoring system with automatic email alerts. Interactive dashboard for industrial sensor management and reading analysis.",
          technologies: [
            "ASP.NET Core",
            "React.js",
            "TypeScript",
            "PostgreSQL",
            "TanStack Query",
            "Tailwind CSS"
          ],
          highlights: [
            "Dashboard with 15s auto-refresh",
            "Intelligent email alerts",
            "Complete sensor and sector management",
            "Detailed reading history",
            "Batch reading simulator"
          ],
          image: sensorImage,
          deploy: "https://sensorpulse-monitor.vercel.app/",
          repository: "https://github.com/BrendonLee23/monitoring-sensors-api"
        },
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