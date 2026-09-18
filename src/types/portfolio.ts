export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

export interface Personal {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  availableForWork: boolean;
  resumeUrl: string;
  social: SocialLinks;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
