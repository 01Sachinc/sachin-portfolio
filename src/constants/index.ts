export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/01Sachinc',
  linkedin: 'https://www.linkedin.com/in/csesachin/',
  email: 'cssachin83@gmail.com',
  phone: '+91 8496001030',
  resume: '/Sachin2026.pdf',
};

export const PROJECTS = [
  {
    title: 'AI DevOps Monitoring Platform',
    description: 'Enterprise-grade monitoring with Docker, Terraform, Prometheus, and Python AI agents for real-time anomaly detection.',
    tech: ['Docker', 'Terraform', 'Python', 'Prometheus', 'Grafana'],
    github: 'https://github.com/01Sachinc/ai-devops-monitoring-platform',
    image: '/projects/ai-devops.png'
  },
  {
    title: 'AWS Secure VPC Architecture',
    description: 'Automated deployment of secure multi-tier AWS infrastructure featuring isolated public and private subnets.',
    tech: ['Terraform', 'AWS VPC', 'NAT Gateway', 'Cloud Security'],
    github: 'https://github.com/01Sachinc/aws-vpc-secure-architecture',
    image: '/projects/aws-vpc.png'
  },
  {
    title: 'AWS EC2-S3 Backup Automation',
    description: 'Production-ready bash scripts for automated backups with comprehensive IAM security policies.',
    tech: ['Bash', 'AWS CLI', 'IAM', 'S3'],
    github: 'https://github.com/01Sachinc/aws-ec2-s3-backup',
    image: '/projects/backup.png'
  },
  {
    title: 'Enterprise CI/CD Pipelines',
    description: 'Standardized GitHub Actions workflows for automated testing, linting, and multi-environment deployment.',
    tech: ['GitHub Actions', 'YAML', 'CI/CD', 'Docker'],
    github: 'https://github.com/01Sachinc/ai-devops-monitoring-platform', // Reuse since it has the pipeline
    image: '/projects/cicd.png'
  }
];

export const SKILLS = [
  {
    category: 'Java Fullstack',
    items: ['Java/J2EE', 'Spring Boot', 'Microservices', 'Hibernate', 'REST APIs', 'React.js', 'Next.js']
  },
  {
    category: 'AI & Data',
    items: ['Machine Learning Basics', 'Inference Engines', 'Statistical Analysis', 'Z-Score Analysis', 'Python AI Libraries']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, VPC, RDS)', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'Git', 'Terraform', 'Linux Bash']
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  }
];
