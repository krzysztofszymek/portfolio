import Intro from './components/intro/Intro';
import AboutMe from './components/aboutme/AboutMe';
import Technologies from './components/technologies/Technologies';
import Interests from './components/interests/Interests';
import MyProjects from './components/myprojects/MyProjects';
import Footer from './components/footer/Footer';
import UpButton from './components/UI/upButton/upButton';

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Interests />
      <Technologies />
      <MyProjects />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;