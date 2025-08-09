'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
  <Link
    href={href}
    className='hover:bg-accent flex gap-4 rounded-md p-4 transition-colors'
  >
    <div className='bg-accent/50 h-fit rounded-md p-2'>{icon}</div>
    <div>
      <h3 className='font-medium'>{title}</h3>
      <p className='text-muted-foreground text-sm'>{description}</p>
    </div>
  </Link>
);

const NavLink = ({ href, label, onClick, hasDropdown }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      if (onClick) onClick();
    }
  };

  const services = [
    {
      icon: <SlidersHorizontal className='text-pink-400' size={36} />,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly and securely',
      href: '/service/web-main',
    },
    {
      icon: <Code className='text-yellow-400' size={36} />,
      title: 'Website & App Development',
      description:
        'Transform your online presence with our custom platform design solutions.',
      href: '/service/web-dev',
    },
    {
      icon: <GitFork className='text-green-400' size={36} />,
      title: 'IT Support',
      description:
        'Experience peace of mind with our reliable IT support services.',
      href: '/service/it-support',
    },
    {
      icon: <Diamond className='text-purple-400' size={36} />,
      title: '3rd Party AI Solution',
      description:
        'Leverage our expertise to find the best third-party services for your business.',
      href: '/service/ai-solution',
    },
  ];

  return (
    <div
      className='relative flex cursor-pointer items-center justify-center'
      onMouseEnter={() => hasDropdown && setIsHovered(true)}
      onMouseLeave={() => hasDropdown && setIsHovered(false)}
    >
      <Link
        href={href}
        onClick={handleClick}
        className='text-foreground hover:text-primary flex items-center gap-1 transition-colors'
      >
        <span className='inline-flex items-center justify-center'>
          {label}
          {hasDropdown && (
            <ChevronDown
              className={cn('mt-2 ml-2', isHovered ? 'rotate-180' : 'rotate-0')}
              size={18}
            />
          )}
        </span>
      </Link>

      {hasDropdown && isHovered && (
        <div className='bg-background absolute top-full left-0 z-50 mt-2 grid w-[800px] grid-cols-2 gap-2 rounded-lg border p-3 shadow-lg'>
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

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const services = [
    {
      title: 'Website Maintenance',
      href: '/service/web-main',
    },
    {
      title: 'Website & App Development',
      href: '/service/web-dev',
    },
    {
      title: 'IT Support',
      href: '/service/it-support',
    },
    {
      title: '3rd Party AI Solution',
      href: '/service/ai-solution',
    },
  ];

  const navLinks = [
    { href: '/services', label: 'Our Services', hasDropdown: true },
    { href: '#about-us', label: 'About Us', hasDropdown: false },
    { href: '#portfolio', label: 'Portfolio', hasDropdown: false },
    { href: '#contact', label: 'Contact', hasDropdown: false },
  ];

  return (
    <nav
      className={cn(
        'bg-background-primary fixed top-0 z-50 flex w-full items-center justify-between px-8 py-2 md:px-16 lg:px-28',
        className,
      )}
    >
      <Link href='/'>
        <div>
          <Image src={logo} alt='Logo' width={70} height={70} />
        </div>
      </Link>

      <div className='hidden items-center gap-10 text-xl font-medium lg:flex'>
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
          className='bg-blue-primary hover:bg-blue-primary px-4 text-lg text-white transition-transform duration-200 hover:scale-110 hover:shadow-md'
        >
          Get Started Today!
        </Button>
      </div>

      <Button
        size={'lg'}
        className='bg-background-primary p-0 lg:hidden'
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <X size={24} />
        ) : (
          <Menu className='size-8 p-0 text-black' size={24} />
        )}
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 flex lg:hidden'>
          <div className='fixed inset-0 bg-black/50' onClick={closeMenu}></div>
          <div className='relative h-full w-[85%] max-w-sm transform overflow-auto bg-white transition-transform'>
            <div className='flex h-full flex-col'>
              <div className='flex items-center justify-between p-4'>
                <Button variant='ghost' onClick={closeMenu} className='p-1'>
                  <X size={24} />
                </Button>
              </div>

              <div className='flex flex-col px-4 py-2'>
                <div className='mb-4'>
                  <h2 className='mb-2 px-0  bg-slate-50 text-xl font-semibold'>
                    Our Services
                  </h2>
                  <ul className='list-disc space-y-2 pl-5'>
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className='hover:text-primary font-medium'
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href='#about-us'
                  className='bg-slate-50 py-3 text-lg font-medium'
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <Link
                  href='#portfolio'
                  className='bg-slate-50 py-3 text-lg font-medium'
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>

                <Link
                  href='contact'
                  className='bg-slate-50 py-3 text-lg font-medium'
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>

              <div className='mt-auto p-4'>
                <Button
                  className='bg-blue-primary w-full rounded-sm py-6 text-white'
                  onClick={closeMenu}
                >
                  Get Started Today!
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
