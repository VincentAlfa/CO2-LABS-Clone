'use client';

import MethodologyItem from '@/components/methodology-item/methodology-item';
import { orbitron } from '@/lib/font';
import { useState, useRef } from 'react';

export default function Methodology() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseLeaveSection = () => {
    setHoveredItem(null);
  };

  return (
    <section
      className='h-screen w-full px-4 py-16 md:px-8 lg:px-28'
      ref={sectionRef}
      onMouseLeave={handleMouseLeaveSection}
    >
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <h1 className={`${orbitron.className} mb-4 text-5xl font-bold`}>
            ACE
          </h1>
          <h2 className='text-3xl'>Methodology for Strategic Consulting</h2>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <MethodologyItem
            id='assessment'
            title='Assessment'
            className='bg-background-secondary'
            subtitle='& Insight Gathering'
            isHovered={hoveredItem === 'assessment'}
            onMouseEnter={() => setHoveredItem('assessment')}
            onMouseLeave={() => {}}
            content={
              <div className='space-y-4'>
                <p>
                  We begin by thoroughly understanding your business, goals, and
                  challenges through:
                </p>
                <ul className='list-disc space-y-2 pl-5'>
                  <li>Stakeholder interviews and workshops</li>
                  <li>Data collection and analysis</li>
                  <li>Market research and competitive analysis</li>
                  <li>Technical assessment and infrastructure review</li>
                </ul>
              </div>
            }
          />

          <MethodologyItem
            id='customization'
            title='Customization'
            subtitle='& Strategic Planning'
            className='bg-background-tertiary'
            isHovered={hoveredItem === 'customization'}
            onMouseEnter={() => setHoveredItem('customization')}
            onMouseLeave={() => {}}
            content={
              <div className='space-y-4'>
                <p>
                  We then develop a strategic plan and design tailored solutions
                  that address your specific needs. This involves detailed
                  planning, resource allocation, and design of bespoke solutions
                  that align with your goals.
                </p>
                <ul className='list-disc space-y-2 pl-5'>
                  <li>Strategic planning sessions</li>
                  <li>Solution design and prototyping</li>
                  <li>Resource and timeline planning</li>
                  <li>Risk assessment and mitigation planning</li>
                </ul>
              </div>
            }
          />

          <MethodologyItem
            id='execution'
            title='Execution'
            subtitle='& Lifecycle Management'
            className='bg-background-secondary'
            isHovered={hoveredItem === 'execution'}
            onMouseEnter={() => setHoveredItem('execution')}
            onMouseLeave={() => {}}
            content={
              <div className='space-y-4'>
                <p>
                  Finally, we implement the planned solutions and provide
                  ongoing support:
                </p>
                <ul className='list-disc space-y-2 pl-5'>
                  <li>Agile implementation and delivery</li>
                  <li>Quality assurance and testing</li>
                  <li>Training and knowledge transfer</li>
                  <li>Continuous improvement and optimization</li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
