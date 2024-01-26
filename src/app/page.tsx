import NavBar from '@/app/pages/navbar/navbar';
import LandingPage from './pages/landingPage/page';
import AboutUs from './pages/aboutUs/page';
import OurModules from './pages/modules/page';
import OurTeam from './pages/team/page';
import WhyUs from './pages/whyUs/page';
import Footer from './pages/footer/page';
import Brief from './pages/brief/page';
import Projects from './pages/projects/page';
import Questions from './pages/questions/page';
import Areas from './pages/areas/page';

export default function App() {

  return (
    <>
      <NavBar />
      <LandingPage />
      <AboutUs id="aboutUs" />
      <OurTeam />
      <Areas />
      <Brief />
      <WhyUs />
      <Projects />
      <OurModules />
      <Questions />
      <Footer />
    </>
  );
}
