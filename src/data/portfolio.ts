// ── Types ──

export interface Identity {
  fullName: string;
  shortName: string;
  initials: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github?: string;
  photoUrl: string;
  hasPhoto: boolean;
}

export interface ProfessionalIdentity {
  primaryRole: string;
  positioning: string;
  careerTarget: string;
  primaryFocus: string[];
  headline: string;
  statusLine: string;
}

export interface Education {
  degree: string;
  institution: string;
  department: string;
  location: string;
  startDate: string;
  endDate: string;
  isExpected: boolean;
  gpa: string;
}

export interface Experience {
  id: string;
  role: string;
  type: "training" | "internship" | "teaching" | "volunteer" | "mentorship";
  typeLabel: string;
  organization: string;
  mode: string;
  startDate: string;
  endDate: string;
  hours?: string;
  score?: string;
  description: string[];
  stages?: {
    title: string;
    hours: string;
    topics?: string[];
  }[];
  topics?: string[];
}

export interface Project {
  id: string;
  caseId: string;
  title: string;
  status: string;
  description: string;
  techniques: string[];
}

export interface MethodologyStage {
  number: string;
  name: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  duration?: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  date: string;
  duration: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
  code: string;
}

export interface SecurityProfile {
  primaryFocus: string;
  secondaryFocus: string;
  additionalFocus: string;
  interests: string[];
}

