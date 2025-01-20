import { FolderCardProps } from "@/components/ui/folderCard";

import FolderMask1 from "@assets/maskImages/Mask group1.png";
import FolderMask2 from "@assets/maskImages/Mask group2.png";
import FolderMask3 from "@assets/maskImages/Mask group3.png";
import FolderMask4 from "@assets/maskImages/Mask group4.png";
import PeopleImg from "@assets/Group 29 - Scaled Raster Image.png";
import MicrosoftCert from "@assets/microsoft.png";
import NCSCCert from "@assets/ncsc.png";
import AffordableImg from "@assets/affordable 1.png";
import TeamWorkImg from "@assets/business-hands-joined-together-teamwork.png";
import ChatIcon from "@assets/Chat.png";
import EyeIcon from "@assets/Seen.png";
import AnalyzeIcon from "@assets/Analysis.png";
import TailorIcon from "@assets/Clip path group.png";


export const carouselData: FolderCardProps[] = [
  { 
    fillColor: '#10375B', 
    stopColor: '#10375B', 
    stopColor2: '#40F8FF', 
    heading: 'Cost Effective', 
    description: 'Protect your digital assets without breaking the bank.',
    image: FolderMask1,
    textColor: 'white',
    headingColor: '#40F8FF'
  },
  { 
    fillColor: '#40F8FF', 
    stopColor: '#10375B', 
    stopColor2: '#40F8FF', 
    heading: 'Collaborative', 
    description: 'We work with you to secure your digital frontier.',
    image: FolderMask2,
    textColor: '#10375B',
    headingColor: '#10375B'
  },
  { 
    fillColor: '#10375B', 
    stopColor: '#10375B', 
    stopColor2: '#40F8FF', 
    heading: 'Tailored Security', 
    description: 'Custom-fit cybersecurity measures for your specific industry and size',
    image: FolderMask3,
    textColor: 'white',
    headingColor: '#40F8FF'
  },
  { 
    fillColor: '#40F8FF', 
    stopColor: '#10375B', 
    stopColor2: '#40F8FF', 
    heading: 'Expert Guidance', 
    description: 'Benefit from our bi-decade long experience in securing digital systems.',
    image: FolderMask4,
    textColor: '#10375B',
    headingColor: '#10375B'
  },
  
]

export const marketingPanels = [
  {
    title: "We prioritize people",
    description: "& processes, recognizing that technology is just one part of the cybersecurity equation.",
    imageSrc: PeopleImg,
    imageAlt: "Group of people looking down at camera smiling"
  },
  {
    title: "We offer affordable",
    description: "solutions without compromising on quality, tailored to your specific industry and size.",
    imageSrc: AffordableImg,
    imageAlt: "Wallet and money on blue background"
  },
  {
    title: "We believe in",
    description: "collaboration, working alongside you to build a robust security infrastructure.",
    imageSrc: TeamWorkImg,
    imageAlt: "Business handshake in blue tint"
  }
]

export const serviceCards = [
  {
    icon: AnalyzeIcon,
    text: "Assess your current security posture",
  },
  {
    icon: ChatIcon,
    text: "Provide actionable insights to enhance your cybersecurity",
  },
  {
    icon: EyeIcon,
    text: "Identify potential vulnerabilities specific to your industry",
  },
  {
    icon: TailorIcon,
    text: "Outline cost-effective solutions tailored to your biz size & needs",
  },
]

export const certifications = [
  {
    image: MicrosoftCert,
    title: "Microsoft Cybersecurity Architect",
  },
  {
    image: NCSCCert,
    title: "National Cyber Security Centre",
  },
]
