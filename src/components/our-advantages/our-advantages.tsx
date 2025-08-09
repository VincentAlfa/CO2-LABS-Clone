'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { orbitron } from '@/lib/font';

interface AdvantageItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface OurAdvantagesProps {
  advantages: AdvantageItem[];
  className?: string;
}

export default function OurAdvantages({
  advantages,
  className,
}: OurAdvantagesProps) {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-center px-4 py-16 md:px-8 lg:px-28',
        className,
      )}
    >
      <div className='container mx-auto'>
        <div className='flex w-full flex-col lg:flex-row'>
          <div className='mb-12 w-full lg:mb-0 lg:w-1/2'>
            <h2
              className={`${orbitron.className} text-3xl leading-tight font-bold sm:text-4xl md:text-5xl`}
            >
              OUR
              <br />
              ADVANTAGES
            </h2>
          </div>

          <div className='w-full lg:w-1/2'>
            <div className='relative space-y-12'>
              {advantages.map((advantage, index) => (
                <div key={index} className='relative'>
                  <div className='absolute top-1 left-0 h-7 w-7 rounded-full border-4 bg-gray-400'></div>

                  <h3 className='mb-3 pl-12 text-xl font-bold break-words sm:text-2xl md:text-3xl'>
                    {advantage.title}
                  </h3>

                  <div className='ml-12 max-w-full overflow-hidden rounded-md p-4 shadow-lg sm:p-6'>
                    <div className='absolute bottom-0 left-[14px] -z-10 h-[calc(100%-48px)] w-0.5 bg-gray-400'></div>
                    <p className='text-base sm:text-lg'>
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
