'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import portfolio1 from '../../../../public/assets/portfolio-1.png';
import portfolio2 from '../../../../public/assets/portfolio-2.png';
import portfolio3 from '../../../../public/assets/portfolio-3.png';
import portfolio4 from '../../../../public/assets/portfolio-4.png';
import portfolio5 from '../../../../public/assets/portfolio.png';
import { orbitron } from '@/lib/font';

interface PortfolioItemProps {
  title: string;
  image: string | StaticImageData;
  link: string;
  className?: string;
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: 'AOTC Cosmetics',
    image: portfolio5,
    link: '/portfolio/payment-gateway',
  },
  {
    title: 'Nosh Kitchen Website ',
    image: portfolio1,
    link: '/portfolio/aotc-cosmetics',
  },
  {
    title: 'Michelah Event Organizer Singapore',
    image: portfolio2,
    link: '/portfolio/nosh-kitchen',
  },
  {
    title: 'Joywaltzstudio Academy',
    image: portfolio3,
    link: '/portfolio/michelah-event',
  },
  {
    title: 'Octopay Payment',
    image: portfolio4,
    link: '/portfolio/pianist-explorer',
  },
];

function PortfolioItem({ title, image, link, className }: PortfolioItemProps) {
  return (
    <div
      className={cn('group flex h-full flex-col overflow-hidden', className)}
    >
      <div className='relative h-52 w-56 overflow-hidden rounded-xl'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover object-top transition-transform duration-300 group-hover:scale-105'
          priority
        />
      </div>
      <Link href={link} className='w-56'>
        <h1 className='flex h-20 py-4 text-left text-xl font-medium text-white'>
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id='portfolio' className='bg-blue-primary w-full scroll-smooth'>
      <div className='container mx-auto px-4 py-16 md:px-8 lg:px-28'>
        <h2
          className={`${orbitron.className} mb-12 text-left text-5xl font-bold text-white`}
        >
          Our Portfolio
        </h2>
        <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-12'>
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
