import OurService from '@/section/our-service/our-service';
import heroImage from '../../public/assets/heroimg.png';
import HeroSection from '@/section/hero/hero';
import Methodology from '@/section/methodology/methodology';
import AboutUsSection from '@/section/about-us/about-us';
import TeamSection from '@/section/team/team';
import PortfolioSection from '@/section/portfolio/portfolio';

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
        <Methodology />
        <AboutUsSection />
        <TeamSection />
        <PortfolioSection />
      </main>
    </div>
  );
}
