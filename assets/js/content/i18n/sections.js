const experienceSection = {
  "pt-BR": {
    title: "Principais experiências",
    entries: [
      {
        title: "Desenvolvedor full stack",
        organization: "SENAI CIMATEC",
        startDate: "Jul. de 2025",
        endDate: "Presente",
        bullets: [
          "Elaborei uma aplicação CLI em Java para atuar como middleware entre microsserviços, " +
            "integrando-a a uma interface desktop multiplataforma desenvolvida em Angular e " +
            "Electron via comunicação entre processos (IPC), centralizando a interação de " +
            "10 serviços distintos e abstraindo a complexidade do ecossistema.",
          "Estruturei um serviço de métricas em Java para monitorar smart contracts " +
            "implantados em redes blockchain compatíveis com EVM, mapeando e armazenando de " +
            "forma estruturada em MongoDB o layout dos contratos e o histórico de execução de " +
            "funções, além de expor os dados para consumo via Remote Procedure Call (gRPC).",
          "Configurei e implantei um nó InterPlanetary File System (IPFS) para armazenamento " +
            "descentralizado, viabilizando o upload, a leitura e a entrega ágil de arquivos " +
            "para diferentes clientes e usuários da rede.",
          "Orquestrei a conteinerização de 21 repositórios utilizando Docker e Nginx, integrando " +
            "as etapas de CI/CD e centralizando o acesso aos recursos da infraestrutura via " +
            "proxy reverso em um DNS proprietário.",
          "Para consolidar a base de conhecimento de todos os componentes descritos " +
            "anteriormente, documentei a solução utilizando Docusaurus integrado ao agente " +
            "Ask AI, detalhando processos de implantação e especificações de APIs para " +
            "permitir a consulta interativa por modelos de linguagem — como o OpenAI GPT " +
            "(substituível conforme demanda).",
        ],
      },
      {
        title: "Desenvolvedor full stack",
        organization: "SENAI CIMATEC",
        startDate: "Jun. de 2024",
        endDate: "Jun. de 2025",
        bullets: [
          "Desenvolvi o backend de uma plataforma de telemedicina nacional com NestJS e " +
            "Prisma ORM, organizando módulos em arquitetura de camadas, implementando " +
            "controle de acesso por roles (RBAC) e entregando uma API REST segura, escalável " +
            "e de fácil manutenção.",
          "Com base nesse servidor, construí um painel administrativo com Next.js e React " +
            "a partir de protótipos no Figma, permitindo gerenciar pacientes, profissionais " +
            "de saúde, contratos empresariais e outros registros essenciais para o ecossistema.",
          "Integrei um sistema de videoconferência open source, Jitsi Meet, em aplicações " +
            "frontend com React, permitindo que usuários em diferentes regiões do Brasil " +
            "realizem chamadas de vídeo seguras e privadas.",
          "Elaborei o subsistema de relatórios de uma plataforma de controle de ponto com " +
            "NestJS, Puppeteer e Bulma, integrando PostgreSQL e MongoDB, permitindo consultas " +
            "estatísticas por vínculos empregatícios e critérios de busca avançados.",
          "Implementei uma suíte de testes automatizados com Jest, cobrindo cerca de 80% " +
            "da base de código existente e garantindo conformidade com os critérios de " +
            "qualidade definidos no SonarQube.",
        ],
      },
    ],
  },

  en: {
    title: "Key experience",
    entries: [
      {
        title: "Full stack developer",
        organization: "SENAI CIMATEC",
        startDate: "Jul. 2025",
        endDate: "Present",
        bullets: [
          "Designed a Java-based CLI application acting as middleware between microservices, " +
            "integrated with a cross-platform desktop interface built with Angular and Electron " +
            "via IPC, centralizing interactions across 10 services and abstracting ecosystem complexity.",
          "Built a Java metrics service to monitor smart contracts deployed on EVM-compatible " +
            "blockchains, structuring and storing contract layouts and execution history in MongoDB, " +
            "and exposing data via gRPC.",
          "Configured and deployed an InterPlanetary File System (IPFS) node for decentralized storage, " +
            "enabling efficient file upload, retrieval, and delivery.",
          "Orchestrated containerization of 21 repositories using Docker and Nginx, integrating CI/CD " +
            "pipelines and centralizing infrastructure access via reverse proxy and custom DNS.",
          "Documented the full solution using Docusaurus integrated with Ask AI, detailing deployment " +
            "processes and API specifications for interactive querying via language models such as OpenAI GPT.",
        ],
      },
      {
        title: "Full stack developer",
        organization: "SENAI CIMATEC",
        startDate: "Jun. 2024",
        endDate: "Jun. 2025",
        bullets: [
          "Developed the backend of a national telemedicine platform using NestJS and Prisma ORM, " +
            "applying layered architecture, implementing RBAC, and delivering a secure and scalable REST API.",
          "Built an administrative dashboard with Next.js and React based on Figma prototypes, " +
            "enabling management of patients, healthcare professionals, and contracts.",
          "Integrated the open-source video conferencing system Jitsi Meet into React applications, " +
            "allowing secure video calls across different regions.",
          "Designed a reporting subsystem using NestJS, Puppeteer, and Bulma, integrating PostgreSQL " +
            "and MongoDB for advanced analytics queries.",
          "Implemented an automated test suite with Jest, achieving ~80% coverage and ensuring " +
            "compliance with SonarQube quality standards.",
        ],
      },
    ],
  },
};

