import {
  AboutUsSection,
  ContactSection,
  HeroSection,
  MethodologySection,
  OurService,
  PortfolioSection,
  TeamSection,
} from '@/section';
import heroImage from '../../public/assets/heroimg.png';

export default function Home() {
  return (
    <div className='min-h-screen items-center justify-items-center gap-16 font-sans'>
      <main className='flex w-full flex-col items-center justify-center'>
        <HeroSection
          buttonText='Get Free Consult'
          image={heroImage}
          imageAlt='HeroImg'
          subtitle='Harnessing the power of our Coding Collective to build solutions for your business needs.'
        />
        <OurService />
        <MethodologySection />
        <AboutUsSection />
        <TeamSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}
