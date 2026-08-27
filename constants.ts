
import { ImpactStory, ArchitectureDiagram, Certification, TimelineEvent, EducationItem, CompetencyCategory } from './types';

export const APP_VERSION = "1.2.20260827";

export const PROFILE = {
  name: "Sanjeev Kumar",
  title: "Manager / Specialist Cloud & DevOps",
  subtitle: "Infrastructure & Cloud Architect",
  experienceYears: "19+",
  location: "Gurugram, India",
  phone: "+91 999-905-2147",
  email: "sanjeev123kumar@hotmail.com",
  linkedIn: "https://linkedin.com/in/andigwandi",
  gitHub: "https://github.com/andigwandi",
  summary: "Result-driven Infrastructure and Cloud Specialist with over 19 years of professional expertise steering DevOps architecture, large-scale cloud migrations, and automation strategies. Proven track record leading infrastructure teams and architecting high-volume, enterprise-grade cloud systems. Microsoft Certified expert adept at designing highly resilient Azure ecosystems, automated CI/CD frameworks, and robust business continuity structures that dramatically accelerate deployment timelines and reduce MTTR."
};

export const CORE_COMPETENCIES: CompetencyCategory[] = [
  {
    category: "Cloud & Orchestration",
    skills: ["Azure", "Azure Kubernetes Service (AKS)", "Docker", "Bicep", "Terraform", "Ansible"]
  },
  {
    category: "CI/CD & Automation",
    skills: ["Azure DevOps", "GitLab", "Jenkins", "YAML", "Pipelines as Code"]
  },
  {
    category: "Data & Vector Platforms",
    skills: ["Milvus Vector DB", "Azure Synapse", "Data Factory", "Cosmos DB", "Redis"]
  },
  {
    category: "Scripting & Development",
    skills: ["PowerShell", "Bash", "Python", "C#", ".NET Core", "Next.js", "Node.js", "GoLang"]
  },
  {
    category: "Frameworks & Security",
    skills: ["Secure Private Networking", "BCDR", "PCI Compliance", "Azure Chaos Studio"]
  }
];

