import './App.css';
import NavBar from './components/NavBar';
import IntroPage from './components/IntroPage';
import LearnMore from './components/LearnMore';
import AboutPage from './components/AboutPage';
import CoreValues from './components/CoreValues';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <IntroPage />
        <LearnMore />
        <AboutPage />
        <CoreValues />
      </header>
    </div>
  );
}

export default App;