export interface PortfolioData {
  identity: Identity;
  professionalIdentity: ProfessionalIdentity;
  summary: {
    factual: string;
    concise: string;
  };
  education: Education;
  experience: Experience[];
  projects: Project[];
  methodology: MethodologyStage[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  courses: Course[];
  volunteering: Volunteering[];
  languages: Language[];
  securityProfile: SecurityProfile;
  seo: {
    title: string;
    description: string;
  };
  writeups: {
    placeholder: string[];
  };
  labs: {
    confirmed: string;
    hours: string;
    placeholders: string[];
  };
}

// ── Data ──

export const portfolioData: PortfolioData = {
  identity: {
    fullName: "Mahmoud Hany Atlam",
    shortName: "Mahmoud Atlam",
    initials: "MA",
    location: "Cairo, Egypt",
    email: "mahmoud.hany.atlam@gmail.com",
    phone: "+201206110083",
    linkedIn: "https://www.linkedin.com/in/mahmoud-hany-atlam/",
    github: "https://github.com/Mahmoud-Hanyi",
    photoUrl: "/images/profile.jpg",
    hasPhoto: true,
  },

  professionalIdentity: {
    primaryRole: "Junior Penetration Tester / Security Analyst",
    positioning: "Cybersecurity / Penetration Testing",
    careerTarget: "Junior Penetration Tester / Security Analyst",
    primaryFocus: [
      "Web Application Security",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Network Security",
      "Threat Detection",
    ],
    headline: "Breaking Systems to Understand How to Secure Them.",
    statusLine:
      "AVAILABLE FOR ENTRY-LEVEL CYBERSECURITY / PENETRATION TESTING ROLES",
  },

  summary: {
    factual:
      "Computer Science and Artificial Intelligence student specializing in cybersecurity and penetration testing, with hands-on experience in web application security, vulnerability assessment, network security, and threat detection gained through structured training programs, practical labs, and security projects. Experienced in identifying and validating security vulnerabilities using industry-standard tools, with multiple hands-on penetration testing and network security training programs completed.",
    concise:
      "CS & AI student specializing in offensive cybersecurity, vulnerability assessment, and web security. Practical lab and penetration testing training background.",
  },

  education: {
    degree: "Bachelor of Computer Science and Artificial Intelligence",
    institution: "Benha University",
    department: "Computer Science Department",
    location: "Cairo, Egypt",
    startDate: "2023",
    endDate: "2027 Expected",
    isExpected: true,
    gpa: "3.6 / 4.0",
  },

  experience: [
    {
      id: "EXP-001",
      role: "Vulnerability Analyst & Penetration Tester Trainee",
      type: "training",
      typeLabel: "Training Program",
      organization: "Digital Egypt Pioneers Initiative (DEPI)",
      mode: "Remote",
      startDate: "July 2026",
      endDate: "Present",
      description: [
        "Participating in an Infrastructure & Security training program focused on vulnerability analysis and penetration testing.",
        "Training includes networking fundamentals, network penetration testing, web application penetration testing, Android penetration testing, and prompt engineering.",
        "Applied practical security testing methodologies to identify vulnerabilities and analyze security issues across different environments.",
      ],
    },
    {
      id: "EXP-002",
      role: "Cybersecurity Trainee",
      type: "training",
      typeLabel: "Training Program",
      organization: "Information Technology Institute (ITI)",
      mode: "Remote",
      startDate: "May 2026",
      endDate: "December 2026",
      stages: [
        {
          title: "Cybersecurity for Beginners — Mahara-Tech",
          hours: "35 hours",
        },
        {
          title: "Network Infrastructure Summer Boot Camp",
          hours: "120 hours",
          topics: [
            "Network Fundamentals",
            "Advanced Networking",
            "Ethical Hacking",
            "Cloud Essentials",
          ],
        },
        {
          title: "Cyber Talent CTF Bootcamp",
          hours: "24 hours",
          topics: [
            "Information Gathering",
            "Scanning",
            "Vulnerability Assessment",
            "Web Application Security",
            "Exploitation",
            "Post-Exploitation",
            "CTF-based Practical Assessment",
          ],
        },
      ],
      description: [
        "Multi-stage cybersecurity training covering foundations, network infrastructure, and capture-the-flag security challenges.",
      ],
    },
    {
      id: "EXP-003",
      role: "Teaching Assistant",
      type: "teaching",
      typeLabel: "Teaching",
      organization: "iSchool",
      mode: "On-site, Egypt",
      startDate: "August 2026",
      endDate: "August 2026",
      description: [
        "Selected as Teaching Assistant for DEMI Offline – 3rd Intake.",
        "Supported programming education for young learners.",
        "Delivered programming sessions and simplified technical concepts.",
        "Adapted explanations to different learning levels.",
        "Supported students through hands-on activities, problem-solving, and practical exercises.",
      ],
    },
    {
      id: "EXP-004",
      role: "Network Security Trainee",
      type: "training",
      typeLabel: "Training Program",
      organization: "National Telecommunication Institute (NTI)",
      mode: "Remote",
      startDate: "July 2026",
      endDate: "August 2026",
      hours: "120 hours",
      score: "95%",
      description: [
        "Completed intensive network security training covering SOC operations, network security monitoring, SIEM, and security log analysis.",
        "Trained in incident detection and response, threat hunting, Wireshark packet analysis, MITRE ATT&CK framework, malware analysis fundamentals, digital forensics, and security risk management.",
      ],
      topics: [
        "SOC Operations",
        "Network Security Monitoring",
        "SIEM",
        "Security Log Analysis",
        "Incident Detection & Response",
        "Threat Hunting",
        "Wireshark Packet Analysis",
        "MITRE ATT&CK",
        "Malware Analysis Fundamentals",
        "Digital Forensics",
        "Security Risk Management",
      ],
    },
    {
      id: "EXP-005",
      role: "WebApp Security Mentee",
      type: "mentorship",
      typeLabel: "Mentorship",
      organization: "RootX Academy",
      mode: "Remote",
      startDate: "May 2026",
      endDate: "July 2026",
      description: [
        "Completed Level II Web Application Security Mentorship focused on practical vulnerability analysis and problem-solving.",
      ],
      topics: [
        "SQL Injection",
        "XSS",
        "Access Control",
        "LFI/RFI",
        "Path Traversal",
        "SSRF",
        "CSRF",
      ],
    },
  ],

  projects: [
    {
      id: "PROJ-001",
      caseId: "CASE-2026-001",
      title: "Web Security Practice Labs",
      status: "ACTIVE",
      description:
        "Built and tested vulnerable web application scenarios to develop practical skills in vulnerability discovery, exploitation techniques, and web application security testing.",
      techniques: [
        "Vulnerability Discovery",
        "Exploitation Techniques",
        "Web Application Security Testing",
      ],
    },
    {
      id: "PROJ-002",
      caseId: "CASE-2026-002",
      title: "Bug Bounty Learning Journey",
      status: "IN PROGRESS",
      description:
        "Practicing reconnaissance, subdomain discovery, endpoint discovery, parameter enumeration, vulnerability assessment, and web application security testing methodologies.",
      techniques: [
        "Reconnaissance",
        "Subdomain Discovery",
        "Endpoint Discovery",
        "Parameter Enumeration",
        "Vulnerability Assessment",
        "Web Application Security Testing",
      ],
    },
  ],

  methodology: [
    {
      number: "01",
      name: "Reconnaissance",
      description:
        "Passive and active information gathering to map the target attack surface.",
    },
    {
      number: "02",
      name: "Enumeration",
      description:
        "Systematic discovery of services, endpoints, users, and configurations.",
    },
    {
      number: "03",
      name: "Initial Access",
      description:
        "Identifying entry points and establishing initial foothold on the target.",
    },
    {
      number: "04",
      name: "Exploitation",
      description:
        "Leveraging discovered vulnerabilities to demonstrate impact.",
    },
    {
      number: "05",
      name: "Privilege Escalation",
      description:
        "Elevating access levels to gain deeper system control.",
    },
    {
      number: "06",
      name: "Lateral Movement",
      description:
        "Navigating through internal networks to reach additional targets.",
    },
    {
      number: "07",
      name: "Validation",
      description:
        "Confirming findings with reproducible evidence and impact assessment.",
    },
    {
      number: "08",
      name: "Reporting & Remediation",
      description:
        "Documenting findings with actionable recommendations for remediation.",
    },
  ],

  skillCategories: [
    {
      id: "programming",
      title: "Programming",
      icon: "Code",
      skills: ["Python", "C++", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
      id: "operating-systems",
      title: "Operating Systems",
      icon: "Monitor",
      skills: ["Linux", "Kali Linux", "Red Hat Basics", "Windows"],
    },
    {
      id: "networking",
      title: "Networking",
      icon: "Network",
      skills: [
        "TCP/IP",
        "DNS",
        "HTTP/HTTPS",
        "DHCP",
        "Routing & Switching",
        "OSI Model",
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: "Shield",
      skills: [
        "Web Application Security",
        "OWASP Top 10",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Authentication & Authorization Testing",
        "Linux CLI",
      ],
    },
    {
      id: "security-tools",
      title: "Security Tools",
      icon: "Wrench",
      skills: [
        "Burp Suite",
        "Nmap",
        "Wireshark",
        "Nuclei",
        "Katana",
        "httpx",
        "Subfinder",
        "ffuf",
        "Gobuster",
        "SQLMap",
        "Metasploit Framework",
        "Git",
        "GitHub",
        "VirtualBox",
      ],
    },
    {
      id: "interpersonal",
      title: "Interpersonal Skills",
      icon: "Users",
      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Leadership",
        "Organization",
      ],
    },
  ],

  certifications: [
    {
      id: "CERT-001",
      title: "Cisco CyberOps Associate",
      issuer: "Cisco",
      date: "2026",
    },
    {
      id: "CERT-002",
      title: "Certified Cybersecurity Educator Professional (CCEP)",
      issuer: "CCEP",
      date: "19 April 2026",
      duration: "3 hours",
    },
  ],

  courses: [
    {
      id: "CRS-001",
      title: "Cyber Security Bootcamp",
      provider: "Google Developer Groups (GDG), Benha University",
      date: "2–6 February 2025",
      duration: "36 hours",
    },
    {
      id: "CRS-002",
      title: "Red Hat System Administration I",
      provider: "Red Hat",
      date: "12 June 2025",
      duration: "9 hours 11 minutes",
    },
    {
      id: "CRS-003",
      title: "Ethical Hacking",
      provider: "Online Course",
      date: "12 June 2025",
      duration: "3 hours 29 minutes",
    },
    {
      id: "CRS-004",
      title: "Implementation of Computer Network Fundamentals",
      provider: "Online Course",
      date: "12 June 2025",
      duration: "2 hours",
    },
    {
      id: "CRS-005",
      title: "Introduction to Network Security",
      provider: "Online Course",
      date: "21 April 2025",
      duration: "1 hour 15 minutes",
    },
    {
      id: "CRS-006",
      title: "Computer Network Fundamentals",
      provider: "Online Course",
      date: "9 February 2025",
      duration: "1 hour",
    },
  ],

  volunteering: [
    {
      role: "Cybersecurity Core Team Member",
      organization: "GDG on Campus Al-Azhar",
      period: "October 2025 – September 2026",
      description:
        "Contributed to the cybersecurity technical track by supporting the development and delivery of security-focused learning content, workshops, and community initiatives.",
    },
  ],

  languages: [
    { name: "Arabic", level: "Native", code: "AR" },
    { name: "English", level: "B2", code: "EN" },
  ],

  securityProfile: {
    primaryFocus: "Web Application Security / Penetration Testing",
    secondaryFocus: "Network Security",
    additionalFocus: "Vulnerability Assessment / Threat Detection",
    interests: [
      "OWASP Top 10",
      "Web Application Security",
      "Network Security",
      "Penetration Testing",
      "Bug Bounty Learning",
    ],
  },

  seo: {
    title:
      "Mahmoud Hany Atlam — Penetration Testing | Web Application Security | Cybersecurity",
    description:
      "Portfolio of Mahmoud Hany Atlam, a Computer Science and Artificial Intelligence student specializing in cybersecurity, penetration testing, web application security, and network security.",
  },

  writeups: {
    placeholder: [
      "[Add security writeup]",
      "[Add technical article]",
    ],
  },

  labs: {
    confirmed: "Cyber Talent CTF Bootcamp",
    hours: "24 hours",
    placeholders: [
      "[Add specific CTF challenges / platforms / writeups]",
    ],
  },
};