const educationSection = {
  "pt-BR": {
    title: "Formação acadêmica",
    entries: [
      {
        title: "Pós-Graduação Lato Senso em Desenvolvimento Web",
        organization: "Instituto Federal da Bahia (IFBA)",
        startDate: "Mar. de 2026",
        endDate: "Presente",
      },
      {
        title: "Bacharelado em Sistemas de Informação",
        organization: "Instituto Federal da Bahia (IFBA)",
        startDate: "Mar. de 2021",
        endDate: "Nov. de 2025",
        bullets: [
          "Algoritmos, Estrutura de Dados, Engenharia de Software e Análise de Sistemas.",
          "Qualidade de Software, UX/UI, Desenvolvimento Web e Desenvolvimento Mobile.",
          "Banco de Dados, Sistemas Distribuídos e Inteligência Artificial.",
          "Scrum, Kanban e Business Intelligence.",
          "Governança de TI, Segurança da Informação e Administração de Redes.",
        ],
      },
    ],
  },

  en: {
    title: "Education",
    entries: [
      {
        title: "Postgraduate Degree in Web Development",
        organization: "Federal Institute of Bahia (IFBA)",
        startDate: "Mar. 2026",
        endDate: "Present",
      },
      {
        title: "Bachelor’s Degree in Information Systems",
        organization: "Federal Institute of Bahia (IFBA)",
        startDate: "Mar. 2021",
        endDate: "Nov. 2025",
        bullets: [
          "Algorithms, Data Structures, Software Engineering, and Systems Analysis.",
          "Software Quality, UX/UI, Web Development, and Mobile Development.",
          "Databases, Distributed Systems, and Artificial Intelligence.",
          "Scrum, Kanban, and Business Intelligence.",
          "IT Governance, Information Security, and Network Administration.",
        ],
      },
    ],
  },
};

