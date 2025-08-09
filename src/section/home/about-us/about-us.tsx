'use client';

import Image from 'next/image';
import teamImage from '../../../../public/assets/team.png';

export default function AboutUsSection() {
  return (
    <section className='relative h-screen w-full px-4 py-16 md:px-8 lg:px-12'>
      <div className='flex flex-col items-center'>
        <div className='flex w-full flex-col items-center justify-between gap-8 md:gap-12 lg:flex-row'>
          <div className='h-full w-full lg:w-1/2 lg:text-left'>
            <h1 className='mb-8 text-right text-5xl font-bold md:text-6xl'>
              About Us
            </h1>
            <p className='text-right text-lg leading-relaxed md:text-2xl'>
              At CO2 Labs, we strive to provide simple yet powerful software
              solutions and expert consultation to help your business thrive in
              the digital world.
            </p>
            <div className='w-full pt-12 xl:w-[600px]'>
              <svg
                className='w-full'
                height='81'
                viewBox='0 0 710 81'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10'
                  stroke='#EDEAE3'
                  strokeWidth='20'
                  strokeLinecap='round'
                ></path>
              </svg>
            </div>
          </div>

          <div className='flex w-full justify-center lg:w-1/2'>
            <div className='relative max-w-md'>
              <Image
                src={teamImage}
                alt='Team members with lightbulbs'
                className='rounded-lg shadow-lg'
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
