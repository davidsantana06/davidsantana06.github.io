const isOdd = (index) => index % 2 == 1;

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
  title: "Principais experiências",
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
  title: "Últimos projetos",
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
    },
    {
      title: "AI Evaluation",
      startDate: "Jun. de 2025",
      endDate: "Set. de 2025",
      bullets: [
        "Aplicação web que coloca frente a frente imagens geradas por diferentes modelos de inteligência artificial a partir de um único prompt.",
        "O sistema soluciona a dificuldade de comparar a qualidade entre modelos, centralizando os resultados em uma interface de votação intuitiva.",
        "O diferencial é o duelo de perspectivas: o ChatGPT realiza uma avaliação técnica prévia das imagens e, logo depois, você dá o seu veredito, confrontando a opinião da máquina com a sua percepção humana.",
      ],
    },
  ],
};

const innerSections = [experienceSection, formationSection, projectSection];
