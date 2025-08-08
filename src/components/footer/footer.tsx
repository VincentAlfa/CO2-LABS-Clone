'use client';

import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Mail, Map, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#1A1A1A] px-4 py-12 text-white md:px-8 lg:px-28'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-16 md:grid-cols-[2fr_3fr]'>
          <div className='max-w-md space-y-3'>
            <h2 className='text-3xl font-extrabold'>{`Let's Grow With CO2 Labs`}</h2>
            <p className='text-xl'>Get Exclusive Updates From Us</p>
            <div className='flex'>
              <Input
                type='email'
                placeholder='Yourmail@example.com'
                className='w-full rounded-l-full bg-white px-4 py-4 text-gray-800'
              />
              <Button className='font- bold rounded-r-full bg-yellow-500 px-6 py-4 text-black hover:bg-yellow-500'>
                Subscribe
              </Button>
            </div>
          </div>

          <div className='flex gap-5 space-y-8'>
            <div className=''>
              <h3 className='text-xl font-bold'>Services</h3>
              <ul className='text-gray-400'>
                <li className='flex items-center gap-2'>
                  <span className=''>•</span>
                  <Link href='/services/web-maintenance'>Web Maintenance</Link>
                </li>
                <li className='flex items-center gap-2'>
                  <span className=''>•</span>
                  <Link href='/services/web-app-development'>
                    Web & App Development
                  </Link>
                </li>
                <li className='flex items-center gap-2'>
                  <span className=''>•</span>
                  <Link href='/services/it-service'>IT Service</Link>
                </li>
                <li className='flex items-center gap-2'>
                  <span className=''>•</span>
                  <Link href='/services/ai-solution'>
                    3rd Party AI Solution
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold'>About</h3>
              <ul className='text-gray-400'>
                <li className='flex items-start gap-2'>
                  <span className=''>•</span>
                  <Link href='/about/approach'>Our Approach</Link>
                </li>
                <li className='flex items-center gap-2'>
                  <span className=''>•</span>
                  <Link href='/about/team'>Our Team</Link>
                </li>
                <li className='flex items-start gap-2'>
                  <span className=''>•</span>
                  <Link href='/portfolio'>Our Portfolio</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold'>Contact</h3>
              <ul className='text-gray-400'>
                <li className='flex items-center gap-2'>
                  <Phone />
                  <a href='tel:+6581181595'>+65-8118-1595</a>
                </li>
                <li className='flex items-center gap-2'>
                  <Mail />
                  <a href='mailto:info@co2labs.com'>info@co2labs.com</a>
                </li>
                <li className='flex items-center gap-2'>
                  <Map />
                  <span>100D Pasir Panjang Road</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <p className='text-gray-400'>©2024 CO2 Labs. All Right Reserved</p>
          <div className='mt-4 flex gap-8 md:mt-0'>
            <Link href='/faq' className='text-gray-400 hover:text-white'>
              FAQ
            </Link>
            <Link href='/terms' className='text-gray-400 hover:text-white'>
              Terms & Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
