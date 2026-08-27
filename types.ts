
export interface ImpactStory {
  id: string;
  title: string;
  metric: string;
  description: string;
  tags: string[];
}

export interface ArchitectureDiagram {
  id: string;
  name: string;
  description: string;
  components: string[];
  flow: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  location?: string;
  projectName?: string;
  description: string;
  highlights?: string[];
  skills?: string[];
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  grade?: string;
}

export interface CompetencyCategory {
  category: string;
  skills: string[];
}

