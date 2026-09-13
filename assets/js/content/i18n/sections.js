const experienceSection = {
  "pt-BR": {
    title: "Principais experiências",
    entries: [
      {
        title: "Desenvolvedor full stack",
        organization: "Tecgraf / PUC-Rio",
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
        title: "Full stack developer",
        organization: "Tecgraf / PUC-Rio",
        startDate: "Sep. 2026",
        endDate: "Present",
      },
      {
        title: "Full stack developer",
        organization: "SENAI CIMATEC",
        startDate: "Jul. 2025",
        endDate: "Aug. 2026",
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
        title: "Unofficial Farma",
        startDate: "Ago. de 2026",
        endDate: "Set. de 2026",
        bullets: [
          "Conjunto de serviços para gestão de um catálogo farmacêutico, com laboratórios, " +
            "medicamentos e as avaliações que os clientes escrevem sobre eles, exposto a uma " +
            "IA pelo protocolo MCP e acessível por um chat.",
          "A base são três serviços REST em FastAPI, um por recurso, cada um no seu container " +
            "e todos sobre o mesmo PostgreSQL, com CRUD completo, paginação e busca parcial. " +
            "À frente deles ficam três servidores MCP, que traduzem a chamada de ferramenta " +
            "em requisição HTTP e publicam apenas as operações de leitura, deixando o catálogo " +
            "consultável, mas não alterável pela IA. O chat é um LibreChat com Gemini, que " +
            "encontra os servidores MCP pela própria configuração, e tudo sobe por Docker Compose.",
          "A stack fica transparente ao usuário, que pergunta quais remédios um laboratório " +
            "fabrica ou o que andaram dizendo sobre um deles, enquanto o LLM escolhe sozinho " +
            "a ferramenta que responde.",
        ],
        reference: {
          label: "Acessar repositório (GitHub)",
          url: "https://github.com/davidsantana06/unofficial-farma",
        },
      },
      {
        title: "Availability Monitor",
        startDate: "Maio de 2026",
        endDate: "Jul. de 2026",
        bullets: [
          "Ferramenta de monitoramento de servidores dividida em duas aplicações: um motor " +
            "de linha de comando que verifica a disponibilidade dos hosts e avisa por e-mail, " +
            "e um painel web para montar os arquivos de configuração que ele consome.",
          "O motor, Server Availability Monitor (SAM), é escrito em Python e separa DTOs, " +
            "repositórios e serviços. Opera em loop, testando os servidores por conexão TCP " +
            "em paralelo, comparando o resultado com o ciclo anterior e despachando e-mail " +
            "por SMTP quando detecta queda, recuperação ou lembrete vencido de host ainda " +
            "offline. Os logs têm rotação diária e a lógica pura é coberta por pytest.",
          "O painel, Client Availability Monitor (CAM), é uma SPA em Angular 18 com " +
            "TypeScript, sem backend, banco ou armazenamento local — o estado vive em " +
            "memória, em stores RxJS organizados no padrão MVVM. Cada aba valida o que se " +
            "digita, propaga a renomeação ou remoção de um servidor para a lista de ativos " +
            "e exporta o arquivo pronto. Testes em Jasmine e publicação no GitHub Pages " +
            "rodam via GitHub Actions a cada push na main.",
          "As duas aplicações não conversam entre si, só pelos quatro arquivos de " +
            "configuração: o painel escreve, o monitor relê do disco a cada ciclo, então " +
            "incluir um servidor ou trocar um destinatário entra em vigor sem reiniciar a " +
            "execução.",
        ],
        reference: {
          label: "Acessar vídeo (YouTube)",
          url: "https://youtu.be/ndPGfHC1G3Q",
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
        title: "Unofficial Farma",
        startDate: "Aug. 2026",
        endDate: "Sep. 2026",
        bullets: [
          "A set of services for managing a pharmaceutical catalog — laboratories, medicines, " +
            "and the reviews customers write about them — exposed to an AI through the MCP " +
            "protocol and reachable from a chat interface.",
          "At its base are three FastAPI REST services, one per resource, each in its own " +
            "container and all backed by the same PostgreSQL, with full CRUD, pagination, and " +
            "partial search. In front of them sit three MCP servers, which translate a tool " +
            "call into an HTTP request and publish read operations only, leaving the catalog " +
            "queryable but not modifiable by the AI. The chat is LibreChat running Gemini, " +
            "which discovers the MCP servers from its own configuration, and the whole stack " +
            "comes up through Docker Compose.",
          "The stack stays invisible to the user, who simply asks which medicines a laboratory " +
            "makes or what people have been saying about one of them, while the LLM picks the " +
            "tool that answers on its own.",
        ],
        reference: {
          label: "View repository (GitHub)",
          url: "https://github.com/davidsantana06/unofficial-farma",
        },
      },
      {
        title: "Availability Monitor",
        startDate: "May 2026",
        endDate: "Jul. 2026",
        bullets: [
          "A server monitoring tool split into two applications: a command-line engine that " +
            "checks host availability and sends alerts by e-mail, and a web panel for " +
            "assembling the configuration files it consumes.",
          "The engine, Server Availability Monitor (SAM), is written in Python and separates " +
            "DTOs, repositories, and services. It runs in a loop, probing servers over " +
            "parallel TCP connections, comparing each result with the previous cycle, and " +
            "dispatching e-mail over SMTP when it detects an outage, a recovery, or an " +
            "overdue reminder for a host still offline. Logs rotate daily and the pure logic " +
            "is covered by pytest.",
          "The panel, Client Availability Monitor (CAM), is a TypeScript SPA in Angular 18 " +
            "with no backend, database, or local storage — state lives in memory, in RxJS " +
            "stores organized under the MVVM pattern. Each tab validates what is typed, " +
            "propagates the renaming or removal of a server to the active list, and exports " +
            "the finished file. Jasmine tests and deployment to GitHub Pages run through " +
            "GitHub Actions on every push to main.",
          "The two applications never talk to each other, only through the four configuration " +
            "files: the panel writes them, the monitor re-reads them from disk each cycle, so " +
            "adding a server or changing a recipient takes effect without restarting the run.",
        ],
        reference: {
          label: "Watch video (YouTube)",
          url: "https://youtu.be/ndPGfHC1G3Q",
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
    [experienceSection[locale], educationSection[locale], projectSection[locale]],
  ]),
);
export default sections;
