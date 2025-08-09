'use client';

import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SupportSectionProps {
  description: string;
  buttonText: string;
  image: string | StaticImageData;
  imageAlt: string;
  className?: string;
  reversed?: boolean;
}

export default function SupportSection({
  description,
  buttonText,
  image,
  imageAlt,
  className,
}: SupportSectionProps) {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-center px-4 py-16 md:px-8 lg:px-28',
        className,
      )}
    >
      <div className='container mx-auto'>
        <div
          className={`flex w-full flex-col items-center gap-8 p-5 lg:flex-row lg:gap-0`}
        >
          <div className='w-full border-l-4 border-gray-300 bg-white/15 lg:w-1/2'>
            <div className='relative h-full overflow-hidden pl-6'>
              <Image
                src={image}
                alt={imageAlt}
                className='h-auto w-full rounded-tl-lg rounded-bl-lg object-cover'
                width={400}
                height={300}
                priority
              />
            </div>
          </div>

          <div className='flex min-h-[340px] w-full flex-col justify-center space-y-6 bg-white p-8 shadow-lg lg:w-1/2 lg:p-12'>
            <h2 className='text-4xl font-bold sm:text-5xl'>
              {`We're Here For You`}
            </h2>

            <p className='text-lg'>{description}</p>

            <div>
              <Button
                className='rounded-full bg-yellow-500/65 px-6 py-2 font-semibold text-black hover:bg-yellow-500'
                asChild
              >
                <Link href='https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0'>
                  {buttonText} →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
