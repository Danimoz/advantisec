import Image from "next/image";
import HeroImg from "@assets/heroImg-min.png";
import TailorImg from "@assets/tailor.png";
import TogetherImg from "@assets/together.png";
import affordableImg from "@assets/affordable 2.png";
import WebflowTestimonialImg from '@assets/Testimonial.png';
import GuardianImg from "@assets/brave.png";
import PasswordImg from "@assets/blog.png";
import AuthorImg from "@assets/Author.png";
import Affordable from "@assets/affordable.png";
import WebflowLogo from "@assets/Webflow.png";
import OverlayAnimation from "@/components/ui/overlay-animation";
import { Button } from "@/components/ui/Button";
import CardsCarousel from "@/components/ui/cards-carousel";
import { InfiniteMovingItems } from "@/components/ui/infinite-moving-items";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";

const carouselData = [
  { src: TailorImg, text: "Tailored" },
  { src: TogetherImg, text: "Together" },
  { src: Affordable, text: "Affordable" },
  { src: GuardianImg, text: "Guardians" },
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

const movingItems = [WebflowLogo, WebflowLogo]

const blogPosts = [
  { 
    img: PasswordImg, 
    title: 'The Importance of Secure Passwords',
    category: 'News',
    description: 'Learn how to create strong and secure passwords to protect your data.', 
    date: '11 Jan 2022',
    length: '5 min read',
    author: 'John Doe',
    authorImg: AuthorImg
  },
  { 
    img: PasswordImg, 
    title: 'How to Recognize Phishing Emails',
    category: 'Tips',
    description: 'Learn how to identify and avoid falling for phishing email scams.', 
    date: '11 Jan 2022',
    length: '5 min read',
    author: 'Jane Smith',
    authorImg: AuthorImg
  },
  { 
    img: PasswordImg, 
    title: 'Protect Your Business from Ransomware',
    category: 'News',
    description: 'Dicover strategies to safeguard your business from ransomware attacks.', 
    date: '2022-01-01',
    length: '5 min read',
    author: 'John Doe',
    authorImg: AuthorImg
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className='relative'>
        <Image 
          alt="hero image" 
          src={HeroImg}
          priority={true}
          className=""
        />
        <OverlayAnimation />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className='text-balance font-black sm:tracking-widest md:tracking-wider text-center text-3xl md:text-5xl lg:text-7xl xl:text-9xl'>WE SECURE</h1>
          <div className="flex justify-center cursor-pointer">
            <div className="relative md:w-2/3 rounded-xl m-4 movingBorder">
              <svg height='100%' width='100%' xmlns="http://www.w3.org/2000/svg" className="absolute rounded-xl">
                <rect
                  rx='12'
                  ry='12'
                  className="line rounded-xl"
                  width="100%"
                  height="100%"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex justify-center w-full">
                <Button variant='background' size='xl' className="w-full shadow-inner shadow-primary">
                  <h6 className="text-primary font-bold text-xl">Get Secured Now</h6>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-primary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="w-full">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Protecting SMEs with affordable cybersecurity solutions
            </h2>
            <p className="text-lg mt-4">
              We are a cybersecurity company dedicated to providing cost-friendly and tailored cybersecurity solutions to small and medium-scale enterprises (SMEs) in the United Kingdom. 
              Our mission is to secure SMEs&apos; databases and networks, ensuring the overall security of the community and the global economy.
            </p>
            <Button size='lg' className="mt-6">
              <h6 className="text-secondary text-base">Learn More</h6>
            </Button>
          </div>
          <div className="rounded-xl border-2 border-primary w-full">
            <Image 
              alt='affordable cybersecurity solutions' 
              src={affordableImg}
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28">
        <CardsCarousel images={carouselData} />
      </section>

      <section className="py-10 md:py-14 lg:py-20 xl:py-28">
        <p className="text-lg font-bold text-center">Recognized by leading companies worldwide for cybersecurity expertise</p>
        <div className="flex items-center justify-center relative overflow-hidden h-[10rem]">
          <InfiniteMovingItems items={movingItems} />
        </div>
      </section>

     {/* Testimonials Section */}
      <section className="container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10 lg:px-12 xl:px-16">
        <TestimonialCarousel testimonials={testimonialData} />
      </section>

     {/* CTA Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="space-y-6">
          <h2 className="font-bold text-2xl md:text-4xl">
            Expert cybersecurity solutions for SMEs
          </h2>
          <p className="text-lg">Book a free consultation today and secure your business</p>
        </div>
        <Button size='lg' className="text-secondary self-start">
          Book Now
        </Button>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10 lg:px-12 xl:px-16">
        <div className='space-y-2 mb-12'>
          <h6 className="font-semibold text-base text-center">Latest</h6>
          <h2 className="font-bold text-3xl md:text-5xl text-center">Stay Informed with Cybersecurity</h2>
          <p className="text-center text-lg">Discover the latest insights and trends in cybersecurity.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/3 rounded-xl border border-primary">
              <div className="relative w-full">
                <Image 
                  alt='blog post' 
                  src={post.img}
                  className=" rounded-t-xl w-full"
                />
                <div className='absolute rounded-t-xl inset-0' style={{ backgroundColor: 'rgba(64, 248, 255, 0.5)' }} />
              </div>
              <div className="p-6 flex-grow">
                <div className="space-y-2">
                  <p className="text-sm font-semibold">{post.category}</p>
                  <h4 className="font-bold text-2xl line-clamp-2">{post.title}</h4>
                  <p className="text-sm line-clamp-3">{post.description}</p>
                </div>
                <div className="flex gap-4 mt-6">
                  <Image 
                    alt='author' 
                    src={post.authorImg}
                    className="rounded-full"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{post.author}</p>
                    <p className="text-sm">
                      {post.date}
                      <span className="mx-2">•</span>
                      {post.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button size='lg' variant='background' className="border border-primary">
            View all
          </Button>
        </div>
      </section>

      {/* CTA2 Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 container mx-auto py-10 md:py-14 lg:py-20 xl:py-28 px-8 md:px-10 lg:px-12 xl:px-16">
        <div>
          <h2 className="font-bold text-balance text-2xl md:text-4xl">
            Secure your Business Today
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-lg">Secure Your Business Today Contact Advantisec for a cybersecurity consultation or quote tailored to your business needs.</p>
          <div className="flex gap-6 items-center">
            <Button size='lg' className="text-secondary">
              Get Quote
            </Button>
            <Button size='lg' variant='background' className="border border-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
