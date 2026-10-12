import {
  UNOFFICIAL_FARMA_VIDEO_URL,
  AVAILABILITY_MONITOR_VIDEO_URL,
  PEATL_IMPLANTATION_VIDEO_URL,
} from "../projects.js";

const experienceSection = {
  "pt-BR": {
    title: "Principais experiências",
    entries: [
      {
        title: "Desenvolvedor full stack",
        organization: "Instituto Tecgraf/PUC-Rio",
        startDate: "Set. de 2026",
        endDate: "Presente",
      },
      {
        title: "Desenvolvedor full stack",
        organization: "SENAI CIMATEC",
        startDate: "Jul. de 2025",
        endDate: "Ago. de 2026",
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
        title: "Full-stack developer",
        organization: "Tecgraf Institute/PUC-Rio",
        startDate: "Sep. 2026",
        endDate: "Present",
      },
      {
        title: "Full-stack developer",
        organization: "SENAI CIMATEC",
        startDate: "Jul. 2025",
        endDate: "Aug. 2026",
        bullets: [
          "Built a Java CLI application to act as middleware between microservices, " +
            "integrating it with a cross-platform desktop interface developed in Angular and " +
            "Electron through inter-process communication (IPC), centralizing the interaction " +
            "of 10 distinct services and abstracting the complexity of the ecosystem.",
          "Structured a Java metrics service to monitor smart contracts deployed on " +
            "EVM-compatible blockchains, mapping and storing contract layouts and function " +
            "execution history in MongoDB, and exposing the data for consumption via Remote " +
            "Procedure Call (gRPC).",
          "Configured and deployed an InterPlanetary File System (IPFS) node for " +
            "decentralized storage, enabling fast upload, retrieval, and delivery of files to " +
            "the different clients and users on the network.",
          "Orchestrated the containerization of 21 repositories with Docker and Nginx, " +
            "integrating CI/CD stages and centralizing access to infrastructure resources " +
            "through a reverse proxy on a proprietary DNS.",
          "To consolidate the knowledge base for all of the components above, documented the " +
            "solution with Docusaurus integrated with the Ask AI agent, detailing deployment " +
            "processes and API specifications so that language models — such as OpenAI GPT " +
            "(swappable as needed) — can query it interactively.",
        ],
      },
      {
        title: "Full-stack developer",
        organization: "SENAI CIMATEC",
        startDate: "Jun. 2024",
        endDate: "Jun. 2025",
        bullets: [
          "Developed the backend of a national telemedicine platform with NestJS and Prisma " +
            "ORM, organizing modules in a layered architecture, implementing role-based " +
            "access control (RBAC), and delivering a secure, scalable, and maintainable " +
            "REST API.",
          "On top of that server, created an administrative dashboard with Next.js and React " +
            "from Figma prototypes, making it possible to manage patients, healthcare " +
            "professionals, corporate contracts, and other records essential to the ecosystem.",
          "Integrated Jitsi Meet, an open-source video conferencing system, into React " +
            "frontend applications, allowing users in different regions of Brazil to hold " +
            "secure, private video calls.",
          "Developed the reporting subsystem of a time-and-attendance platform with NestJS, " +
            "Puppeteer, and Bulma, integrating PostgreSQL and MongoDB to support statistical " +
            "queries by employment relationship and advanced search criteria.",
          "Implemented an automated test suite with Jest, covering roughly 80% of the " +
            "existing codebase and ensuring compliance with the quality criteria defined in " +
            "SonarQube.",
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
        title: "Pós-Graduação Lato Sensu em Desenvolvimento Web",
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
        title: "Postgraduate degree in Web Development",
        organization: "Federal Institute of Bahia (IFBA)",
        startDate: "Mar. 2026",
        endDate: "Present",
      },
      {
        title: "Bachelor’s degree in Information Systems",
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
        title: "Unofficial Farma",
        startDate: "Ago. de 2026",
        endDate: "Set. de 2026",
        video: {
          url: UNOFFICIAL_FARMA_VIDEO_URL,
          thumbnail: "./assets/img/unofficial-farma.jpg",
        },
      },
      {
        title: "Availability Monitor",
        startDate: "Maio de 2026",
        endDate: "Jul. de 2026",
        video: {
          url: AVAILABILITY_MONITOR_VIDEO_URL,
          thumbnail: "./assets/img/availability-monitor.jpg",
        },
      },
      {
        title: "Implantação do pEATL (RPG browser-based)",
        startDate: "Out. de 2012",
        endDate: "Nov. de 2012",
        video: {
          url: PEATL_IMPLANTATION_VIDEO_URL,
          thumbnail: "./assets/img/peatl-implantation.jpg",
        },
      },
    ],
  },

  en: {
    title: "Featured projects",
    entries: [
      {
        title: "Unofficial Farma",
        startDate: "Aug. 2026",
        endDate: "Sep. 2026",
        video: {
          url: UNOFFICIAL_FARMA_VIDEO_URL,
          thumbnail: "./assets/img/unofficial-farma.jpg",
        },
      },
      {
        title: "Availability Monitor",
        startDate: "May 2026",
        endDate: "Jul. 2026",
        video: {
          url: AVAILABILITY_MONITOR_VIDEO_URL,
          thumbnail: "./assets/img/availability-monitor.jpg",
        },
      },
      {
        title: "pEATL deployment (browser-based RPG)",
        startDate: "Oct. 2012",
        endDate: "Nov. 2012",
        video: {
          url: PEATL_IMPLANTATION_VIDEO_URL,
          thumbnail: "./assets/img/peatl-implantation.jpg",
        },
      },
    ],
  },
};

export const sections = Object.fromEntries(
  Object.keys(experienceSection).map((locale) => [
    locale,
    [experienceSection[locale], educationSection[locale], projectSection[locale]],
  ]),
);
