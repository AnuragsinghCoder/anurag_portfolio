import React from 'react';
import Button from '../components/Button.jsx';
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx';

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

const Hero = () => {
  return (
    <section className=' relative min-h-screen flex items-center overflow-hidden'>
      {/* Bg */}
      <div className='absolute inset-0'>
        <img src='/hero_bg_img.jpg' alt='Hero bg img' className='w-full h-full object-cover opacity-40 '/>
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Red dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, index) => (
          <div key={index} className={`absolute w-1.5 h-1.5 bg-accent/60 rounded-full `}
           style={{
            left:`${Math.random() * 100}%`,
            top:`${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
            }}>
            <div />
          </div>
        ))}
      </div>
      {/* Content */}
      <div className=" container mx-auto px-6 pt-32 pb-20 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Columm - Text Content */}
          <div className='space-y-8'>
            <div className =" animate-fade-in animation-delay-100">
              <span className = " inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent">
                <span className = "w-2 h-2 bg-accent rounded-full animate-pulse"/>Software Engineer · React Specialist
              </span>
            </div>
            {/* HeadLine */}
            <div className = " space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                  Crafting <span className ="text-accent glow-text">digital</span>
                <br />
                  experiences with
                <br />
                <span className ="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p
                className='text-lg text-text-muted max-w-lg animate-fade-in animation-delay-300 md:max-w-md lg:max-w-lg'>
                  Hi, I'm <span className='font-serif font-bold italic'>Anurag Singh</span> - a passionate software engineer specializing in
                   React. I create seamless and engaging web experiences that leave a
                    lasting impact.
              </p>
            </div>
            {/* Cta's */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-400'>
              <Button size="lg">
                 <a href="#contact">Contact Me </a>
                 <ArrowRight className='w-5 h-5' />
              </Button>
              <AnimatedBorderButton >
                <a href="../public/Anurag_Singh_resume_26.pdf" target='_blank' download={"anurag_resume.pdf"}>Download CV</a>
                <Download className='w-5 h-5' />
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className =" flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className='text-sm text-text-muted'>Follow me: </span>
                {[
                  { icon: FaGithub, href: "https://github.com/AnuragsinghCoder" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/anurag-singh-x-dev/" },
                  { icon: FaTwitter, href: "https://x.com/ANURAGs19794745" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 rounded-full glass hover:bg-accent/10 hover:text-accent transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
            </div>
          </div>
          {/* Right Column - Profile Image*/}
          <div className =" relative animation-fade-in animation-delay-300">
            {/* Profile image */}
            <div className ="relative max-w-md mx-auto">
              <div className='absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-accent/50 via-transparent 
              to-accent/5 blur-2xl animate-pulse' />
              <div className =" relative glass rounded-3xl p-2 glow-border">
                <img src='/profile_img.png' alt='Anurag Singh'
                 className='w-full aspect-[4/5] object-cover rounded-2xl '/>
                 {/* Floating batch */}
                 <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className ="flex items-center gap-3">
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span>
                      Available for work
                    </span>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Sections */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-text-muted mb-6 text-center'>Technologies i work with:</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skills, index)=>(
                <div key={index} className =" flex-shrink-0 px-8 py-4 ">
                  <span className='text-xl font-semibold text-text-muted/50 hover:text-text-muted transition-colors'>{skills}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-icon */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800 z-20"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero