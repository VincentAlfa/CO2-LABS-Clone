import Labs from '@/section/service/labs/labs';
import webMainImage from '../../../../public/assets/3.png';
import HeroService from '@/section/service/hero-service/hero-service';
import robot from '../../../../public/assets/robot.png';
import OurAdvantages from '@/components/our-advantages/our-advantages';
import SupportSection from '@/components/support-section/support-section';
import SupportImg from '../../../../public/assets/cta3.png';

export default function ItSupport() {
  return (
    <div className='min-h-screen items-center justify-items-center gap-16 font-sans'>
      <main className='flex w-full flex-col items-center justify-center'>
        <HeroService
          title='
IT Support Services'
          description='“Comprehensive IT Support Solutions”'
          image={webMainImage}
          imageAlt='HeroImg'
        />
        <Labs
          image={robot}
          imageAlt='robot'
          description='At CO2 Labs, we understand that effective IT support is crucial for your business success. Our comprehensive IT support solutions are tailored to meet the unique needs of your organization, providing you with peace of mind.'
        />
        <OurAdvantages
          advantages={[
            {
              title: '24/7 Support',
              description:
                'Round-the-clock IT support to address any technical issues whenever they arise.',
            },
            {
              title: 'Proactive Maintenance',
              description:
                'Regular maintenance and updates to prevent problems and ensure your systems run smoothly.',
            },
            {
              title: 'IT Consulting',
              description:
                'Expert advice and strategic planning to help you make informed decisions about your IT infrastructure.',
            },
            {
              title: 'Cybersecurity Services',
              description:
                'Protect your business from cyber threats with our partner third party security solutions, including firewalls, antivirus, and threat detection.',
            },
          ]}
        />
        <SupportSection
          image={SupportImg}
          imageAlt='support img'
          buttonText='Get IT Support'
          description='Trust CO2 Labs for dependable IT support that empowers your business. Reach out to us today to discover how we can support your IT needs.'
        />
      </main>
    </div>
  );
}
