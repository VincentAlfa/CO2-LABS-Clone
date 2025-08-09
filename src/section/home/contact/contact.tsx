'use client';

import { useState } from 'react';
import { orbitron } from '@/lib/font';
import { cn } from '@/lib/utils';
import { Mail, Phone, Pin } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function ContactSection({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    source: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setFormData((prev) => ({ ...prev, source: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id='contact'
      className={cn('w-full px-3 py-8 md:px-8 md:py-16 lg:px-28', className)}
    >
      <div className='container mx-auto'>
        <div className='mb-8 flex flex-col items-center justify-between sm:flex-row md:mb-16'>
          <h1
            className={`${orbitron.className} mb-4 text-center text-3xl font-bold sm:mb-0 sm:text-4xl md:text-5xl`}
          >
            Contact Us
          </h1>
          <div className='flex gap-6 md:gap-10'>
            <Pin size={30} className='md:size-40 lg:size-50' />
            <Mail size={30} className='md:size-40 lg:size-50' />
            <Phone size={30} className='md:size-40 lg:size-50' />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2'>
          <div className='rounded-lg bg-white p-4 shadow-md sm:p-6 md:p-8'>
            <h2 className='mb-4 text-2xl font-bold md:mb-8 md:text-3xl'>
              Hi there, how can we help?
            </h2>

            <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
              <div>
                <Input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  className='w-full rounded-md bg-gray-100 p-3 md:p-4'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  type='email'
                  name='email'
                  placeholder='Yourmail@example.com'
                  className='w-full rounded-md bg-gray-100 p-3 md:p-4'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Textarea
                  name='message'
                  placeholder='Ask Our About Services'
                  rows={3}
                  className='w-full resize-none rounded-md bg-gray-100 p-3 md:p-4'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <h3 className='mb-2 text-lg font-bold md:mb-4 md:text-xl'>
                  Where Did You Hear About Us?
                </h3>
                <div className='flex flex-wrap gap-3 md:gap-6'>
                  <Label className='inline-flex items-center text-sm md:text-base'>
                    <Checkbox
                      name='source'
                      value='LinkedIn'
                      onChange={handleRadioChange}
                      className='mr-1 md:mr-2'
                    />
                    LinkedIn
                  </Label>

                  <Label className='inline-flex items-center text-sm md:text-base'>
                    <Checkbox
                      name='source'
                      value='Instagram'
                      onChange={handleRadioChange}
                      className='mr-1 md:mr-2'
                    />
                    Instagram
                  </Label>

                  <Label className='inline-flex items-center text-sm md:text-base'>
                    <Checkbox
                      name='source'
                      value='Job Ads'
                      onChange={handleRadioChange}
                      className='mr-1 md:mr-2'
                    />
                    Job Ads
                  </Label>
                  <Label className='inline-flex items-center text-sm md:text-base'>
                    <Checkbox
                      name='source'
                      value='Events'
                      onChange={handleRadioChange}
                      className='mr-1 md:mr-2'
                    />
                    Events and Seminars
                  </Label>
                  <Label className='inline-flex items-center text-sm md:text-base'>
                    <Checkbox
                      name='source'
                      value='Other'
                      onChange={handleRadioChange}
                      className='mr-1 md:mr-2'
                    />
                    Other
                  </Label>
                </div>
              </div>

              <div>
                <Button
                  type='submit'
                  className='bg-blue-primary rounded-md px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#1a3650]/90 md:px-6 md:py-3 md:text-base'
                >
                  Send
                </Button>
              </div>
            </form>
          </div>

          <div className='h-full'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8285447954618!2d103.79339287436352!3d1.2762577987116106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sid!4v1754693734590!5m2!1sen!2sid'
              width='100%'
              height='100%'
              style={{ minHeight: '300px', border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
