import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
//   { href: "#experience", label: "Experience" },
//   { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserScrolled, setUserScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            setUserScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
       
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
  return (
    <header className= {`fixed top-0 left-0 right-0 transition-all duration-500 ${isUserScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
        <nav className='container my-auto px-6 flex items-center justify-between'>
            <a href='#' className='text-xl font-bold tracking-tight hover:text-accent duration-300 transform transition-transform-colors hover:scale-110'>
                AS<span className='text-accent'>.</span>
            </a>

            {/* Desktop nav */}
            <div className='hidden md:flex items-center gap-1 '>
                <div className='glass rounded-full px-2 py-1 flex item center gap-1'>
                    {NavLinks.map((link) => (
                        <a key={link.href} href={link.href} className='px-4 py-2 text-sm text-text-muted hover:text-foreground rounded-full hover:bg-accent/10 transition-all duration-300 transform hover:py-1 scale-105'>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA Btn */}
            <div className='hidden md:block transform transition-transform duration-300 hover:scale-105'>
                <Button size ="sm" ><a href="#contact">Contact Me </a></Button>
            </div>

            {/* Mobile Menu Btn */}
            <button className='md:hidden pb-4 cursor-pointer transform rotate-180  ' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {/* Menu Icon */}
                <Menu
                    size={24}
                    className={`absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "rotate-180 scale-50 opacity-0 blur-sm"
                        : "rotate-0 scale-100 opacity-100 blur-0"
                    }`}
                />

                {/* X Icon */}
                <X
                    size={24}
                    className={`absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "rotate-0 scale-100 opacity-100 blur-0"
                        : "-rotate-180 scale-50 opacity-0 blur-sm"
                    }`}
                />
            </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (<div className = "md:hidden glass-strong animate-fade-in">
            <div className ="container mx-auto px-6 py-6 flex flex-col gap-4">
                {NavLinks.map((link) => (
                        <a key={link.href} href={link.href} className=' text-lg text-text-muted hover:text-foreground py-2'>
                            {link.label}
                        </a>
                    ))}
                <Button size ="sm" >Contact me </Button>    
            </div>  
        </div>)}
    </header>
  );
};

export default Navbar;