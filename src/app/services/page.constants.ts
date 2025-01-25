import { ServiceCardProps } from "./serviceCard";

export const services = [
  {
    heading: "Continuous Monitoring & Risk Assessment",
    body: `We provide ongoing risk assessments to identify vulnerabilities and maintain a comprehensive overview of your security posture. Our monitoring includes regular reviews of access controls, user activities, and critical systems to uphold security standards.`,
  },
  {
    heading: "Security Audits & Gap Analysis",
    body: `Our experts perform in-depth security audits and gap analyses to benchmark your practices against industry standards like ISO 27001. We deliver actionable insights and recommendations to strengthen your security framework.`,
  },
  {
    heading: "Compliance Maintenance & Reporting",
    body: `We help your business maintain compliance with standards like SOC 2, HIPAA, and GDPR. Our services include routine compliance checks, detailed reporting, and documentation to simplify re-certification and renewals.`,
  },
  {
    heading: "Policy & Procedure Review",
    body: `We offer a comprehensive review and refinement of your cybersecurity policies and procedures, ensuring they align with industry best practices. Our updates keep your policies relevant in an evolving security landscape.`,
  },
];

export const gdpr = [
  {
    heading: "Data Protection Impact Assessment (DPIA)",
    body: `We conduct DPIAs to help identify and mitigate privacy risks related to processing personal data, ensuring your practices align with GDPR requirements.`,
  },
  {
    heading: "Privacy Policy Development and Review",
    body: `We help develop or refine privacy policies that transparently communicate data handling practices, ensuring compliance with GDPR’s requirements for data transparency and user consent.`,
  },
  {
    heading: "Data Subject Access Request (DSAR) Management",
    body: `We assist in setting up processes to handle DSARs efficiently, ensuring prompt responses to requests from individuals regarding their personal data as required by GDPR.`,
  },
  {
    heading: "Data Mapping and Classification",
    body: `Our team helps you map and classify data according to its sensitivity and regulatory requirements. This includes identifying and documenting personal data flows to ensure GDPR-compliant handling and processing.`,
  },
  {
    heading: "Data Breach Response and Reporting",
    body: `We provide guidance and support for data breach response, including preparation, notification, and reporting processes that comply with GDPR mandates.`,
  },
]

export const penetration = [
  {
    heading: "External Network Penetration Testing",
    body: `This test assesses the strength of your internet-facing systems by simulating external attacks that hackers might use to breach your network. We provide a report of vulnerabilities and actionable remediation steps.`,
  },
  {
    heading: "Internal Network Penetration Testing",
    body: `We simulate insider threats to identify vulnerabilities within your internal network, ensuring that potential insider threats are mitigated and sensitive data is protected from unauthorized internal access.`, 
  },
  {
    heading: "Application Security Testing",
    body: `Our team performs application security testing, including web and mobile applications, to find vulnerabilities like SQL injection, cross-site scripting (XSS), and other coding flaws that could be exploited by attackers.`,
  },
  {
    heading: "Social Engineering and Phishing Simulations",
    body: `We conduct simulated phishing attacks and other social engineering tests to gauge your employees’ awareness and response to common cyber threats, helping you identify training needs.`,
  },
  {
    heading: "Physical Penetration Testing",
    body: `For businesses needing on-premise security, we assess physical security controls to prevent unauthorized access to sensitive areas and ensure compliance with security protocols.`,
  }
]

export const vulnerabilities = [
  {
    heading: "Automated Vulnerability Scanning",
    body: `Regular automated scans identify vulnerabilities across your network, applications, and devices. Our team provides clear reports and prioritized recommendations based on risk levels.`,
  },
  {
    heading: "Patch Management Support",
    body: `We help implement patch management processes to ensure timely updates and patching of vulnerabilities. This reduces the window of opportunity for attackers by keeping systems up-to-date with security fixes.`,
  },
  {
    heading: "Vulnerability Remediation Guidance",
    body: `Beyond detection, we provide actionable steps to remediate identified vulnerabilities, including system hardening, configuration adjustments, and strategic improvements.`,
  },
  {
    heading: "Configuration Management",
    body: `We review and help maintain secure configurations for operating systems, databases and applications, ensuring they follow security best practices and reducing the likelihood of misconfigurations.`,
  },
  {
    heading: "Metrics and Reporting",
    body: `Our vulnerability management program includes regular reporting on vulnerability status, remediation progress, and overall security posture, helping you track improvements and prioritize future efforts.`,
  }
];

export const soc = [
  {
    heading: '24/7 Threat Detection and Response',
    body: `Our SOC MSSP service offers round-the-clock monitoring of your IT infrastructure to detect and respond to potential threats in real-time, minimizing the impact of security incidents.`,
  },
  {
    heading: 'Security Information and Event Management (SIEM)',
    body: `We use SIEM solutions to collect and analyse log data from across your network, providing centralized visibility into security events and helping to identify anomalous behaviour.`,
  },
  {
    heading: 'Managed Detection and Response (MDR)',
    body: `Our MDR service leverages advanced threat intelligence and machine learning to detect and respond to sophisticated threats, ensuring your business is protected from evolving cyber risks.`,
  },
  {
    heading: 'Endpoint Detection and Response (EDR)',
    body: `EDR tools continuously monitor endpoint activity to detect suspicious behaviour. Our team provides full lifecycle management, from detection through response and remediation, ensuring comprehensive endpoint protection.`,
  },
  {
    heading: 'Incident Response and Forensics',
    body: `In case of an incident, our SOC team assists with containment, eradication, and recovery efforts, as well as forensic analysis to determine the root cause and prevent future occurrences.`,
  },
  {
    heading: 'Threat Intelligence Integration',
    body: `We provide SMEs with access to curated threat intelligence feeds to keep you informed of new threats and vulnerabilities relevant to your industry, enhancing your proactive defense measures.`,
  }
];


export const serviceCards: ServiceCardProps[] = [
  {
    title: "Assurance Activities",
    description: "A comprehensive service that provides continuous security monitoring, audits, compliance maintenance, and policy reviews to ensure your organization maintains strong security practices and meets industry standards",
    titleColor: "secondary",
    descriptionColor: "secondary",
    position: "down",
    bg: "primary",
  },
  {
    title: "GDPR Compliance",
    description: "A suite of essential data protection services that help businesses identify, manage, and respond to privacy risks while ensuring regulatory compliance with GDPR requirements⁠",  
    titleColor: "primary",
    descriptionColor: "white",
    position: "down",
    bg: "secondary",
  },
  {
    title: "Penetration Testing",
    description: "A comprehensive security assessment service that includes external and internal network testing, application security testing, social engineering simulations, and physical security evaluations to identify and address vulnerabilities in your systems",
    titleColor: "secondary",
    descriptionColor: "secondary",
    position: "down",
    bg: "primary",
  },
  {
    title: "Vulnerability Management",
    description: "An essential security service that includes automated scanning, patch support, and expert guidance to identify and fix system weaknesses through regular monitoring and strategic improvements⁠⁠",  
    titleColor: "primary",
    descriptionColor: "white",
    position: "up",
    bg: "secondary",
  },
  {
    title: "(SOC) as a (MSSP)",
    description: "A 24/7 security monitoring service that combines threat detection, response capabilities, and advanced tools to protect your IT infrastructure from cyber threats in real-time",
    titleColor: "primary",
    descriptionColor: "white",
    position: "up",
    bg: "secondary",
  },
]