import Labs from '@/section/service/labs/labs';
import webMainImage from '../../../../public/assets/1.png';
import HeroService from '@/section/service/hero-service/hero-service';
import toolBox from '../../../../public/assets/toolbox.png';
import OurAdvantages from '@/components/our-advantages/our-advantages';
import SupportSection from '@/components/support-section/support-section';
import SupportImg from '../../../../public/assets/cta1.png';

export default function WebMain() {
  return (
    <div className='min-h-screen items-center justify-items-center gap-16 font-sans'>
      <main className='flex w-full flex-col items-center justify-center'>
        <HeroService
          title='Website Maintenance'
          description='“Comprehensive Website Maintenance Services (WAMS)”'
          image={webMainImage}
          imageAlt='HeroImg'
        />
        <Labs
          image={toolBox}
          imageAlt='ToolBox'
          description='Your website is a vital part of your business, and keeping it in
              top shape is essential. CO2 Labs offers reliable website
              maintenance solutions to ensure your site remains secure,
              up-to-date, and performing at its best.'
        />
        <OurAdvantages
          advantages={[
            {
              title: 'Regular Updates',
              description:
                'We keep your website up to date with the latest software and plugin updates to ensure compatibility and security.',
            },
            {
              title: 'Security Monitoring',
              description:
                'Our team monitors your site 24/7 to detect and prevent any security threats, protecting your data and reputation.',
            },
            {
              title: 'Performance Optimization',
              description:
                'We regularly analyze and optimize your site’s performance to ensure fast loading times and a seamless user experience.',
            },
            {
              title: 'Content Management',
              description:
                'Need to update content or add new features? Our team is here to help with timely content updates and enhancements.',
            },
          ]}
        />
        <SupportSection
          image={SupportImg}
          imageAlt='support img'
          buttonText='Get a Free Quote ->'
          description='Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing your site is in expert hands. Contact us today to learn more about our services.'
        />
      </main>
    </div>
  );
}
