import type {
  SocialLink,
  SkillCategory,
  Project,
  TimelineEntry,
  Language,
} from '../types';

export const profile = {
  name: 'Ramil Valiyev',
  title: 'Software Engineer',
  location: 'Baku, Azerbaijan',
  email: 'rvaliyev11988@gmail.com',
  initials: 'RV',
  tagline: 'Enterprise web applications, built to hold up in production.',
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/ramilvl', handle: '@ramilvl' },
  {
    label: 'LinkedIn',
    href: 'http://www.linkedin.com/in/ramil-valiyev',
    handle: 'ramil-valiyev',
  },
  { label: 'Email', href: 'mailto:rvaliyev11988@gmail.com', handle: 'rvaliyev11988@gmail.com' },
];

export const about = {
  paragraphs: [
    'I build enterprise web applications with React, TypeScript and SCSS — the kind of software that has to stay reliable after the demo ends: audited, integrated with backend systems that don\u2019t change on my schedule, and used daily by people who didn\u2019t choose it.',
    'At SOCAR Downstream Management I work on internal digital solutions, from interface architecture to the integrations that connect them to enterprise systems. Most of that work is invisible by design — dashboards that load fast, forms that don\u2019t lose data, components that hold up as requirements shift.',
    'Outside of feature work, I care about component architecture that survives contact with a second developer, and frontend performance that\u2019s measured, not assumed. I\u2019m currently deepening that into advanced React architecture and modern UI engineering practice.',
  ],
  facts: [
    { label: 'Based in', value: 'Baku, Azerbaijan' },
    { label: 'Currently', value: 'SOCAR Downstream Management' },
    { label: 'Focus', value: 'React / TypeScript / Enterprise UI' },
    { label: 'Education', value: 'B.Sc. Computer Science, ADA University' },
  ],
};

export const experience = {
  company: 'SOCAR Downstream Management',
  role: 'Software Engineer',
  status: 'Present',
  summary:
    'Building and maintaining internal digital products used across departments — from dashboard interfaces to the frontend layer of systems integrated with enterprise backends.',
  responsibilities: [
    'Develop enterprise web applications end to end',
    'Implement modern, responsive UI across internal products',
    'Collaborate closely with backend developers on API contracts',
    'Improve user experience across existing internal tools',
    'Optimize frontend performance and load behavior',
    'Maintain a shared library of reusable React components',
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    span: 'wide',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Vite',
      'React Router',
      'Axios',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST API'],
  },
  {
    id: 'database',
    title: 'Database',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    span: 'wide',
    skills: [
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'GitLab CI/CD',
      'Nginx',
      'Linux',
      'Bash',
      'Kubernetes (Basic)',
      'Traefik',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'],
  },
];

export const projects: Project[] = [
  {
    id: 'digital-twin',
    name: 'SOCAR Digital Twin',
    kind: 'Enterprise dashboard',
    description:
      'A monitoring dashboard giving departments a live, unified view of applications and systems status across the organization.',
    tech: ['React', 'TypeScript', 'SCSS'],
    featured: true,
  },
  {
    id: 'eqms',
    name: 'EQMS',
    kind: 'Web application',
    description: 'Enterprise equipment management system covering reporting and data tracking.',
    tech: ['React', 'TypeScript', 'SCSS'],
    features: ['Dashboard', 'Reports', 'Data management'],
  },
  {
    id: 'academia',
    name: 'Academia',
    kind: 'Web application',
    description: 'Online learning platform for coursework, assessment and progress tracking.',
    tech: ['React', 'TypeScript', 'SCSS'],
    features: ['Courses', 'Quizzes', 'Learning dashboard'],
  },
  {
    id: 'mobile-eqms',
    name: 'Mobile EQMS',
    kind: 'Android application',
    description: 'The equipment management workflow, rebuilt native for field use on Android.',
    tech: ['Kotlin', 'Room', 'MVVM'],
  },
];

// NOTE: exact start/end years weren't provided in the source content —
// `period` uses safe, honest placeholders. Update these two fields with
// real dates before publishing.
export const timeline: TimelineEntry[] = [
  {
    id: 'bachelor',
    type: 'education',
    title: 'B.Sc. Computer Science',
    org: 'ADA University',
    period: 'Completed',
  },
  {
    id: 'master',
    type: 'education',
    title: 'M.Sc. Artificial Intelligence',
    org: 'UNEC',
    period: 'Completed',
  },
  {
    id: 'socar',
    type: 'work',
    title: 'Software Engineer',
    org: 'SOCAR Downstream Management',
    period: 'Present',
    current: true,
  },
];

export const languages: Language[] = [
  { name: 'Azerbaijani' },
  { name: 'English', note: 'IELTS 7.0' },
  { name: 'Turkish' },
];

export const technologies: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Vite',
  'SCSS',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'Nginx',
  'GitHub Actions',
  'GitLab CI/CD',
  'Linux',
  'Traefik',
  'REST API',
];
