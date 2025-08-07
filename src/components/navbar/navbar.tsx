'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Menu,
  X,
  Code,
  GitFork,
  ChevronDown,
  SlidersHorizontal,
  Diamond,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '../../../public/assets/logo.png';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  hasDropdown?: boolean;
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceItem = ({ icon, title, description, href }: ServiceItemProps) => (
  <Link href={href} className='flex gap-4 p-4 hover:bg-accent rounded-md transition-colors'>
    <div className='bg-accent/50 rounded-md p-2 h-fit'>{icon}</div>
    <div>
      <h3 className='font-medium'>{title}</h3>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  </Link>
);

const NavLink = ({ href, label, onClick, hasDropdown }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: <SlidersHorizontal className='text-pink-400' size={36} />,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly and securely',
      href: '/services/maintenance',
    },
    {
      icon: <Code className='text-yellow-400' size={36} />,
      title: 'Website & App Development',
      description: 'Transform your online presence with our custom platform design solutions.',
      href: '/services/development',
    },
    {
      icon: <GitFork className='text-green-400' size={36} />,
      title: 'IT Support',
      description: 'Experience peace of mind with our reliable IT support services.',
      href: '/services/support',
    },
    {
      icon: <Diamond className='text-purple-400' size={36} />,
      title: '3rd Party AI Solution',
      description:
        'Leverage our expertise to find the best third-party services for your business.',
      href: '/services/ai-solutions',
    },
  ];

  return (
    <div
      className='relative flex justify-center items-center cursor-pointer'
      onMouseEnter={() => hasDropdown && setIsHovered(true)}
      onMouseLeave={() => hasDropdown && setIsHovered(false)}
    >
      <Link
        href={href}
        onClick={onClick}
        className='text-foreground hover:text-primary transition-colors flex items-center gap-1'
      >
        <span className='inline-flex justify-center items-center'>
          {label}
          {hasDropdown && (
            <ChevronDown
              className={cn('ml-2 mt-2', isHovered ? 'rotate-180' : 'rotate-0')}
              size={18}
            />
          )}
        </span>
      </Link>

      {hasDropdown && isHovered && (
        <div className='absolute top-full left-0 mt-2 bg-background border rounded-lg shadow-lg w-[800px] grid grid-cols-2 gap-2 p-3 z-50'>
          {services.map((service) => (
            <ServiceItem
              key={service.href}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/services', label: 'Our Services', hasDropdown: true },
    { href: '/about', label: 'About Us', hasDropdown: false },
    { href: '/portfolio', label: 'Portfolio', hasDropdown: false },
    { href: '/contact', label: 'Contact', hasDropdown: false },
  ];

  return (
    <nav
      className={cn(
        'w-full bg-background-primary py-2 px-28 flex justify-between items-center fixed top-0 z-50',
        className
      )}
    >
      <Link href='/'>
        <div>
          <Image src={logo} alt='Logo' width={70} height={70} />
        </div>
      </Link>

      <div className='hidden lg:flex font-medium items-center text-xl gap-10'>
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            hasDropdown={link.hasDropdown}
          />
        ))}
      </div>

      <div className='hidden lg:block'>
        <Button
          size='lg'
          className='bg-blue-primary hover:bg-blue-primary text-lg px-4 hover:shadow-md text-white hover:scale-110 transition-transform duration-200'
        >
          Get Started Today!
        </Button>
      </div>

      <button
        className='lg:hidden p-2 focus:outline-none'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className='lg:hidden fixed inset-0 top-[73px] bg-background z-40'>
          <div className='flex flex-col p-8'>
            <div className='flex flex-col gap-6 mb-8'>
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} onClick={closeMenu} />
              ))}
            </div>
            <Button size='lg' className='w-full bg-blue-primary text-white' onClick={closeMenu}>
              Get Started Today!
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
