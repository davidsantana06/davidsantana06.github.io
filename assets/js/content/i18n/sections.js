const sections = {
  "pt-BR": [
    {
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

    {
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

    {
      title: "Projetos em destaque",
      entries: [
        {
          title: "OrdersApp",
          startDate: "Jan. de 2026",
          endDate: "Fev. de 2026",
          bullets: [
            "Aplicação full stack voltada à gestão de pedidos de produtos em diferentes segmentos.",
            "A solução centraliza o registro de itens com marca, modelo e ano, permitindo " +
              "requisições tanto via API, desenvolvida em .NET, quanto por interface web " +
              "construída em Angular.",
            "Sua arquitetura em camadas organiza as responsabilidades de forma clara, adotando " +
              "Component-Based Architecture no frontend, alinhada ao MVVM, e um backend próximo " +
              "ao MVC com Service Layer, com operações críticas otimizadas por meio de triggers e " +
              "stored procedures implementadas diretamente no banco de dados.",
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
            "Plataforma focada na criação e compartilhamento de currículos, feita sob " +
              "medida para desenvolvedores.",
            "O projeto resolve a falta de objetividade em portfólios, permitindo gerir " +
              "trajetórias acadêmicas e profissionais via API.",
            "O destaque é a visibilidade do perfil: uma página web exclusiva com URL " +
              "curta e elegante (resuming.dev), ideal para divulgação.",
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
            "Meu primeiro projeto prático em tecnologia, no qual implantei um servidor " +
              "privado a partir de uma versão modificada do AdventureQuest Worlds, marcando " +
              "meu contato inicial com código-fonte e customização de aplicações — " +
              "desenvolvido aos 10 anos de idade.",
            "Adaptei a base existente com inclusão de novos itens e ajustes na interface " +
              "principal, explorando na prática manipulação de assets, estrutura web e " +
              "organização de arquivos.",
            "Executei o deploy localmente, viabilizando o acesso externo via VPN (LogMeIn " +
              "Hamachi), o que me introduziu a noções de rede, distribuição e disponibilidade.",
          ],
          reference: {
            label: "Acessar vídeo (YouTube)",
            url: "https://youtu.be/htxKAjm1iLc",
          },
        },
      ],
    },
  ],

  en: [
    {
      title: "Key Experience",
      entries: [
        {
          title: "Full Stack Developer",
          organization: "SENAI CIMATEC",
          startDate: "Jul 2025",
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
          title: "Full Stack Developer",
          organization: "SENAI CIMATEC",
          startDate: "Jun 2024",
          endDate: "Jun 2025",
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

    {
      title: "Education",
      entries: [
        {
          title: "Postgraduate Degree in Web Development",
          organization: "Federal Institute of Bahia (IFBA)",
          startDate: "Mar 2026",
          endDate: "Present",
        },
        {
          title: "Bachelor’s Degree in Information Systems",
          organization: "Federal Institute of Bahia (IFBA)",
          startDate: "Mar 2021",
          endDate: "Nov 2025",
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

    {
      title: "Featured Projects",
      entries: [
        {
          title: "OrdersApp",
          startDate: "Jan 2026",
          endDate: "Feb 2026",
          bullets: [
            "Full stack application for managing product orders across multiple domains.",
            "Centralizes item registration with brand, model, and year, supporting both API (.NET) " +
              "and Angular-based web interface interactions.",
            "Layered architecture with component-based frontend (MVVM) and backend aligned with MVC " +
              "and Service Layer, with performance optimizations using database triggers and stored procedures.",
          ],
          reference: {
            label: "View repository (GitHub)",
            url: "https://github.com/davidsantana06/orders-app",
          },
        },
        {
          title: "Resuming",
          startDate: "Feb 2025",
          endDate: "Nov 2025",
          bullets: [
            "Platform focused on creating and sharing resumes, tailored for developers.",
            "Addresses lack of clarity in portfolios by enabling structured academic and professional tracking via API.",
            "Highlights profile visibility with a dedicated, clean URL (resuming.dev), ideal for sharing.",
          ],
          reference: {
            label: "View repository (GitHub)",
            url: "https://github.com/davidsantana06/resuming",
          },
        },
        {
          title: "pEATL Deployment (Browser-based RPG)",
          startDate: "Oct 2012",
          endDate: "Nov 2012",
          bullets: [
            "First hands-on tech project, deploying a private server based on a modified version of AdventureQuest Worlds at age 10.",
            "Customized assets and interface, gaining practical experience with web structure and file organization.",
            "Performed local deployment and enabled external access via VPN (Hamachi), introducing networking concepts.",
          ],
          reference: {
            label: "Watch video (YouTube)",
            url: "https://youtu.be/htxKAjm1iLc",
          },
        },
      ],
    },
  ],
};
export default sections;