const projectSection = {
  "pt-BR": {
    title: "Projetos em destaque",
    entries: [
      {
        title: "OrdersApp",
        startDate: "Jan. de 2026",
        endDate: "Fev. de 2026",
        bullets: [
          "Aplicação full stack para gestão de pedidos de produtos em diferentes segmentos, " +
            "centralizando o registro e a consulta de itens identificados por marca, modelo e ano.",
          "O sistema combina uma API em C# com .NET e uma interface web em Angular, sobre " +
            "SQL Server. O backend segue arquitetura em camadas e o frontend, organização " +
            "modular por componentes. As operações críticas são otimizadas no próprio banco, " +
            "com trigger de totalização automática e stored procedure de busca filtrada; " +
            "testes unitários (xUnit) no pipeline de build e o empacotamento em Docker " +
            "garantem a confiabilidade da entrega.",
          "Seu ponto alto é o sistema de filtros em cascata (Marca → Modelo → Ano) com " +
            "carregamento dinâmico: cada escolha recalcula as opções seguintes, estreitando " +
            "a busca até o pedido desejado.",
        ],
        reference: {
          label: "Acessar repositório (GitHub)",
          url: "https://github.com/davidsantana06/orders-app",
        },
      },
      {
        title: "Resuming",
        startDate: "Fev. de 2025",
        endDate: "Nov. de 2025",
        bullets: [
          "Plataforma de criação e compartilhamento de currículos, pensada para trazer " +
            "objetividade aos portfólios.",
          "Aplicação monolítica em NestJS, com Prisma ORM e autenticação via JWT, expõe " +
            "uma API REST documentada com Swagger e tem a interface estilizada com Bulma. " +
            "Permite gerir informações básicas, formação acadêmica e experiência " +
            "profissional, além de exportar o currículo em PDF, renderizado no servidor " +
            "por meio do Puppeteer.",
          "Pensado por e para desenvolvedores, o Resuming trata o currículo como uma " +
            "página web própria e sempre atualizável, em vez de um arquivo estático, e " +
            "oferece exportação em PDF para quando o formato impresso é necessário.",
        ],
        reference: {
          label: "Acessar repositório (GitHub)",
          url: "https://github.com/davidsantana06/resuming",
        },
      },
      {
        title: "Implantação do pEATL (RPG browser-based)",
        startDate: "Out. de 2012",
        endDate: "Nov. de 2012",
        bullets: [
          "Aos 10 anos de idade, dei meus primeiros passos práticos em tecnologia " +
            "implantando um servidor privado a partir de uma versão modificada do " +
            "AdventureQuest Worlds — meu primeiro contato com código-fonte e a " +
            "customização de aplicações.",
          "Adaptei a base existente com a inclusão de novos itens e ajustes na interface " +
            "principal, explorando na prática a manipulação de assets, a estrutura web e a " +
            "organização de arquivos.",
          "Executei o deploy localmente e viabilizei o acesso externo via VPN (LogMeIn " +
            "Hamachi), o que me introduziu a noções de rede, distribuição e disponibilidade.",
        ],
        reference: {
          label: "Acessar vídeo (YouTube)",
          url: "https://youtu.be/htxKAjm1iLc",
        },
      },
    ],
  },

  en: {
    title: "Featured projects",
    entries: [
      {
        title: "OrdersApp",
        startDate: "Jan. 2026",
        endDate: "Feb. 2026",
        bullets: [
          "Full stack application for managing product orders across different segments, " +
            "centralizing the registration and lookup of items identified by brand, model, and year.",
          "The system combines a C# API on .NET with an Angular web interface, over SQL Server. " +
            "The backend follows a layered architecture and the frontend a modular, " +
            "component-based organization. Critical operations are optimized in the database " +
            "itself, with an automatic totalization trigger and a filtered-search stored " +
            "procedure; unit tests (xUnit) in the build pipeline and Docker packaging ensure " +
            "a reliable delivery.",
          "Its strongest point is the cascading filter system (Brand → Model → Year) with " +
            "dynamic loading: each choice recalculates the next set of options, narrowing the " +
            "search down to the order at hand.",
        ],
        reference: {
          label: "View repository (GitHub)",
          url: "https://github.com/davidsantana06/orders-app",
        },
      },
      {
        title: "Resuming",
        startDate: "Feb. 2025",
        endDate: "Nov. 2025",
        bullets: [
          "A platform for creating and sharing résumés, designed to bring objectivity to portfolios.",
          "A monolithic NestJS application, with Prisma ORM and JWT authentication, it exposes " +
            "a REST API documented with Swagger and has its interface styled with Bulma. It lets " +
            "users manage basic information, education, and work experience, and exports résumés " +
            "to PDF rendered server-side via Puppeteer.",
          "Built by and for developers, Resuming treats the résumé as its own, always-updatable " +
            "web page rather than a static file, and offers PDF export for when a print format is needed.",
        ],
        reference: {
          label: "View repository (GitHub)",
          url: "https://github.com/davidsantana06/resuming",
        },
      },
      {
        title: "pEATL deployment (browser-based RPG)",
        startDate: "Oct. 2012",
        endDate: "Nov. 2012",
        bullets: [
          "At the age of 10, I took my first practical steps in tech by deploying a private " +
            "server from a modified version of AdventureQuest Worlds — my first contact with " +
            "source code and application customization.",
          "I adapted the existing codebase by adding new items and adjusting the main interface, " +
            "gaining practical experience with asset manipulation, web structure, and file organization.",
          "I performed the deployment locally and enabled external access via VPN (LogMeIn " +
            "Hamachi), which introduced me to concepts of networking, distribution, and availability.",
        ],
        reference: {
          label: "Watch video (YouTube)",
          url: "https://youtu.be/htxKAjm1iLc",
        },
      },
    ],
  },
};

const sections = Object.fromEntries(
  Object.keys(experienceSection).map((locale) => [
    locale,
    [
      experienceSection[locale],
      educationSection[locale],
      projectSection[locale],
    ],
  ]),
);
export default sections;
