import Intro from './components/intro/Intro';
import AboutMe from './components/aboutme/AboutMe';
import Technologies from './components/technologies/Technologies';
import Interests from './components/interests/Interests';

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Interests />
      <Technologies />
    </div>
  );
}

export default App;