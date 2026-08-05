import { ExperienceData } from './types'

export const experienceData: ExperienceData[] = [
    {
        title: 'Software Engineering Intern',
        company: 'PageTok',
        location: 'Sunnyvale, CA',
        dates: 'June 2026 - Present',
        description:
            'Optimized infrastructure for an LLM-powered coding agent integrating TypeScript, Electron, Firebase, cloud language-model APIs, and local tools for file editing, browser automation, and command execution. Cut median agent latency by 31% (5.5s → 3.8s) and Firebase reads by 42% by caching repeated data and running independent requests in parallel, and added performance logging plus a 75-task regression suite to validate editing and agent behavior.',
        logoSrc: '/pagetok.png',
    },
    {
        title: 'Data Science Intern',
        company: 'Boom Industrial',
        location: 'Los Angeles, CA',
        dates: 'January 2026 - June 2026',
        description:
            'Built automated Python, SQL, and Snowflake ETL pipelines over 520K+ ERP records, reducing recurring reporting time by 65%, from 10 to 3.5 hours per week. Developed reproducible feature-engineering and model-evaluation pipelines for sales forecasting, improving RMSE by ~28% using regression and XGBoost, and created data-validation workflows for revenue, inventory, and conversion metrics used by 15+ stakeholders.',
        logoSrc: '/BI.png',
    },
    {
        title: 'Data Science Intern (Research Assistant)',
        company: 'AIVC',
        location: 'Los Angeles, CA',
        dates: 'September 2025 - January 2026',
        description:
            'Designed large-scale evaluation pipelines across 4,000+ parallel simulations, analyzing model failure modes to inform optimization of a robotics system included in a CVPR demo.',
        logoSrc: '/ucla.png',
    },
    {
        title: 'Data Analyst Intern',
        company: 'HMDA Team',
        location: 'Los Angeles, CA',
        dates: 'September 2023 - January 2026',
        description:
            'Analyzed 1M+ national mortgage records across 125+ institutions, identifying structural lending disparities and capacity gaps that informed published executive briefs contributing to national policy discussions.',
        logoSrc: '/ucla.png',
    },
    {
        title: 'Data Researcher, Data Analyst',
        company: 'DataRes',
        location: 'Los Angeles, CA',
        dates: 'May 2023 - January 2026',
        description:
            'Designed and deployed a retrieval-augmented LLM recommendation pipeline, incorporating user feedback loops to iteratively improve relevance and decision support for UCLA students.',
        logoSrc: '/datares.png',
    },
    {
        title: 'Data Science Intern',
        company: 'ESSIC',
        location: 'College Park, MD',
        dates: 'June 2025 - August 2025',
        description:
            'Built large-scale data pipelines on 1M+ multi-decade climate records, improving model performance and translating results into decision-ready KPIs for research planning.',
        logoSrc: '/umd.png',
    },
    {
        title: 'Lead Data Consultant, Report Lead',
        company: 'Bruin Sports Analytics',
        location: 'Los Angeles, CA',
        dates: 'January 2024 - April 2024',
        description:
            'Led regression-based KPI analysis and segmentation modeling under 72-hour deadlines, delivering dashboards that directly influenced player strategy and measurable win probability improvements.',
        logoSrc: '/BSA.png',
    },
]
