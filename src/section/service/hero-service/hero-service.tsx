'use client';

import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { orbitron } from '@/lib/font';
import heroBg from '../../../../public/assets/backdrop.png';
import comma from '../../../../public/assets/com.png';

interface HeroServiceProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  className?: string;
}

export default function HeroService({
  title,
  description,
  image,
  imageAlt,
  className,
}: HeroServiceProps) {
  return (
    <section
      className={cn(
        'mt-24 flex w-full flex-col items-center justify-between py-8 pl-4 md:py-8 md:pl-8 lg:pl-28',
        className,
      )}
    >
      <div className='flex w-full flex-col items-center justify-between gap-8 lg:flex-row'>
        <div className='animate-fade-right animate-once animate-duration-1000 animate-ease-out animate-fill-forwards relative my-8 flex w-full flex-col space-y-3 lg:my-0 lg:w-1/2 lg:items-start lg:pr-6'>
          <div>
            <Image
              src={comma}
              alt='Comma'
              width={100}
              height={100}
              className='animate-fade-left animate-once animate-duration-1000 animate-ease-out animate-fill-forwards absolute -top-12 -left-12 -z-10'
            />
          </div>
          <h1
            className={`${orbitron.className} text-4xl font-bold sm:text-5xl`}
          >
            {title}
          </h1>
          <div className='mt-4'>
            <p className='text-xl font-medium'>{description}</p>
          </div>
          <div className='mt-2 h-1 w-56 bg-black'></div>
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
