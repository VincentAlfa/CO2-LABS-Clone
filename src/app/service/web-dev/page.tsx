import Labs from '@/section/service/labs/labs';
import webMainImage from '../../../../public/assets/2.png';
import HeroService from '@/section/service/hero-service/hero-service';
import uiUx from '../../../../public/assets/uiux.png';
import OurAdvantages from '@/components/our-advantages/our-advantages';
import SupportSection from '@/components/support-section/support-section';
import SupportImg from '../../../../public/assets/cta1.png';

export default function WebDev() {
  return (
    <div className='min-h-screen items-center justify-items-center gap-16 font-sans'>
      <main className='flex w-full flex-col items-center justify-center'>
        <HeroService
          title='Website & App Development'
          description='“Innovative Website & App Development Solutions”'
          image={webMainImage}
          imageAlt='HeroImg'
        />
        <Labs
          image={uiUx}
          imageAlt='ui-ux'
          description='CO2 Labs provides innovative website and app development solutions tailored to help your business thrive in the digital age. Our experienced team leverages the latest technologies to create dynamic and engaging digital experiences.'
        />
        <OurAdvantages
          advantages={[
            {
              title: 'Website Design & Development',
              description:
                'Our holistic approach to web development ensures a seamless blend of aesthetics and functionality, creating a powerful online presence for your brand.',
            },
            {
              title: 'Mobile App Development',
              description:
                'We develop mobile apps that offer excellent performance, intuitive user interfaces, and robust functionality, available for both iOS and Android platforms.',
            },
            {
              title: 'E-commerce Solutions',
              description:
                'We build scalable e-commerce platforms that provide a seamless shopping experience, boosting your online sales and customer satisfaction.',
            },
            {
              title: 'UX/UI Design',
              description:
                'Our user-centric design process focuses on creating intuitive and engaging interfaces that enhance user satisfaction and loyalty.',
            },
            {
              title: 'Integration Services',
              description:
                'We seamlessly integrate third-party services and APIs to enhance the functionality of your website or app.',
            },
          ]}
        />
        <SupportSection
          image={SupportImg}
          imageAlt='support img'
          buttonText='Kick Start Your Project'
          description='Let CO2 Labs transform your digital presence with our top-tier website and app development services. Contact us to start your project today.'
        />
      </main>
    </div>
  );
}
