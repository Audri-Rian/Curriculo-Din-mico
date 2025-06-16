const config = {
  perfil: {
    nome: "Audri Rian",
    email: "audri.rian@gmail.com",
    telefone: "(87) 99600-0000",
    descricao: "Desenvolvedor com experiência Full Stack, agora focado em Front-End. Experiência em desenvolvimento web com React e Vue.js, e conhecimentos em NextJS e Flutter. Fundador da Trinext, empresa focada em soluções tecnológicas inovadoras. Comprometido com boas práticas de programação, otimização de desempenho, experiência do usuário e metodologias ágeis.",
    linkedin: "https://linkedin.com/in/audri-rian",
    github: "https://github.com/audri-rian",
    portfolio: "https://audri-rian.dev",
    idiomas: [
      { nome: "Português", nivel: "Nativo" },
      { nome: "Inglês", nivel: "Intermediário" },
    ],
    skills: {
      "Linguagens de Programação": ["PHP", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
      "Frameworks & Bibliotecas": ["Laravel", "React", "Vue.js", "JavaFX", "Bootstrap", "Next.js", "Flutter"],
      "Banco de Dados": ["MySQL", "PostgreSQL", "MongoDB"],
      "Ferramentas & DevOps": ["Git", "Docker", "Linux", "Figma", "Scene Builder"],
      "Metodologias": ["Clean Code", "SOLID", "TDD", "Scrum", "Git Flow", "Kanban", "CI/CD"]
    }
  },

  skills: {
    "Linguagens de Programação": [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "Ruby",
      "Go",
      "Rust",
      "Swift",
      "Kotlin",
      "Dart",
      "Perl",
      "C",
      "C++",
    ],
    Frameworks: [
      "Laravel",
      "Symfony",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "Svelte",
      "NestJS",
      "Express.js",
      "Django",
      "Flask",
      "Spring Boot",
      "Ruby on Rails",
      "ASP.NET Core",
      "Flutter",
      "Ionic",
      "Electron",
    ],
    "Banco de Dados": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "MariaDB",
      "Firebase",
      "Cassandra",
      "Redis",
      "DynamoDB",
      "Neo4j",
      "Elasticsearch",
      "Oracle DB",
      "IBM Db2",
    ],
    Ferramentas: [
      "Git",
      "GitHub Actions",
      "Bitbucket",
      "GitLab CI",
      "Docker",
      "Kubernetes",
      "Vagrant",
      "Jenkins",
      "Terraform",
      "Webpack",
      "Babel",
      "ESLint",
      "Prettier",
      "Figma",
      "Postman",
      "Insomnia",
      "Zabbix",
      "Prometheus",
      "Grafana",
      "New Relic",
    ],
    "Plataformas e Cloud": [
      "AWS",
      "Azure",
      "Google Cloud",
      "Heroku",
      "DigitalOcean",
      "Netlify",
      "Vercel",
      "Railway",
      "Render",
    ],
    Metodologias: [
      "Scrum",
      "Kanban",
      "XP (Extreme Programming)",
      "Lean",
      "Waterfall",
      "TDD",
      "BDD",
      "CI/CD",
      "DevOps",
      "DDD",
      "Clean Architecture",
      "SOLID",
      "KISS",
      "DRY",
      "YAGNI",
    ],
    "Testes e Qualidade": [
      "Jest",
      "Mocha",
      "Chai",
      "PHPUnit",
      "PyTest",
      "Cypress",
      "Selenium",
      "TestCafe",
      "Vitest",
      "Playwright",
    ],
    "APIs e Integrações": [
      "REST",
      "GraphQL",
      "gRPC",
      "WebSockets",
      "OpenAPI",
      "Stripe API",
      "Paypal API",
      "OAuth 2.0",
      "JWT",
      "Firebase Auth",
    ],
    Mobile: [
      "React Native",
      "Flutter",
      "SwiftUI",
      "Kotlin Multiplatform Mobile",
      "Xamarin",
      "Capacitor",
      "Cordova",
    ],
  },

  experiencia: [
    {
      empresa: "Trinext",
      cargo: "Fundador & Desenvolvedor Full Stack",
      inicio: "06/2025",
      fim: "Presente",
      inicioISO: "2025-06-01",
      fimISO: null,
      responsabilidades: [
        "Fundação e gestão de uma empresa de tecnologia focada em soluções inovadoras",
        "Desenvolvimento front-end de sistemas web utilizando React, com foco em boas práticas e experiência do usuário",
        "Otimização de desempenho de interfaces e aplicação de testes",
        "Colaboração com equipes multidisciplinares seguindo metodologias ágeis",
        "Pesquisa e aplicação de novas tecnologias para melhorias contínuas",
        "Definição de estratégias tecnológicas e de negócios"
      ],
      tecnologias: ["Laravel", "React", "MySQL", "Docker", "Git", "AWS"]
    },
    {
      empresa: "PlanetaNet",
      cargo: "Desenvolvedor Full Stack Júnior",
      inicio: "02/2025",
      fim: "06/2025",
      inicioISO: "2025-02-01",
      fimISO: "2025-06-01",
      responsabilidades: [
        "Desenvolvimento de aplicações web com foco em front-end utilizando React",
        "Implementação de interfaces responsivas e interativas, garantindo uma ótima experiência do usuário",
        "Integração com APIs e serviços externos em colaboração com a equipe de back-end",
        "Colaboração em projetos de equipe seguindo metodologias ágeis (Scrum)",
        "Manutenção e otimização de sistemas existentes, incluindo testes e depuração"
      ],
      tecnologias: ["Laravel", "React", "MySQL", "Git", "Bootstrap"]
    }
  ],

  educacao: [
    {
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Autarquia de Ensino Superior de Arcoverde - AESA",
      inicio: "01/2024",
      fim: "06/2026",
      inicioISO: "2024-01-01",
      fimISO: "2026-06-30",
      detalhes: [
        "Graduação em Tecnologia",
        "Foco em Desenvolvimento de Software e Sistemas",
        "Participação em projetos de extensão universitária",
        "Desenvolvimento de projetos práticos em equipe"
      ]
    }
  ],

  projetos: [
    {
      nome: "Sistema ERP Universitário",
      status: "Em Desenvolvimento",
      descricao: "Sistema ERP customizado para gestão financeira e controle de estoque, desenvolvido como projeto de extensão universitária.",
      detalhes: [
        "Liderança no desenvolvimento de um Sistema ERP customizado",
        "Implementação de módulos para contas a pagar/receber",
        "Controle de estoque e fluxo de caixa",
        "Relatórios gerenciais personalizados",
        "Arquitetura modular e escalável",
        "Desenvolvimento de interface de usuário responsiva com Vue.js"
      ],
      tecnologias: ["Laravel", "Vue.js", "MySQL", "PHP", "Git"]
    },
    {
      nome: "Money Wisdom",
      status: "Em Desenvolvimento",
      descricao: "Software desktop para gestão financeira desenvolvido em Java, focado em auxiliar empresas na tomada de decisões financeiras.",
      detalhes: [
        "Desenvolvimento de software desktop para gestão financeira",
        "Implementação de cálculos de ponto de equilíbrio",
        "Gestão de custos fixos e variáveis",
        "Controle de funcionários e folha de pagamento",
        "Interface gráfica moderna e intuitiva"
      ],
      tecnologias: ["Java", "JavaFX", "MySQL", "Scene Builder", "Figma"]
    },
    {
      nome: "Lavtuor",
      status: "Concluído",
      descricao: "Plataforma web para gestão de serviços de limpeza, desenvolvida com Laravel e Blade.",
      detalhes: [
        "Desenvolvimento front-end do sistema de gestão com foco em usabilidade",
        "Implementação de templates Blade reutilizáveis",
        "Integração com sistemas de pagamento",
        "Dashboard administrativo personalizado",
        "Sistema de agendamento de serviços"
      ],
      tecnologias: ["Laravel", "Blade", "PHP", "MySQL", "Git", "Bootstrap"]
    }
  ],
};

export default config;