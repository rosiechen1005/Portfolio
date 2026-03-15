import {
    PythonBadge,
    XGBoostBadge,
    RBadge,
    SQLBadge,
    D3Badge,
    PyTorchBadge,
    MachineLearningBadge,
    HPCBadge,
    LLMBadge,
    RAGBadge,
    VectorSearchBadge,
    DataVisualizationBadge,
    GPUComputingBadge,
    OptimizationBadge,
    RandomForestBadge,
    StatisticalModelingBadge,
    NetworkAnalysisBadge,
    InteractiveWebBadge,
    StatisticalAnalysisBadge,
    FinancialAnalyticsBadge,
    ReinforcementLearningBadge,
    SimulationBadge,
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

const projectDataRaw: ProjectT[] = [
    {
        name: 'AgriCast-ML',
        id: 'agricast-ml',
        type: 'End-to-End Climate Yield Modeling Pipeline',
        tagline: 'Cluster-aware corn yield forecasting using 50+ years of climate data.',
        tags: [<PythonBadge />, <MachineLearningBadge />, <XGBoostBadge />, <HPCBadge />],
        imageSrc: '/agricast-ml.png',
        description:
            'End-to-end ML pipeline integrating 50+ years of USDA and meteorological data (1M+ records) with climate regime clustering and residual-stacked ensembles, achieving R² improvement from 0.30 → 0.76.',
        links: [
            {
                link: 'https://github.com/rosiechen1005/AgriCast-ML',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/rosiechen1005/AgriCast-ML',
    },
    {
        name: 'Bank Lending Portfolio Analysis (UCLA Policy Brief)',
        id: 'hmda',
        type: 'Policy Brief',
        tagline: 'Quantitative analysis of 125+ regional banks using federal call report data.',
        tags: [<RBadge />, <SQLBadge />, <StatisticalAnalysisBadge />, <FinancialAnalyticsBadge />],
        imageSrc: '/hmda.png',
        description:

        'Co-authored UCLA policy research analyzing lending allocation and credit line utilization across 125+ FHLBSF member institutions using 2023 NCUA and FFIEC call report data. Produced statistical findings informing regional housing finance policy recommendations.',
        links: [
            {
                link: 'https://escholarship.org/uc/item/4135s7h1',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://escholarship.org/uc/item/4135s7h1',
    },
    {
        name: 'BruinPlanner',

        id: 'bruinplanner',
        type: 'LLM + Retrieval System',
        tagline: 'Semantic course recommendation using embeddings + vector search',

        tags: [<PythonBadge />, <LLMBadge />, <RAGBadge />, <VectorSearchBadge />],
        imageSrc: '/bruin-planner.png',
        description:
            'Designed a retrieval-augmented generation (RAG) system for personalized UCLA course planning. Built a semantic search pipeline using transformer embeddings + Pinecone vector search, followed by LLM synthesis for structured recommendations. Implemented constraint-aware filtering and evaluated retrieval performance against keyword baselines.',
        links: [
            {
                link: 'https://github.com/rosiechen1005/RAG-BruinPlanner',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/rosiechen1005/RAG-BruinPlanner',
    },
    {
        name: 'Computational String Art',
        id: 'computational-string-art',
        type: 'ML/Optimization',
        tagline:
            'Optimization framework for generating multicolor 2D/3D string art from images and meshes',
        tags: [<PythonBadge />, <PyTorchBadge />, <GPUComputingBadge />, <OptimizationBadge />],
        imageSrc: '/deer_multicolor.png',
        description:
            'Built a GPU-accelerated optimization pipeline that reconstructs images and 3D shapes using simulated thread connections between pins. Implemented greedy and gradient-based algorithms in Python/PyTorch to select optimal string paths, achieving fast reconstruction with RMSE-based evaluation. The system supports multi-colour layering, mesh targets, and interactive visualization.',
        links: [
            {
                link: 'https://github.com/rosiechen1005/computational-string-art',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/rosiechen1005/computational-string-art',
    },
    {
        name: 'Performance Analytics (UCLA Division I Tennis)',
        id: 'tennis-performance-analytics',
        type: 'Data Analytics',
        tagline: 'Analyse and visualise tennis player performance',
        tags: [<PythonBadge />, <D3Badge />, <DataVisualizationBadge />],
        imageSrc: '/tennis-performance-analytics.png',
        description:
            'Built an interactive analytics platform for UCLA Division I tennis match data. Designed shot-level and point-level datasets to capture rally dynamics and serve outcomes, then created D3.js visualizations for shot placement, return contact zones, serve error heatmaps, and winner distributions. The system reveals tactical patterns in serve strategy, rally construction, and error tendencies to support data-driven coaching decisions.',
        links: [
            {
                link: 'https://github.com/rosiechen1005/ucla-d1-tennis-performance-analytics',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/rosiechen1005/ucla-d1-tennis-performance-analytics',
    },
    {
        name: 'Obesity Risk Prediction',
        id: 'obesity-risk-prediction',
        type: 'ML Classification',
        tagline:
            'Machine learning model for predicting obesity status from messy demographic and lifestyle data',
        tags: [<RBadge />, <MachineLearningBadge />, <RandomForestBadge />, <StatisticalModelingBadge />],
        imageSrc: '/obesity-risk-prediction.png',
        description:
            'Built a machine learning pipeline to classify obesity status using a dataset of 32k individuals and 29 demographic, lifestyle, and health predictors. Performed exploratory analysis, handled missing values with MICE imputation, and compared multiple models including KNN, logistic regression, LDA/QDA, splines, decision trees, and random forests. The final tuned random forest model (200 trees, 7 predictors per split) achieved 98.3% testing accuracy.',
        links: [
            {
                link: 'https://github.com/rosiechen1005/obesity-risk-prediction',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/rosiechen1005/obesity-risk-prediction',
    },
    {
        name: 'Digital Life & Mental Health',
        id: 'dh101-project',
        type: 'Interactive Website',
        tagline:
            'Analyzing how social networks influence college students’ mental health',
        tags: [<PythonBadge />, <NetworkAnalysisBadge />, <DataVisualizationBadge />, <InteractiveWebBadge />],
        imageSrc: '/dh101-project.png',
        description:
            'Developed an interactive digital humanities website analyzing the relationship between social networks and mental health among college students. Documented data provenance, bias, and missingness; designed a data processing workflow for constructing network relationships; and built interactive visualizations to communicate findings and ethical considerations.',
        links: [
            {
                link: 'https://iamchrisescobar.github.io/digital_life_mental_health/#/',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://iamchrisescobar.github.io/digital_life_mental_health/#/',
    },

    {
        name: 'Agar.io RL Agents',
        id: 'agario-rl-environment',
        type: 'Reinforcement Learning',
        tagline:
            'Training autonomous agents in a custom Agar.io simulation using PPO and OpenAI Gym',
        tags: [<PythonBadge />, <ReinforcementLearningBadge />, <PyTorchBadge />, <SimulationBadge />],
        imageSrc: '/agario.png',
        description:
            'Implemented a reinforcement learning environment for the Agar.io game using a custom C++ simulation with Python bindings and an OpenAI Gym interface. The environment represents the game state as multi-channel spatial grids capturing pellets, viruses, and agent cells. Trained agents using Proximal Policy Optimization (PPO) with actor–critic networks in PyTorch to learn survival strategies and growth behaviors through interaction with the environment. Supports configurable arenas, multi-agent gameplay, and discrete or continuous action spaces for experimentation with RL algorithms.',
        links: [
            {
                link: 'https://github.com/rosiechen1005/agaRL.io',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/rosiechen1005/agaRL.io',
    },
]

// Recruiter-optimized order: AgriCast, Bank Lending, BruinPlanner, Computational String Art, Performance Analytics, Obesity, Agar.io RL, Digital Life
export const projectData: ProjectT[] = [
    ...projectDataRaw.slice(0, 6),
    projectDataRaw[7],
    projectDataRaw[6],
]
    // {
    //     name: 'Linky',
    //     id: 'linky',
    //     type: 'Web app',
    //     tagline: 'A modern, lightweight link shortener',
    //     tags: [
    //         <ReactBadge />,
    //         <TypescriptBadge />,
    //         <NodeBadge />,
    //         <MongoBadge />,
    //     ],
    //     imageSrc: '/linky.png',
    //     description:
    //         'A lightweight and simple to use link shortener web app with a NodeJS REST API and a frontend built with ChakraUI. Features additional functions like QR codes and alternative URL formats.',
    //     links: [
    //         {
    //             link: 'https://github.com/rosiechen/linky',
    //             icon: <FiGithub />,
    //         },
    //         {
    //             link: 'https://lnky.to',
    //             icon: <FiLink />,
    //         },
    //     ],
    //     headerLink: 'https://lnky.to',
    // },
    // {
    //     name: 'Blogging Application',
    //     id: 'blogging-app',
    //     type: 'Web app',
    //     tagline:
    //         'Java blogging application built using CLEAN architecture and SOLID principles',
    //     tags: [<JavaBadge />],
    //     imageSrc: '/blogging-app.jpg',
    //     description:
    //         'Our group project for CSC207 - a blogging website where users can post text content and follow other accounts. Designed and built according to CLEAN architecture and SOLID principles.',
    //     links: [
    //         {
    //             link: 'https://github.com/rosiechen/csc207-blogging-app',
    //             icon: <FiGithub />,
    //         },
    //     ],
    //     headerLink: 'https://github.com/rosiechen/csc207-blogging-app',
    // },
//     {
//         name: 'Breakout in MIPS',
//         id: 'breakout-asm',
//         type: 'Game',
//         tagline: 'Atari Breakout implemented in MIPS Assembly for CSC258',
//         tags: [<AssemblyBadge />],
//         imageSrc: '/breakout-asm.png',
//         description:
//             'Using MIPS Assembly to implement an Atari Breakout clone with features such as game controls, multiple lives, displaying score, and more.',
//         links: [
//             {
//                 link: 'https://github.com/rosiechen/csc258-project',
//                 icon: <FiGithub />,
//             },
//         ],
//         headerLink: 'https://github.com/rosiechen/csc258-project',
//     },
// ]
