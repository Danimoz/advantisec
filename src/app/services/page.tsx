import Image from 'next/image'
import PlaceholderImg from '@assets/Placeholder Image.png'
import WebflowTestimonialImg from '@assets/Testimonial.png';
import WebflowLogo from '@assets/Webflow.png';
import { Button } from '@/components/ui/Button'
import { LuBox } from 'react-icons/lu'
import TestimonialCarousel from '@/components/ui/testimonial-carousel'

const secureService = [
  { title: 'Network Security', description: 'Secure your network from cyber threads and unauthorized access.', img: PlaceholderImg },
  { title: 'Data Protection', description: 'Keep your sensitive data from breaches and leaks', img: PlaceholderImg },
  { title: 'Threat Detection and Response', description: 'Identify and respond to cyber threats in real-time.', img: PlaceholderImg },
]

const testimonialData = [
  { 
    image: WebflowTestimonialImg, 
    stars: 5, 
    quote: "Advantisec's cybersecurity solutions have been instrumental in protecting our company's sensitive data. Their expertise and dedication to securing our networks have given us peace of mind.",
    logo: WebflowLogo,
    author: 'John Doe',
    company: 'Webflow'
  }
]

export default function Services() {
  return (
    <main className="min-h-screen">
      <section className="px-4 md:px-8 py-12 md:py-14 lg:py-20 flex">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold md:w-[700px]">Securing SMEs&apos; Cybersecurity</h1>
          <p className="text-lg">Comprehensive cybersecurity solutions tailored for SMEs to protect their digital assets.</p>
        </div>
        <div className="sm:hidden md:block"/>
      </section>

      <section className="py-12 md:py-14 lg:py-20 px-4 md:px-8 space-y-8">
        <div className="space-y-4 mx-auto md:max-w-[768px] flex flex-col justify-center items-center text-center">
          <h6 className="text-center">Secure</h6>
          <h1 className="text-center font-bold text-3xl md:text-5xl">Protecting Your Digital Assets with Advanced Security Solutions</h1>
          <p className="text-lg">Advantisec offers a range of cybersecurity services designed to safeguard your network, protect your data, and detect and respond to threats.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-9">
          {secureService.map((service, index) => (
            <div key={index} className='flex flex-col w-full space-y-4'>
              <Image src={service.img} alt={service.title} className='w-full'/>
              <h3 className='flex-1 text-center text-4xl font-bold'>{service.title}</h3>
              <p className='text-center text-base'>{service.description}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center pt-8'>
          <Button size='lg' variant='background' className="border border-primary">
            Learn
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-14 lg:py-20 px-4 md:px-8 space-y-8">
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full'>
            <h3 className='font-bold text-4xl md:w-[616px]'>Protect Your Network with Advanced Security Solutions</h3>
          </div>
          <div className='w-full'>
            <p className='md:w-[616px]'>
              Network security is crucial for safeguarding your business against cyber threats. At Advantisec, we offer a range of advanced security solutions, including firewalls, intrusion prevention systems, and network monitoring. Our team of experts will work closely with you to assess your network vulnerabilities and implement robust security measures to protect your valuable data. Don't wait until it&apos;s too late, take proactive steps to secure your network today.
            </p>
          </div>
        </div>

        <Image src={PlaceholderImg} alt='Network Security' className='w-full'/>
      </section>  

      <section className="flex flex-col md:flex-row gap-9 py-12 md:py-14 lg:py-20 px-4 md:px-8 space-y-8">
        <div className='w-full space-y-8'>
          <p>Secure</p>
          <h1 className='font-bold text-4xl md:text-5xl'>Data Protection: Encryption, Storage and Backup Solutions</h1>
          <p className='text-lg'>
            Protect your valuable data with our secure encryption, storage, and backup solutions. Safeguard your business from data breaches and ensure business continuity.
          </p>

          <div className='flex gap-x-8 pt-4'>
            <div className='space-y-4'>
              <LuBox size={36} color='white' />
              <h5 className='text-xl font-bold'>Encryption</h5>
              <p className='text-base'>
                Protect your data with state-of-the-art encryption technology, keeping it safe from unauthorized access.
              </p>
            </div>
            <div className='space-y-4'>
              <LuBox size={36} color='white' />
              <h5 className='text-xl font-bold'>Storage</h5>
              <p className='text-base'>
                Securely store your data in our reliable and resilient storage infrastructure, ensuring its availability whenever you need it.
              </p>
            </div>
          </div>

          <div className='pt-4'>
            <Button size='lg' variant='background' className="border border-primary">
              Learn More
            </Button>
          </div>
        </div>
        <Image src={PlaceholderImg} alt='Data Protection' className='w-full'/>
      </section> 
    
      <section className="flex flex-col md:flex-row gap-9 py-12 md:py-14 lg:py-20 px-4 md:px-8 space-y-8">
        <Image src={PlaceholderImg} alt='Monitoring' className='w-full'/>
        <div className='space-y-8'>
          <p className='text-base font-semibold'>Protect</p>
          <h2 className='font-bold text-4xl md:text-5xl'>Real-time Threat Monitoring and Incident Response</h2>
          <p className='text-lg'>
            Advantisec offers comprehensive threat detection and response services to safeguard your business from cyber threats. Our real-time threat monitoring, incident response, and threat analysis solutions ensure that your network and data remain secure.
          </p>
          <div>
            <Button size='lg' variant='background' className="border border-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-14 lg:py-20 px-4'>
        <TestimonialCarousel testimonials={testimonialData} fullImage={true} />
      </section>


      <section className="py-12 md:py-14 lg:py-20 px-4 md:px-8 space-y-8">
        <div className='flex flex-col justify-center items-center gap-6 md:w-[768px] mx-auto space-y-4'>
          <h3 className='font-bold text-4xl md:text-5xl text-center'>Customized Cybersecurity Solutions for SMEs</h3>
          <p className='text-center'>Contact Advantisec for a tailored cybersecurity solution consultation today.</p>
          <Button size='lg' className="border border-primary">Contact</Button>
        </div>
      </section>
    </main>
  )
}