
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
  year: string;
}
