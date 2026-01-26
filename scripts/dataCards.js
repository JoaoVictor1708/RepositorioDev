const myProjectsContainerArray = [
    {
        cardId: "0",
        title: "Organizador de Despesas",
        images: [
            { url: ".//src/imgs/projectsImgs/reembolsoRequisition.png", alt: 'Imagem do site organizador de despesas' }
        ],
        description: "Feito para te ajudar no controle de suas despesas",
        technologies: ["Html","Css","JavaScript"]
    },
    {
        cardId: "1",
        title: "Conversor de moedas",
        images: [
            { url: ".//src/imgs/projectsImgs/convertCoin.png", alt: 'Imagem do site conversor de moedas' }
        ],
        description: "Te auxilia na conversão direta de moedas de diferentes valores",
        technologies: ["Html","Css","JavaScript"]
    },
    {
        cardId: "2",
        title: "Foto Blog",
        images: [
            { url: ".//src/imgs/projectsImgs/photoBlog.png", alt: 'Imagem do site de blog de fotos' }
        ],
        description: "Modelo de blog para expor suas fotos",
        technologies: ["Html","Css"]
    },
    {
        cardId: "3",
        title: "MetaGaming AI",
        images: [
            { url: ".//src/imgs/projectsImgs/metaGamingAI.png", alt: 'Imagem do site sobre dicas de IA em jogos' }
        ],
        description: "Ferramenta que irá te auxiliar no seu jogo favorito",
        technologies: ["Html","Css","JavaScript"]
    },
    {
        cardId: "4",
        title: "DevLinks",
        images: [
            { url: ".//src/imgs/projectsImgs/devLinks.png", alt: 'Imagem do site que conecta links de um desenvolvedor' }
        ],
        description: "Um site que conecta todos os links do seu perfil profissional",
        technologies: ["Html","Css", "JavaScript"]
    },
    {
        cardId: "5",
        title: "Página de Receitas",
        images: [
            { url: ".//src/imgs/projectsImgs/recipesPage.png", alt: 'Um site expositor de receitas' }
        ],
        description: "Site feito para você expor e visualizar outras receitas",
        technologies: ["Html","Css"]
    },
    {
        cardId: "6",
        title: "CypherX",
        images: [
            { url: ".//src/imgs/projectsImgs/cypherX.png", alt: 'Imagem do site da empresa CypherX' }
        ],
        description: "A apresentação dos serviços de uma empresa com foco em CyberSegurança",
        technologies: ["Html","Css","JavaScript"]
    }
]

const technicalProjects = [
    {
        cardId: "0",
        title: "CypherX",
        images: [
            { url: ".//src/imgs/projectsImgs/cypherX.png", alt: "Imagem do site da empresa CypherX" },
            { url: ".//src/imgs/projectsImgs/cypherX.png", alt: "Imagem do site da empresa CypherX" },
            { url: ".//src/imgs/projectsImgs/reembolsoRequisition.png", alt: 'Imagem do site organizador de despesas' }
            ,{ url: ".//src/imgs/projectsImgs/cypherX.png", alt: "Imagem do site da empresa CypherX" },
        ],
        description: "Atuei como líder do projeto de criação de uma empresa com o tema 'Tecnologia' que seguimos com serviços com foco principalmente em cybersegurança, mas, também abordando desde a área logística e de marketing até a operacional e gestão interna e externa da empresa",
        technologies: ["Excel", "Word", "Canva", "Html", "Css", "JavaScript"]
    }
]

const formations = [
    {
        formationId: "0",
        instituitionName: "Armando Sestini",
        course: "Ensino Técnico em Administração",
        workLoad: "",
        period: "01/2025 à 12/2026",
        capacitations: [
            "Administração",
            "Recursos Humanos",
            "Logística",
            "Gestão de negócios",
            "Excel",
            "Word",
            "Canva"],
        description: "Curso Técnico em administração abrangendo desde conteúdos teóricos até projetos práticos de administração real e vivências no dia a dia de uma empresa",
        certificateLink: "",
    },
    {
        formationId: "1",
        instituitionName: "RocketSeat",
        course: "FullStack",
        workLoad: "",
        period: "06/2025 à 03/2026",
        capacitations: ["Html", "Css", "JavaScript", "React", "NodeJS", "TypeScript", "API Rest", "Figma", "Git&GitHub"],
        description: `Formação completa em Desenvolvimento Web, abrangendo Front-End e Back-End, com foco na criação de aplicações práticas para o mercado de trabalho.`,
        certificateLink: "",
    },
    {
        formationId: "2",
        instituitionName: "Prime Cursos",
        course: "Informática Avançada",
        workLoad: "",
        period: "2023",
        capacitations: ["Pacote Office-Avançado", "Conhecimento de informática"],
        description: "Capacitação no uso eficiente das principais ferramentas de informática, incluindo o Pacote Office e noções de internet, segurança de dados e produtividade digital.",
        certificateLink: ""
    },
    {
        formationId: "3",
        instituitionName: "Fundação Bradesco",
        course: "Excel Avançado",
        workLoad: "",
        period: "",
        capacitations: ["Excel-Avançado"],
        description: "Certificação que explora o excel do nível básico ao avançado",
        certificateLink:"",
    },
    {
        formationId: "4",
        instituitionName: "EducationFirst & Wizard",
        course: "Inglês Intermediário",
        workLoad: "",
        period: "06/2024 à 11/2024",
        capacitations: ["Inglês-Intermediário"],
        description: "Formação de Inglês intermediário B1/B2",
        certificateLink: ""
    }
]
export {myProjectsContainerArray, technicalProjects, formations}