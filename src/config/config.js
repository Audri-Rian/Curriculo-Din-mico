const config = {
    // Perfil permanece inalterado.
    perfil: {
        nome: "Audri Rian",
        email: "audririan1@gmail.com",
        telefone: "+55 75 99294-4283",
        linkedin: "https://linkedin.com/in/audri-rian-720068215",
        github: "https://github.com/Audri-Rian",
        portfolio: "https://audririan.dev",
        cidade: "Sertânia",
        estado: "Pernambuco",
        cargo: "Desenvolvedor Full Stack",
        idiomas: ["Português", "Inglês"],
        descricao: "Desenvolvedor Full Stack com experiência em desenvolvimento web, focado em criar soluções eficientes e escaláveis. Apaixonado por tecnologia e sempre em busca de novos desafios e aprendizados."
    },

    // Adicionadas várias novas skills para estressar o sistema.
    skills: {
        "Linguagens de Programação": [
            "PHP", "JavaScript", "TypeScript", "Python", "Java", "C#", "Ruby", "Go", "Rust", "Swift", "Kotlin", "Dart", "Perl", "C", "C++"
        ],
        "Frameworks": [
            "Laravel", "Symfony", "React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Svelte", "NestJS", "Express.js",
            "Django", "Flask", "Spring Boot", "Ruby on Rails", "ASP.NET Core", "Flutter", "Ionic", "Electron"
        ],
        "Banco de Dados": [
            "MySQL", "PostgreSQL", "MongoDB", "SQLite", "MariaDB", "Firebase", "Cassandra", "Redis", "DynamoDB", "Neo4j",
            "Elasticsearch", "Oracle DB", "IBM Db2"
        ],
        "Ferramentas": [
            "Git", "GitHub Actions", "Bitbucket", "GitLab CI", "Docker", "Kubernetes", "Vagrant", "Jenkins", "Terraform",
            "Webpack", "Babel", "ESLint", "Prettier", "Figma", "Postman", "Insomnia", "Zabbix", "Prometheus", "Grafana", "New Relic"
        ],
        "Plataformas e Cloud": [
            "AWS", "Azure", "Google Cloud", "Heroku", "DigitalOcean", "Netlify", "Vercel", "Railway", "Render"
        ],
        "Metodologias": [
            "Scrum", "Kanban", "XP (Extreme Programming)", "Lean", "Waterfall", "TDD", "BDD", "CI/CD", "DevOps", "DDD",
            "Clean Architecture", "SOLID", "KISS", "DRY", "YAGNI"
        ],
        "Testes e Qualidade": [
            "Jest", "Mocha", "Chai", "PHPUnit", "PyTest", "Cypress", "Selenium", "TestCafe", "Vitest", "Playwright"
        ],
        "APIs e Integrações": [
            "REST", "GraphQL", "gRPC", "WebSockets", "OpenAPI", "Stripe API", "Paypal API", "OAuth 2.0", "JWT", "Firebase Auth"
        ],
        "Mobile": [
            "React Native", "Flutter", "SwiftUI", "Kotlin Multiplatform Mobile", "Xamarin", "Capacitor", "Cordova"
        ]
    },

    // Experiências inalteradas.
    experiencia: [
        {
            empresa: "Empresa Exemplo S.A.",
            cargo: "Desenvolvedor Full Stack",
            periodo: "2022-05 – Presente",
            inicioISO: "2022-05-01",
            fimISO: null,
            responsabilidades: [
                "Desenvolvimento de aplicações web utilizando Laravel e React",
                "Implementação de APIs RESTful para integração com sistemas externos",
                "Otimização de performance e escalabilidade de aplicações",
                "Mentoria de desenvolvedores júnior"
            ]
        },
        {
            empresa: "Startup Tech",
            cargo: "Desenvolvedor Backend",
            periodo: "2021-01 – 2022-04",
            inicioISO: "2021-01-01",
            fimISO: "2022-04-30",
            responsabilidades: [
                "Desenvolvimento de microserviços em PHP/Laravel",
                "Implementação de testes automatizados",
                "Integração com serviços de terceiros via APIs"
            ]
        }
    ],

    // Educação inalterada.
    educacao: [
        {
            curso: "Bacharel em Ciência da Computação",
            instituicao: "Universidade Federal de Pernambuco",
            periodo: "2018-01 – 2021-12",
            inicioISO: "2018-01-01",
            fimISO: "2021-12-31"
        },
        {
            curso: "Técnico em Informática",
            instituicao: "Escola Técnica Estadual",
            periodo: "2015-01 – 2017-12",
            inicioISO: "2015-01-01",
            fimISO: "2017-12-31"
        }
    ],

    // Projetos inalterados.
    projetos: [
        {
            nome: "Sistema de Gestão Empresarial",
            data: "2023-03",
            dataISO: "2023-03-01",
            descricao: "Desenvolvimento de um sistema completo de gestão utilizando Laravel e Vue.js, incluindo módulos de vendas, estoque e financeiro."
        },
        {
            nome: "API de Integração de Pagamentos",
            data: "2022-08",
            dataISO: "2022-08-01",
            descricao: "Criação de uma API RESTful para integração com múltiplos gateways de pagamento, utilizando Laravel e implementando padrões de segurança."
        }
    ],

    // MUITAS certificações adicionadas para teste:
    certificacoes: [
        { nome: "AWS Certified Developer Associate", data: "2023-12", dataISO: "2023-12-01" },
        { nome: "Laravel Certified Developer", data: "2023-06", dataISO: "2023-06-01" },
        { nome: "Scrum Master Professional", data: "2022-09", dataISO: "2022-09-01" },
        { nome: "Google Associate Cloud Engineer", data: "2023-03", dataISO: "2023-03-01" },
        { nome: "Microsoft Certified: Azure Fundamentals", data: "2022-11", dataISO: "2022-11-01" },
        { nome: "Kubernetes Certified Application Developer", data: "2024-01", dataISO: "2024-01-01" },
        { nome: "Oracle Java SE 11 Developer", data: "2022-06", dataISO: "2022-06-01" },
        { nome: "GitLab Certified CI/CD Specialist", data: "2023-08", dataISO: "2023-08-01" },
        { nome: "MongoDB Certified Developer Associate", data: "2023-05", dataISO: "2023-05-01" },
        { nome: "Flutter & Dart - The Complete Guide", data: "2024-04", dataISO: "2024-04-01" },
        { nome: "React Advanced Patterns", data: "2023-07", dataISO: "2023-07-01" },
        { nome: "Clean Architecture com PHP", data: "2024-05", dataISO: "2024-05-01" },
        { nome: "Python for Data Science & Machine Learning", data: "2023-10", dataISO: "2023-10-01" },
        { nome: "Elastic Certified Engineer", data: "2022-10", dataISO: "2022-10-01" }
    ]
};

export default config;
