export const portfolioData = {
    hero: {
        name: "Sachin C S",
        title: "Java Full Stack Developer | Cloud & DevOps Engineer",
        tagline: "Building scalable microservices and resilient cloud infrastructure with a focus on performance and automation.",
        cta: {
            primary: "View Projects",
            secondary: "Contact Me"
        }
    },
    about: {
        summary: "Professional Java Full Stack Developer with 2-3 years of experience in building robust backend systems and managing cloud-native infrastructure. Expertise in Core Java, Spring Boot, and Microservices, combined with strong foundations in Linux Administration, DevOps practices, and Networking.",
        skills: [
            "Core Java", "Spring Boot", "REST APIs", "SQL (MS SQL Server)",
            "AWS (EC2, S3, RDS, IAM, CloudWatch)", "Linux Administration (RHEL)",
            "VMware / Virtualization", "PowerShell & Bash Scripting",
            "Networking (TCP/IP, DNS, MPLS, BGP)", "Incident Management (ITIL)",
            "DevOps (GitHub Actions, Jenkins)"
        ]
    },
    skills: [
        {
            category: "Programming & Backend",
            items: ["Java", "Spring Boot", "Spring Cloud", "REST APIs", "MS SQL Server", "Python (Basics)"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS (EC2, S3, IAM, Route53)", "GitHub Actions", "Jenkins", "Docker", "Terraform (Basics)"]
        },
        {
            category: "Linux & Virtualization",
            items: ["RHEL / CentOS", "Bash Scripting", "PowerShell", "VMware ESXi", "VirtualBox"]
        },
        {
            category: "Networking",
            items: ["TCP/IP", "DNS/DHCP", "VPN", "MPLS", "BGP Basics", "CCNA Training"]
        }
    ],
    projects: [
        {
            title: "Java Spring Boot Microservices Application",
            description: "A resilient e-commerce backend built with Spring Boot, Spring Cloud, and Eureka for service discovery. Implemented API Gateway and Circuit Breakers for fault tolerance.",
            tech: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "MS SQL", "Docker"],
            challenges: "Managing service-to-service communication and maintaining data consistency across microservices.",
            impact: "Reduced system downtime by 30% through improved fault tolerance and easier horizontal scaling.",
            github: "#",
            architecture: "/images/microservices-arch.png"
        },
        {
            title: "AWS Cloud Monitoring Setup",
            description: "Automated infrastructure monitoring system using CloudWatch, SNS, and Lambda. Set up alerts for EC2 performance metrics and S3 usage.",
            tech: ["AWS CloudWatch", "Lambda", "SNS", "S3", "IAM"],
            challenges: "Fine-tuning alert thresholds to avoid alert fatigue while ensuring critical issues are captured.",
            impact: "Achieved 99.9% visibility into resource health and reduced MTTR by 40%.",
            github: "#",
            architecture: "/images/cloud-arch.png"
        },
        {
            title: "Linux Server Deployment & DR Simulation",
            description: "Automated RHEL server provisioning using custom Bash scripts. Implemented a Disaster Recovery (DR) simulation strategy with automated backups to AWS S3.",
            tech: ["Linux (RHEL)", "Bash Scripting", "AWS CLI", "Cron Jobs"],
            challenges: "Ensuring zero data loss during simulated failover and recovery process.",
            impact: "Reduced manual provisioning time by 70% and established a verified recovery RPO of 15 minutes.",
            github: "#",
            architecture: "/images/linux-dr.png"
        },
        {
            title: "IP/MPLS Networking Lab Simulation",
            description: "Designed and simulated a wide-area network architecture using MPLS and BGP. Configured OSPF for internal routing and implemented traffic engineering.",
            tech: ["GNS3 / Packet Tracer", "Cisco iOS", "MPLS", "BGP", "OSPF"],
            challenges: "Configuring LDP and BGP peering in a multi-area networking environment.",
            impact: "Successfully validated network traffic optimization strategies for enterprise-level ISP deployments.",
            github: "#",
            architecture: "/images/networking-lab.png"
        }
    ],
    experience: [
        {
            role: "Application Support Engineer",
            company: "Tech Solutions Corp",
            period: "2023 - Present",
            description: "Managing production environments, incident management, and cloud infrastructure support. Automating routine tasks using PowerShell and Bash.",
        },
        {
            role: "Java Developer",
            company: "Digital Innovations",
            period: "2021 - 2023",
            description: "Developed and maintained Java-based backend services for financial applications. Optimized SQL queries for MS SQL Server.",
        }
    ],
    certifications: [
        { name: "Java Full Stack Development", issuer: "JSpiders" },
        { name: "AWS Cloud Fundamentals", issuer: "Amazon Web Services" },
        { name: "Networking (CCNA Training)", issuer: "Cisco" },
        { name: "Linux Administration", issuer: "RHEL Training" }
    ],
    contact: {
        email: "sachin.cs.dev@gmail.com",
        linkedin: "https://linkedin.com/in/sachincs",
        github: "https://github.com/sachincs",
        resumeUrl: "/sachin-cs-resume.pdf"
    }
};
