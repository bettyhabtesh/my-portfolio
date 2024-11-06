
import './index.css';
import HeroSection from './Components/heroSection';
import AboutMe from './Components/aboutMe';
import Services from './Components/services';
import ProjectsPage from './Components/projects';
function App() {
  return (
    <div className="App font-montserrat">
      <HeroSection/>
      <AboutMe/>
      <Services/>
      <ProjectsPage/>
    </div>
  );
}

export default App;
