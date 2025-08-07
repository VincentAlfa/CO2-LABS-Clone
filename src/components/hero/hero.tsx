'use client';

import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import heroBg from '../../../public/assets/backdrop.png';

interface HeroSectionProps {
  subtitle: string | ReactNode;
  buttonText: string;
  buttonLink?: string;
  image: string | StaticImageData;
  imageAlt: string;
  className?: string;
  reversed?: boolean;
}

export default function HeroSection({
  subtitle,
  buttonText,
  buttonLink = '/contact',
  image,
  imageAlt,
  className,
  reversed = false,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'w-full py-8 md:py-8 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-between',
        className
      )}
    >
      <div
        className={`flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } w-full items-center justify-between gap-8`}
      >
        <div className='w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 my-8 lg:my-0'>
          <h1 className='text-5xl sm:text-6xl font-bold leading-tight max-w-2xl'>
            Where Code Meets <br />
            <span className='px-2 bg-blue-primary text-white'>Creativity</span>
          </h1>
          {subtitle && typeof subtitle === 'string' ? (
            <p className='text-lg max-w-2xl'>{subtitle}</p>
          ) : (
            subtitle
          )}

          <div className='pt-4'>
            <Button
              size='lg'
              className='bg-[#1a3650] hover:bg-[#1a3650]/90 text-white hover:shadow-md hover:scale-105 transition-transform duration-200 text-lg px-8 py-3 rounded-md'
              asChild
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className={`absolute right-0 top-20 z-0`}>
            <Image
              src={heroBg}
              alt='Hero Background'
              width={500}
              height={200}
              objectFit='cover'
              priority
            />
          </div>
          <div className='relative max-w-md'>
            <Image
              src={image}
              alt={imageAlt}
              className='object-contain rounded-2xl'
              width={500}
              height={350}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
