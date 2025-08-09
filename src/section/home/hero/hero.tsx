'use client';

import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import heroBg from '../../../../public/assets/backdrop.png';
import { orbitron } from '@/lib/font';

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
        'mt-24 flex h-screen w-full flex-col items-center justify-between py-8 pl-4 md:py-8 md:pl-8 lg:pl-28',
        className,
      )}
    >
      <div
        className={`flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } w-full items-center justify-between gap-8`}
      >
        <div className='animate-fade-right animate-once animate-duration-1000 animate-ease-out animate-fill-forwards my-8 flex w-full flex-col items-center space-y-3 text-center lg:my-0 lg:w-1/2 lg:items-start lg:text-left'>
          <h1
            className={`${orbitron.className} max-w-2xl text-5xl/5 leading-tight font-bold sm:text-6xl/15`}
          >
            Where Code Meets <br />
          </h1>
          <h1
            className={`${orbitron.className} bg-blue-primary font-orbitron px-2 text-5xl/5 text-white sm:text-6xl/20`}
          >
            Creativity
          </h1>
          {subtitle && typeof subtitle === 'string' ? (
            <p className='max-w-2xl text-lg'>{subtitle}</p>
          ) : (
            subtitle
          )}

          <div className='animate-fade-up animate-once animate-duration-1000 animate-ease-out animate-fill-forwards pt-4'>
            <Button
              size='lg'
              className='bg-blue-primary rounded-md px-4 py-3 text-lg text-white transition-transform duration-200 hover:scale-105 hover:bg-[#1a3650]/90 hover:shadow-md'
              asChild
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>

        <div className='relative flex w-full justify-center lg:w-1/2'>
          <div className={`absolute -top-32 right-0 z-0`}>
            <Image
              src={heroBg}
              alt='Hero Background'
              width={400}
              height={100}
              className='object-cover'
              priority
            />
          </div>
          <div className='relative max-w-md'>
            <Image
              src={image}
              alt={imageAlt}
              className='animate-fade-left animate-once animate-duration-1000 animate-ease-out animate-fill-forwards rounded-2xl object-contain'
              width={400}
              height={350}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
