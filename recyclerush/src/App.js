import './App.css';
import NavBar from './components/NavBar';
import IntroPage from './components/IntroPage';
import LearnMore from './components/LearnMore';
import AboutPage from './components/AboutPage';
import CoreValues from './components/CoreValues';
import Badges from './components/Badges';
import Leaderboard from './components/Leaderboard';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <IntroPage />
        <LearnMore />
        <AboutPage />
        <CoreValues />
        <Badges />
        <Leaderboard />
        <SignUp />
      </header>
    </div>
  );
}

export default App;
