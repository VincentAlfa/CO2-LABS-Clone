import heroImage from '../../public/assets/heroimg.png';
import HeroSection from '@/components/hero/hero';

export default function Home() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen gap-16 sm:p-20'>
      <main className='flex flex-col items-center justify-center w-full'>
        <HeroSection
          buttonText='Get Free Consult'
          image={heroImage}
          imageAlt='HeroImg'
          subtitle='Harnessing the power of our Coding Collective to build solutions for your business needs.'
          
        />
      </main>
    </div>
  );
}
