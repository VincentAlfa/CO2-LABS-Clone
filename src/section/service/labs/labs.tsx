'use client';

import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { orbitron } from '@/lib/font';

interface LabsProps {
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  className?: string;
}

export default function Labs({
  image,
  imageAlt,
  className,
  description,
}: LabsProps) {
  return (
    <section
      className={cn(
        'bg-blue-primary flex min-h-screen w-full flex-col items-center justify-between px-4 py-16 text-white md:px-8 md:py-20 lg:px-28',
        className,
      )}
    >
      <div className='container mx-auto'>
        <div className='relative mb-12 overflow-hidden text-left'>
          <h1
            className={`${orbitron.className} absolute -top-10 -left-2 z-0 text-[80px] opacity-20 sm:text-[120px]`}
          >
            C02
          </h1>
          <h2
            className={`${orbitron.className} relative z-10 text-3xl font-bold tracking-wider sm:text-4xl`}
          >
            C02 LABS
          </h2>
        </div>

        <div className='flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12'>
          <div className='relative flex w-full justify-center lg:w-1/2'>
            <div className='relative mx-auto max-w-full sm:max-w-lg lg:mr-10'>
              <div className='to-blue-primary rounded-2xl bg-gradient-to-b from-[#ffffff]/20 p-6 pr-12 sm:p-10 sm:pr-36'>
                <Image
                  src={image}
                  alt={imageAlt}
                  className='animate-fade-left animate-once animate-duration-1000 animate-ease-out animate-fill-forwards rounded-xl object-contain'
                  width={200}
                  height={150}
                  priority
                />
              </div>
            </div>
          </div>
          <div className='animate-fade-right animate-once animate-duration-1000 animate-ease-out animate-fill-forwards my-8 flex w-full flex-col space-y-6 text-center lg:my-0 lg:w-1/2 lg:items-start lg:pr-6 lg:text-right'>
            <p className='text-xl leading-relaxed'>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
