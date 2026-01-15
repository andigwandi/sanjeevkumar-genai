
import { ImpactStory, ArchitectureDiagram, Certification } from './types';

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
}

export const CAREER_TIMELINE: TimelineEvent[] = [
  {
    year: '2021 - Present',
    role: 'Manager/Specialist Cloud and DevOps',
    company: 'Publicis Sapient',
    description: 'Leading mission-critical infrastructure transformations for global financial and energy sectors.'
  },
  {
    year: '2015 - 2021',
    role: 'Senior Cloud Engineer',
    company: 'Publicis Sapient',
    description: 'Specialized in Azure migrations, IaC with Terraform, and enterprise-scale Kubernetes deployments.'
  },
  {
    year: '2011 - 2015',
    role: 'Senior DevOps Engineer',
    company: 'Fareportal Pvt. Ltd.',
    description: 'Designed high-availability .NET web applications and integrated automated CI/CD pipelines.'
  },
  {
    year: '2007 - 2011',
    role: 'Software Engineer',
    company: 'Excelsoft India Pvt. Ltd.',
    description: 'Foundational experience in full-stack development and server management.'
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'payment-settlement',
    title: 'The $22B Annual Impact',
    metric: '$22,000,000,000',
    description: 'Architected the core Azure infrastructure for a Payment Settlement System processing massive global transaction volumes. Prioritized security, compliance, and zero-downtime availability using Terraform and Synapse.',
    tags: ['Azure Synapse', 'Terraform', 'Financial Tech']
  },
  {
    id: 'resilience-engineering',
    title: 'BCDR & High Availability Architecture',
    metric: '99.99% SLA',
    description: 'Designed and implemented comprehensive Business Continuity and Disaster Recovery strategies across multi-region Azure deployments. Achieved 99.99% uptime SLA with automated failover, geo-redundant backups, and cross-region replication.',
    tags: ['BCDR', 'High Availability', 'Geo-Redundancy', 'Azure Site Recovery']
  },
  {
    id: 'automation-transformation',
    title: 'Rapid Environment Provisioning',
    metric: '80% Faster',
    description: 'Transformed environment readiness from a 10-day manual process to a 2-day automated workflow. This leap enabled true agile delivery and reduced human error in infrastructure setup.',
    tags: ['Terraform', 'IaC', 'CI/CD Pipelines']
  }
];

export const ARCHITECTURES: ArchitectureDiagram[] = [
  {
    id: 'payment-system',
    name: 'Payment Settlement System',
    description: 'High-availability architecture designed for financial institutions, prioritizing data integrity and low-latency auditing.',
    components: ['Azure Synapse', 'AKS', 'Cosmos DB', 'API Management'],
    flow: 'Client -> APIM -> AKS (Microservices) -> Event Hub -> Synapse (Batch) / Cosmos DB (Live)'
  },
  {
    id: 'digital-hub',
    name: 'Modern Digital Hub',
    description: 'A scalable, multi-tenant hub for energy sector operations, focusing on real-time data processing and cross-region resilience.',
    components: ['Azure Functions', 'Storage Accounts', 'Service Bus', 'App Service'],
    flow: 'Edge Data -> IoT Hub -> Functions -> Service Bus -> SQL Managed Instance'
  },
  {
    id: 'enterprise-products-devops',
    name: 'Enterprise Products Dual-Track Platform',
    description: 'Comprehensive DevOps platform managing both Release Track (CI/CD automation with vNext migrations) and Data Track (database lifecycle, cutover orchestration, and test data management).',
    components: ['Azure DevOps', 'vNext Build', 'SQL Server', 'Test Harness', 'Backup/Restore Automation', 'Data Cleansing Tools'],
    flow: 'Release: XAML -> vNext Definitions -> Build Pipeline -> Deployment |  Data: Source DB -> Cleansing/Harvesting -> Test Harness -> Cutover'
  },
  {
    id: 'invesco-integration',
    name: 'Invesco Enterprise Integration Platform',
    description: 'Enterprise-grade integration system for financial services with automated CI/CD pipeline and scheduled deployment orchestration.',
    components: ['BizTalk Server', 'SQL Server', 'SSIS', 'Web Services', 'Windows Services', 'CruiseControl'],
    flow: 'Source Systems -> BizTalk (Orchestration) -> Web/Windows Services -> SSIS (ETL) -> SQL Server'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Azure Administrator Associate', issuer: 'Microsoft', year: '2023' },
  { name: 'MCTS: .NET Framework 4, Web Applications', issuer: 'Microsoft', year: '2015' }
];

export const TECH_STACK = [
  'Azure', 'Terraform', 'Kubernetes (AKS)', 'C#', 'PowerShell', 'Synapse', 'Cosmos DB', 'GitHub Actions', 'Next.JS'
];
