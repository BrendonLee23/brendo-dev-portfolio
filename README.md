# Portfólio Brendo Moreira

Portfólio profissional desenvolvido em React, TypeScript e Tailwind CSS, apresentando experiências, projetos, habilidades e formas de contato. O projeto é responsivo, moderno e multilíngue (português/inglês).

## Demonstração

Acesse em: [https://brendo-dev-portifolio.vercel.app/](https://brendo-dev-portifolio.vercel.app/)

---

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Uso](#instalação-e-uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Testes](#testes)
- [Deploy](#deploy)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Personalização](#personalização)
- [Licença](#licença)
- [Contato](#contato)

---

## Funcionalidades

- Apresentação profissional com foto, bio e currículo para download
- Seção de habilidades técnicas categorizadas
- Experiências profissionais e formação acadêmica
- Principais projetos com tecnologias e destaques
- Serviços oferecidos
- Formulário de contato funcional
- Suporte a temas claro/escuro
- Multilíngue: português e inglês
- Design responsivo e animações suaves

---

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (testes)
- [Vercel](https://vercel.com/) (deploy)

---

## Instalação e Uso

**Pré-requisitos:**  
- Node.js 18+  
- npm

```sh
# Clone o repositório
git clone <URL_DO_REPO>
cd brendo-dev-portfolio

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## Scripts Disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — visualiza build de produção localmente
- `npm run test` — executa os testes unitários

---

## Testes

Os testes estão localizados na pasta [`tests/`](tests/).  
Exemplo de teste do formulário de contato: [`ContactSheet.test.tsx`](tests/ContactSheet.test.tsx).

Para rodar os testes:

```sh
npm run test
```

---

## Deploy

O deploy pode ser feito facilmente no [Vercel](https://vercel.com/) ou em qualquer serviço que suporte projetos React/Vite.

### Deploy no Vercel

1. Faça login em [vercel.com](https://vercel.com/)
2. Clique em "New Project" e importe este repositório
3. Siga as instruções e publique

---

## Estrutura de Pastas

```
├── public/                # Arquivos estáticos (imagens, favicon, PDF)
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes reutilizáveis (ex: ContactSheet)
│   ├── contexts/          # Contextos React (ex: LanguageContext)
│   ├── data/              # Dados do portfólio (ex: portfolio.ts)
│   ├── hooks/             # Hooks customizados
│   ├── lib/               # Funções utilitárias
│   ├── pages/             # Páginas principais
│   ├── App.tsx            # Componente raiz
│   ├── index.css          # Estilos globais (Tailwind + customizações)
│   └── main.tsx           # Entry point
├── tests/                 # Testes unitários
├── index.html             # HTML principal
├── tailwind.config.ts     # Configuração do Tailwind
├── vite.config.ts         # Configuração do Vite
└── README.md              # Este arquivo
```

---

## Personalização

- **Dados do portfólio:**  
  Edite [`src/data/portfolio.ts`](src/data/portfolio.ts) para alterar textos, experiências, projetos, serviços, etc.
- **Cores e temas:**  
  Personalize variáveis CSS em [`src/index.css`](src/index.css).
- **Imagens:**  
  Substitua arquivos em [`public/`](public/) e [`src/assets/`](src/assets/).

---

## Licença

Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato

- **E-mail:** brendo.business1@gmail.com
- **LinkedIn:** [linkedin.com/in/brendo-moreira](https://linkedin.com/in/brendo-moreira)