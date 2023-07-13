import './App.css';
import NavBar from './components/NavBar';
import IntroPage from './components/IntroPage';
import LearnMore from './components/LearnMore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <IntroPage />
        <LearnMore />
      </header>
    </div>
  );
}

export default App;