export const CAREER_TIMELINE: TimelineEvent[] = [
  {
    year: 'Late 2026 – Present',
    role: 'Manager / Specialist Cloud and DevOps',
    company: 'Publicis Sapient',
    location: 'Gurugram, India',
    projectName: 'Project: Slingshot',
    description: 'Leading the Client Services infrastructure team and orchestrating multi-tenant multi-cloud deployment strategies.',
    highlights: [
      'Technical Leadership & Client Delivery: Primary technical liaison aligning deployment schedules and release milestones with client and internal project teams.',
      'Multi-Tenant Deployment Strategy: Managed complex installations and rolling upgrades of Slingshot across Publicis Sapient (PS) and Client Services (CS) hosted multi-cloud environments.',
      'IaC & Tooling Innovation: Developed custom Terraform blueprints and architected a proprietary GoLang-based installer application for automated bootstrapping.',
      'Deployment Velocity Optimization: Slashed end-to-end environment fresh installation and provisioning lifecycles by 75%, compressing setup timelines from 10 days down to 2–3 days.'
    ],
    skills: ['GoLang', 'Terraform', 'Multi-Cloud', 'AKS', 'Azure DevOps', 'YAML']
  },
  {
    year: '2021 – 2026',
    role: 'Manager / Specialist Cloud and DevOps',
    company: 'Publicis Sapient',
    location: 'Gurugram, India',
    projectName: 'Project: Payment Settlement System',
    description: 'Architected and engineered production-grade Azure infrastructure supporting a national financial platform processing $22B annually.',
    highlights: [
      'Cloud Architecture & Scale: Engineered production-grade Azure infra using Terraform supporting $22 billion in annual financial transactions.',
      'CI/CD Optimization: Automated pipeline integration across Azure Synapse and Data Factory, driving a 25% acceleration in release cycles.',
      'Resilience & Chaos Engineering: Implemented Azure Chaos Studio proactive failure testing (Cosmos DB, Azure Functions, Networking), reducing MTTR by 25%.',
      'Security & PaaS Hardening: Designed secure private networking topologies for Azure PaaS implementations adhering strictly to PCI-DSS standards.',
      'Orchestration & Governance: Built large-scale AKS clusters powering low-code architectures; mentored cross-functional engineering teams.'
    ],
    skills: ['Azure Synapse', 'Data Factory', 'Cosmos DB', 'Azure Chaos Studio', 'PCI-DSS', 'AKS', 'Terraform']
  },
  {
    year: '2018 – 2021',
    role: 'Senior Cloud and DevOps Engineer',
    company: 'Publicis Sapient',
    location: 'California, USA (Remote)',
    projectName: 'Project: Digital Hub',
    description: 'Formulated enterprise configuration blueprints and standardized YAML pipeline infrastructure for high-scale digital platforms.',
    highlights: [
      'Infrastructure as Code (IaC): Formulated enterprise configuration blueprints using Ansible, PowerShell, and Azure DevOps for global multi-environment rollouts.',
      'Shared Service Standardization: Pioneered generic reusable YAML pipeline templates standardizing CI/CD across decentralized client teams.',
      'Release Acceleration: Designed one-click deployment systems across 30+ critical production environments, mitigating release risk.',
      'Process Automation: Automated MS Dynamics and SharePoint workspace provisioning workflows, crashing setup timelines from 10 days down to 2 days.'
    ],
    skills: ['Ansible', 'PowerShell', 'Azure DevOps', 'YAML Pipelines', 'MS Dynamics', 'SharePoint']
  },
  {
    year: 'April 2014 – September 2015',
    role: 'Team Lead - Technologies',
    company: 'Fareportal India',
    location: 'Gurugram, India',
    description: 'Managed central build infrastructure and runner farm nodes servicing high-traffic US e-commerce platforms.',
    highlights: [
      'Managed central build infrastructure and runner farm nodes for high-volume e-commerce platforms, optimizing high-traffic IIS setups.',
      'Engineered global CI/CD pipelines using Jenkins and custom MS Deploy automation workflows for 300+ developers.'
    ],
    skills: ['Jenkins', 'MS Deploy', 'IIS', 'Runner Farm', 'CI/CD']
  },
  {
    year: 'September 2013 – April 2014',
    role: 'Sr. Software Engineer - Configuration',
    company: 'InterGlobe Technologies Pvt. Ltd.',
    location: 'Gurugram, India',
    description: 'Developed advanced PowerShell application orchestration scripts to automate installation and reliable rollbacks across server clusters.',
    highlights: [
      'Developed advanced PowerShell orchestration scripts automating installation and reliable rollbacks across distributed server clusters.',
      'Gathered requirements from clients for new product automation and designed tailored automation scripts.'
    ],
    skills: ['PowerShell', 'Server Automation', 'Rollback Scripts', 'Configuration Management']
  },
  {
    year: 'February 2010 – September 2013',
    role: 'Full Stack Developer / Release Engineer',
    company: 'Excelsoft Technologies',
    location: 'Noida, India',
    description: 'Delivered end-to-end enterprise web applications for Pearson India and built automated MSBuild packaging pipelines.',
    highlights: [
      'Full-Stack Engineering: Delivered enterprise web applications for Pearson India utilizing C#, ASP.NET, and SQL Server databases.',
      'Build & Release Automation: Created automated application build packages using MSBuild framework for deployment consistency.',
      'Process Optimization: Programmed task-automation and health-monitoring scripts (PowerShell, Bash) cutting manual workloads by 10 hours weekly.'
    ],
    skills: ['C#', 'ASP.NET', 'SQL Server', 'MSBuild', 'PowerShell', 'Bash']
  },
  {
    year: 'May 2007 – February 2010',
    role: 'Full Stack Developer',
    company: 'Aapna Infotheek Pvt. Ltd.',
    location: 'New Delhi, India',
    description: 'Developed full-stack .NET business applications taking projects from requirement gathering to production delivery.',
    highlights: [
      'Full-Stack Development: Built .NET business applications taking projects from requirement gathering to development and delivery.',
      'Application Development: Created complex web applications using ASP.NET, C#, SQL Server, jQuery, and CSS.'
    ],
    skills: ['ASP.NET', 'C#', 'SQL Server', 'jQuery', 'JavaScript']
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'slingshot-automation',
    title: 'Slingshot Provisioning Velocity',
    metric: '75% Faster',
    description: 'Slashed environment installation and provisioning lifecycles from 10 days down to 2–3 days using a proprietary GoLang installer application and modular Terraform blueprints across PS and CS hosted multi-cloud environments.',
    tags: ['GoLang', 'Terraform', 'Multi-Cloud', 'Slingshot']
  },
  {
    id: 'payment-settlement',
    title: 'National Financial Infrastructure',
    metric: '$22,000,000,000',
    description: 'Architected and engineered production-grade Azure infrastructure using Terraform supporting $22 billion in annual financial transactions with automated Azure Synapse & Data Factory pipelines driving a 25% release cycle acceleration.',
    tags: ['Azure Synapse', 'Data Factory', 'Terraform', 'FinTech']
  },
  {
    id: 'resilience-chaos',
    title: 'Resilience Engineering & PCI-DSS',
    metric: '-25% MTTR',
    description: 'Implemented proactive failure testing via Azure Chaos Studio across Cosmos DB, Azure Functions, and Private Networking. Reduced Mean Time To Recovery by 25% while enforcing strict PCI-DSS PaaS hardening.',
    tags: ['Azure Chaos Studio', 'Cosmos DB', 'PCI-DSS', 'AKS']
  },
  {
    id: 'digital-hub-release',
    title: 'Digital Hub Workspace Automation',
    metric: '30+ Prod Envs',
    description: 'Pioneered reusable YAML pipeline templates and automated MS Dynamics and SharePoint workspace provisioning workflows, crashing setup timelines from 10 days down to 2 days across 30+ critical production environments.',
    tags: ['Ansible', 'PowerShell', 'YAML Pipelines', 'MS Dynamics']
  }
];

