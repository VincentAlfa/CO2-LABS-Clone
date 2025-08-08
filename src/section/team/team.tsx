'use client';

import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { orbitron } from '@/lib/font';
import profile1 from '../../../public/assets/profile1.jpeg';
import profile2 from '../../../public/assets/profile2.jpeg';
import profile3 from '../../../public/assets/profile3.jpeg';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
}

const TeamMember = ({
  name,
  title,
  description,
  imageSrc,
}: TeamMemberProps) => {
  return (
    <div className='relative transform pt-24 transition-all duration-300 ease-in-out hover:scale-105'>
      <Card className='flex h-[350px] flex-col items-center text-center shadow-md transition-all duration-300 hover:shadow-xl sm:h-[400px] md:h-[450px] lg:h-[420px]'>
        <CardContent className='flex flex-col items-center gap-1 px-10 pt-16'>
          <h3 className='text-xl font-bold'>{name}</h3>
          <p className='text-md font-semibold'>{title}</p>
          <p className='pt-3 text-xs font-medium'>{description}</p>
        </CardContent>
      </Card>

      <div className='absolute -top-2 left-1/2 -translate-x-1/2 transform transition-transform duration-300'>
        <div className='bg-background-primary flex h-44 w-44 items-center justify-center rounded-full p-1 shadow-lg transition-all duration-300'>
          <Image
            src={imageSrc}
            alt={name}
            width={170}
            height={170}
            className='rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default function TeamSection({ className }: { className?: string }) {
  const teamMembers = [
    {
      name: 'Jay Chen',
      title: 'CEO',
      imageSrc: profile1,
      description:
        'Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his business by delivering exceptional service to renowned international brands.',
    },
    {
      name: 'Alune',
      title: 'Development Project Manager',
      imageSrc: profile2,
      description:
        'With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget. Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals. Her dedication to excellence and passion for innovation make her a driving force behind the success of every project she leads.',
    },
    {
      name: 'Ron',
      title: 'Business Development Lead',
      imageSrc: profile3,
      description:
        'With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies. Known for his ability to identify new opportunities and forge lasting relationships.',
    },
  ];

  return (
    <section className={cn('px-4 py-16 md:px-8 lg:px-12', className)}>
      <div className='container mx-auto'>
        <h2
          className={`${orbitron.className} mb-12 text-left text-4xl font-bold md:text-5xl`}
        >
          Our Team
        </h2>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
