import ServiceCard from '@/components/service-card/service-card';
import { orbitron } from '@/lib/font';
import { SlidersHorizontal, CodeXml, GitFork, Diamond } from 'lucide-react';

export default function OurService() {
  const services = [
    {
      icon: <SlidersHorizontal className='text-blue-primary' size={32} />,
      title: 'Website Maintenance',
      description:
        'Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime, Ensure security',
      href: '/services/maintenance',
    },
    {
      icon: <CodeXml className='text-blue-primary' size={32} />,
      title: 'Website & App Development',
      description:
        'Transform your online presence with our custom website design solutions. From stunning visuals to seamless functionality.',
      href: '/services/development',
    },
    {
      icon: <GitFork className='text-blue-primary' size={32} />,
      title: 'IT Support',
      description:
        'Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance.',
      href: '/services/support',
    },
    {
      icon: <Diamond className='text-blue-primary' size={32} />,
      title: '3rd Party AI Solution',
      description:
        'Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide.',
      href: '/services/ai-solutions',
    },
  ];

  return (
    <section className='bg-blue-primary h-screen w-full px-20 py-20'>
      <div className='container mx-auto'>
        <h2 className={`${orbitron.className} mb-8 text-4xl font-bold text-white md:text-4xl lg:text-5xl`}>
          Our Services
        </h2>

        <div className='animate-fade animate-once animate-duration-1000 animate-ease-out animate-fill-forwards grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
