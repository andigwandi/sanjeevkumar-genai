
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
    role: 'Systems Architect',
    company: 'Technology Solutions',
    description: 'Designed high-availability .NET web applications and integrated automated CI/CD pipelines.'
  },
  {
    year: '2007 - 2011',
    role: 'Software Engineer',
    company: 'Core Dev Systems',
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
    title: 'Resilience Engineering (Chaos Studio)',
    metric: '-25% MTTR',
    description: 'Implemented Azure Chaos Studio to proactively identify system vulnerabilities. This resilience strategy reduced the Mean Time To Recovery by 25%, saving millions in potential downtime costs.',
    tags: ['Azure Chaos Studio', 'SRE', 'Observability']
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
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Azure Administrator Associate', issuer: 'Microsoft', year: '2023' },
  { name: 'MCTS: .NET Framework 4, Web Applications', issuer: 'Microsoft', year: '2015' },
  { name: 'Terraform Associate', issuer: 'HashiCorp', year: '2022' },
  { name: 'Kubernetes Administrator (CKA)', issuer: 'CNCF', year: '2021' }
];

export const TECH_STACK = [
  'Azure', 'Terraform', 'Kubernetes (AKS)', 'C#', 'PowerShell', 'Synapse', 'Cosmos DB', 'GitHub Actions', 'Next.JS'
];
