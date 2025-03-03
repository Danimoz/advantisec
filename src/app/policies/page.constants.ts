
export interface PrivacyPolicySection {
  id: number;
  title: string;
  subTitle?: string;
  content: string[];
}


export const policies: PrivacyPolicySection[] = [
  {
    id: 1,
    title: "Information We Collect",
    subTitle: "Advantisec may collect the following types of information:",
    content: [
      "Personal Information: Such as your name, email address, phone number, and job title when you contact us, request services, or fill out forms",
      "Technical Information: Including your IP address, browser type, device information, and browsing behavior provided through cookies",
      "Service Data: Information related to the cybersecurity services we provide, which may include system and network details. This data is only collected as needed to deliver our services"
    ]
  },
  {
    id: 2,
    title: "How We Use Your Information",
    subTitle: "We use your data to:",
    content: [
      "Provide Services: Process your requests, deliver our cybersecurity services, and communicate with you regarding updates",
      "Improve User Experience: Analyze website traffic and user behavior to enhance website functionality and service offerings",
      "Legal Compliance and Security: Ensure compliance with applicable laws, detect and prevent fraud, and enhance security"
    ]
  },
  {
    id: 3,
    title: "Cookies and Tracking Technologies",
    content: [
      "Advantisec uses cookies and similar tracking technologies to collect technical data about your browsing activities. Cookies help us understand your preferences and improve our website. You may disable cookies through your browser settings, though this may affect website functionality"
    ]
  },
  {
    id: 4,
    title: "Sharing and Disclosure of Information",
    subTitle: "We do not sell or rent your personal information to third parties. However, We may share your information under the following circumstances:",
    content: [
      "Service Providers: With trusted third-party vendors who assist in providing our services (e.g., hosting providers, analytics services) bound by confidentiality obligations",
      "Legal Requirements: If required by law, we may disclose information in response to legal processes, such as court orders or subpoenas, or to protect our rights and those of our users",
      "Business Transfer: In the event of a merger, acquisition or asset sale, your information may be transferred as part of the transaction"
    ]
  },
  {
    id: 5,
    title: "Data Security",
    content: [
      "We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Our security practices align with industry standards, and we continuously monitor and update our protocols to maintain data integrity and security"
    ]
  },
  {
    id: 6,
    title: "Data Retention",
    content: [
      "Advantisec retains personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy and to comply with legal obligations. Once information is no longer required for processing we stop processing it"
    ]
  },
  {
    id: 7,
    title: "Your Privacy Rights",
    subTitle: "Depending o your location, you may have the right to:",
    content: [
      "Access and Correction: Request a copy of your data and correct any inaccuracies",
      "Data Deletion: Request deletion of your personal information, subject to legal and individual restrictions",
      "Opt-Out: Unsubscribe from marketing communications by following the opt-out instructions in our emails",
      "To exercise these rights, please contact us at your contact email"
    ]
  },
  {
    id: 8,
    title: "GDPR Compliance (for EU Users)",
    content: [
      "If you are located in the EU, Advantisec complies with the General Data Protection Regulation (GDPR). We ensure that your data is processed lawfully and transparently, and you have additional rights such as data portability and restriction of processing For GDPR-related requests, please reach out to us"
    ]
  },
  {
    id: 9,
    title: "Updates to Privacy Policy",
    content: [
      "Advantisec may update this Privacy Policy from time to time. We will notify you of any changes by posting the revised policy on our website. We encourage you to review this page periodically."
    ]
  },
  {
    id: 10,
    title: "Contact Us",
    content: [
      "If you have any questions or concerns regarding our Privacy Policy, please contact us at: Email: contact@advantisec.com"
    ]
  }
]