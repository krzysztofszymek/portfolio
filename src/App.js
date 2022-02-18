import Intro from './components/intro/Intro';
import AboutMe from './components/aboutme/AboutMe';
import Technologies from './components/technologies/Technologies';
import Interests from './components/interests/Interests';
import MyProjects from './components/myprojects/MyProjects';

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Interests />
      <Technologies />
      <MyProjects />
    </div>
  );
}

export default App;