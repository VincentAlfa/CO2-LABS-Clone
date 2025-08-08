'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface MethodologyItemProps {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  className?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MethodologyItem({
  title,
  subtitle,
  content,
  className,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: MethodologyItemProps) {
  return (
    <div
      className={cn(
        'flex h-[200px] pb-8  flex-col transition-all duration-300 ease-in-out', 
        isHovered ? 'bg-accent/20 h-[500px]' : 'bg-background',
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='p-8 pb-4'>
        <h2 className='mb-2 text-4xl font-bold'>{title}</h2>
        <p className='text-xl'>{subtitle}</p>
      </div>

      <div className='flex justify-center'>
        <ChevronDown
          className={cn(
            'transition-transform duration-300',
            isHovered ? 'rotate-180' : 'rotate-0',
          )}
          size={36}
        />
      </div>

      {isHovered && (
        <div className='animate-fade-down animate-once animate-duration-1000 animate-ease-out animate-fill-forwards p-6 pb-10'>
          {content}
        </div>
      )}
    </div>
  );
}
