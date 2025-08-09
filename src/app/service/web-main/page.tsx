import webMainImage from '../../../../public/assets/1.png';
import HeroService from '@/section/service/hero-service/hero-service';

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
      </main>
    </div>
  );
}