export const ARCHITECTURES: ArchitectureDiagram[] = [
  {
    id: 'slingshot-engine',
    name: 'Project Slingshot Platform',
    description: 'Multi-tenant, multi-cloud deployment engine utilizing a custom GoLang bootstrapping installer and modular Terraform blueprints across PS-hosted and CS-hosted client environments.',
    components: ['GoLang Installer', 'Terraform Blueprints', 'Multi-Cloud AKS', 'Azure DevOps YAML', 'Bicep'],
    flow: 'Source Code Repo -> Azure DevOps Pipelines -> GoLang Installer App -> Terraform Blueprints -> PS / CS Multi-Cloud Clusters'
  },
  {
    id: 'payment-system',
    name: 'Payment Settlement System ($22B)',
    description: 'High-availability Azure infrastructure designed for national financial scale, featuring automated Synapse pipelines, AKS microservices, and PCI-DSS private networking.',
    components: ['Azure Synapse', 'Data Factory', 'AKS', 'Cosmos DB', 'Azure Chaos Studio', 'Private Link'],
    flow: 'Financial Gateway -> Private Endpoint -> AKS Microservices -> Cosmos DB / Synapse Batch -> Azure Chaos Studio Validation'
  },
  {
    id: 'digital-hub',
    name: 'Digital Hub Multi-Environment Platform',
    description: 'Standardized YAML pipeline and Ansible configuration system managing 30+ global production environments and automated MS Dynamics workspace provisioning.',
    components: ['Ansible Playbooks', 'Reusable YAML Templates', 'Azure DevOps', 'PowerShell', 'MS Dynamics'],
    flow: 'Trigger -> Standardized YAML Pipeline -> Ansible Blueprint -> Multi-Region Cloud Infra / MS Dynamics Provisioning'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Microsoft Certified: Azure Administrator Associate', issuer: 'Microsoft' },
  { name: 'Microsoft Certified Technology Specialist (.NET 4.0 Web App Dev)', issuer: 'Microsoft' },
  { name: 'DOEACC: O Level Certified', issuer: 'DOEACC' }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Application (MCA)',
    period: 'September 2009',
    institution: 'PTU Jalandhar',
    grade: '67%'
  },
  {
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    period: 'September 2005',
    institution: 'PTU Jalandhar',
    grade: '79%'
  }
];

export const TECH_STACK = [
  'Azure', 'AKS', 'Docker', 'Bicep', 'Terraform', 'Ansible', 'Azure DevOps', 'GoLang', 'Milvus Vector DB', 'Azure Synapse', 'Data Factory', 'Cosmos DB', 'Azure Chaos Studio', 'PowerShell', 'C#', '.NET Core', 'Next.js', 'PCI-DSS'
];

