export type About = string;

export interface Contact {
  label: string;
  url: string;
}

export interface Certification {
  image: string;
  name: string;
  organization: string;
  year: string;
}

export interface Education {
  degree: string;
  school: string;
  image: string;
  year: string;
}

export interface Experience {
  company: string;
  image: string;
  positions: Array<ExperiencePosition>;
}

export interface ExperiencePosition {
  employmentType: string;
  from: string;
  title: string;
  to: string;
}

export interface Language {
  image: string;
  name: string;
  level: string;
}

export interface Project {
  description: string;
  image: string;
  name: string;
  website: string;
}

export interface Skill {
  details?: string;
  highlight?: boolean;
  name: string;
}

export default interface Resume {
  _metadata: { color: string; };
  about: Array<About>;
  certifications: Array<Certification>;
  contact: {
    email: Contact;
    linkedin: Contact;
    location: Contact;
    phone: Contact;
  };
  education: Array<Education>;
  experiences: Array<Experience>;
  fullName: string;
  languages: Array<Language>;
  profilePicture: string;
  projects: Array<Project>;
  skills: Array<Skill>;
  title: string;
}
