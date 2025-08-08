import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className='flex h-full flex-col items-center rounded-lg bg-white p-8 text-center'>
      <div className='mb-6 rounded-full bg-gray-100 p-6'>{icon}</div>
      <h3 className='mb-4 text-xl font-bold'>{title}</h3>
      <p className='mb-6 line-clamp-4 flex-grow font-semibold text-black'>
        {description}
      </p>
      <Link
        href={href}
        className='text-blue-primary font-medium hover:underline'
      >
        View More
      </Link>
    </div>
  );
}
