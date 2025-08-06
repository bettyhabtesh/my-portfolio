
import './index.css';
import HeroSection from './Components/heroSection';
import AboutMe from './Components/aboutMe';
import Services from './Components/services';
import ProjectsPage from './Components/projects';
import ContactMe from './Components/contactMe';
import Footer from './Components/footer';
import './style.css';
import SplashCursor from './animation/SplashCursor';
function App() {
  return (
    <div className="App font-montserrat">
      <SplashCursor/>
      <HeroSection/>
      <AboutMe/>
      <Services/>
      <ProjectsPage/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
