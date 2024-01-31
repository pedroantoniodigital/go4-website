import NavBar from '@/app/navbar/navbar';
import LandingPage from './landingPage/page';
import AboutUs from './aboutUs/page';
import OurModules from './modules/page';
import Footer from './footer/page';
import Brief from './brief/page';
import Projects from './projects/page';
import Questions from './questions/page';
import Areas from './areas/page';
import OurTeam from './team/page';
import WhyUs from './whyUs/page';
import Clients from './clients/page';
import RocketButton from '@/components/rocketButton/rocketButton';

export default function App() {

  return (
    <>
      <LandingPage />
      <AboutUs />
      <OurTeam />
      <Areas />
      <Brief />
      <WhyUs />
      <Projects />
      <OurModules />
      <Clients />
      <Questions />
      <Footer />
      <RocketButton />
    </>
  );
}
