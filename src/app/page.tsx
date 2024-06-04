import Navbar from '@/common/nav-bar';
import BenefitSection from './_components/benefits-section';
import HeroSection from './_components/hero-section';
import PositionSection from './_components/position-section';
import RecurringThemes from './_components/recurring-section';
import Footer from '@/common/footer';

export default function Home() {
  return (
    <main className=' bg-[var(--neutral)] pb-32'>
      <div className=' text-center mx-auto'>
        <HeroSection />
        <BenefitSection />
        <RecurringThemes />
        <PositionSection />
      </div>
    </main>
  );
}
