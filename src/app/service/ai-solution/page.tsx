import Labs from '@/section/service/labs/labs';
import webMainImage from '../../../../public/assets/4.png';
import HeroService from '@/section/service/hero-service/hero-service';
import robot from '../../../../public/assets/robot.png';
import OurAdvantages from '@/components/our-advantages/our-advantages';
import SupportSection from '@/components/support-section/support-section';
import SupportImg from '../../../../public/assets/cta1.png';

export default function AiSolution() {
  return (
    <div className='min-h-screen items-center justify-items-center gap-16 font-sans'>
      <main className='flex w-full flex-col items-center justify-center'>
        <HeroService
          title='Third Party AI Tools'
          description='“Harness the Power of Third-Party AI Tools”'
          image={webMainImage}
          imageAlt='HeroImg'
        />
        <Labs
          image={robot}
          imageAlt='robot'
          description='CO2 Labs helps you harness the power of third-party AI tools to enhance your business operations and drive innovation. Our team is skilled in integrating and customizing AI solutions to meet your specific needs.'
        />
        <OurAdvantages
          advantages={[
            {
              title: 'AI-Powered Insights',
              description:
                'Gain actionable insights through AI-powered data analysis and visualization tools.',
            },
            {
              title: 'Machine Learning Models',
              description:
                'Implement machine learning models to predict outcomes, optimize processes, and improve decision-making.',
            },
            {
              title: 'Natural Language Processing',
              description:
                'Utilize NLP tools to enhance customer interactions, automate content generation, and improve communication.',
            },
            {
              title: 'AI for Marketing',
              description:
                'Boost your marketing efforts with AI-driven personalization, customer segmentation, and predictive analytics.',
            },
            {
              title: 'Automation',
              description:
                'Leverage AI to automate routine tasks, freeing up valuable time and resources for more strategic activities.',
            },
            {
              title: 'Data Analysis',
              description:
                'Use advanced AI algorithms to analyze large datasets, uncovering valuable insights and trends.',
            },
          ]}
        />
        <SupportSection
          image={SupportImg}
          imageAlt='support img'
          buttonText='Learn More About AI Intergration ->'
          description='Unlock new possibilities with third-party AI tools integrated by CO2 Labs. Contact us to explore how AI can transform your business.'
        />
      </main>
    </div>
  );
}
