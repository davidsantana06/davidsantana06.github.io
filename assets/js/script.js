const FORMAL_RESUME_URL = "https://drive.google.com/file/d/1jgGLD0Xsc_6BROEKWf13MTI_zWiQDSav";

const isEven = (index) => index % 2 == 0;

const main = {
  name: "David Santana",
  summary:
    "<b>Desenvolvedor full stack</b> e <b>bacharel em Sistemas de Informação</b>, com mais de <b>3 anos de atuação</b> em soluções web. Possuo forte domínio em backend e bancos de dados (SQL e NoSQL), além de experiência em frontend, automação, qualidade de software (QA) e cloud computing.",
  platforms: [
    {
      faIcon: "fab fa-linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/davidsantana06/",
    },
    {
      faIcon: "fab fa-github",
      label: "GitHub",
      url: "https://github.com/davidsantana06",
    },
  ],
};

const experienceSection = {
  title: "Experiências profissionais",
  entries: [
    {
      title: "Desenvolvedor full stack",
      organization: "SENAI CIMATEC",
      startDate: "Jun. de 2024",
      endDate: "Presente",
      bullets: [
        "Desenvolvi o backend de uma plataforma de telemedicina nacional com NestJS e Prisma ORM, organizando módulos em arquitetura de camadas, implementando controle de acesso por roles (RBAC) e entregando uma API REST segura, escalável e de fácil manutenção.",
        "Com base nesse servidor, construí um painel administrativo com Next.js e React a partir de protótipos no Figma, permitindo gerenciar pacientes, profissionais de saúde, contratos empresariais e outros registros essenciais para o ecossistema.",
        "Integrei um sistema de videoconferência open source, Jitsi Meet, em aplicações frontend com React, permitindo que usuários em diferentes regiões do Brasil realizem chamadas de vídeo seguras e privadas.",
        "Elaborei o subsistema de relatórios de uma plataforma de controle de ponto com NestJS, Puppeteer e Bulma, integrando PostgreSQL e MongoDB, permitindo consultas estatísticas por vínculos empregatícios e critérios de busca avançados.",
        "Implementei uma suíte de testes automatizados com Jest, cobrindo cerca de 80% da base de código existente e garantindo conformidade com os critérios de qualidade definidos no SonarQube.",
        "Atualmente trabalho com tecnologias blockchain, focando no desenvolvimento de smart contracts e aplicações descentralizadas (dApps).",
      ],
    },
    {
      title: "Desenvolvedor full stack",
      organization: "Prefeitura de Vitória da Conquista",
      startDate: "Fev. de 2023",
      endDate: "Fev. de 2024",
      bullets: [
        "Construí uma aplicação desktop com Flask e Pandas para automatizar a geração de registros personalizados com nome e dieta de recém-nascidos, produzindo registros padronizados e reduzindo significativamente a intervenção manual.",
        "Liderei a implementação e configuração do NovoSGA, sistema open source de gerenciamento de atendimentos, em uma unidade de saúde, garantindo operação plena desde a inauguração e aprimorando a eficiência na emissão de senhas e organização das filas de atendimento.",
        "Criei um robô RPA em Python para validar cadastros de novos pacientes via API externa, habilitando o processo de login e definindo níveis de acesso automaticamente em larga escala.",
        "Projetei, documentei e implementei uma aplicação web monolítica para criação de formulários online a partir de planilhas Excel, utilizando Flask, Jinja e Bootstrap, substituindo o processo manual em papel por coleta digital estruturada de dados em secretarias públicas.",
      ],
    },
  ],
};

const formationSection = {
  title: "Formação acadêmica",
  entries: [
    {
      title: "Pós-Graduação Lato Senso em Desenvolvimento Web",
      organization: "Instituto Federal da Bahia (IFBA)",
      startDate: "Mar. de 2026",
      endDate: "Presente",
      bullets: [
        "Algoritmos, Estrutura de Dados, Engenharia de Software e Análise de Sistemas.",
        "Qualidade de Software, UX/UI, Desenvolvimento Web e Desenvolvimento Mobile.",
        "Banco de Dados, Sistemas Distribuídos e Inteligência Artificial.",
        "Scrum, Kanban e Business Intelligence.",
        "Governança de TI, Segurança da Informação e Administração de Redes.",
      ],
    },
    {
      title: "Bacharelado em Sistemas de Informação",
      organization: "Instituto Federal da Bahia (IFBA)",
      startDate: "Mar. de 2021",
      endDate: "Nov. de 2025",
    },
  ],
};

const projectSection = {
  title: "Projetos",
  entries: [
    {
      title: "OrdersApp",
      startDate: "Jan. de 2026",
      endDate: "Fev. de 2026",
      bullets: [
        "Aplicação full stack voltada à gestão de pedidos de produtos em diferentes segmentos.",
        "A solução centraliza o registro de itens com marca, modelo e ano, permitindo requisições tanto via API, desenvolvida em .NET, quanto por interface web construída em Angular.",
        "Sua arquitetura em camadas organiza as responsabilidades de forma clara, adotando Component-Based Architecture no frontend, alinhada ao MVVM, e um backend próximo ao MVC com Service Layer, com operações críticas otimizadas por meio de triggers e stored procedures implementadas diretamente no banco de dados.",
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
        "Plataforma focada na criação e compartilhamento de currículos, feita sob medida para desenvolvedores.",
        "O projeto resolve a falta de objetividade em portfólios, permitindo gerir trajetórias acadêmicas e profissionais via API.",
        "O destaque é a visibilidade do perfil: uma página web exclusiva com URL curta e elegante (resuming.dev), ideal para divulgação.",
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
        "Meu primeiro projeto prático em tecnologia, no qual implantei um servidor privado a partir de uma versão modificada do AdventureQuest Worlds, marcando meu contato inicial com código-fonte e customização de aplicações — desenvolvido aos 10 anos de idade.",
        "Adaptei a base existente com inclusão de novos itens e ajustes na interface principal, explorando na prática manipulação de assets, estrutura web e organização de arquivos.",
        "Executei o deploy localmente, viabilizando o acesso externo via VPN (LogMeIn Hamachi), o que me introduziu a noções de rede, distribuição e disponibilidade.",
      ],
      reference: {
        label: "Acessar vídeo (YouTube)",
        url: "https://youtu.be/htxKAjm1iLc",
      },
    },
  ],
};
