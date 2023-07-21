import React, { createRef } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import LearnMore from "./components/LearnMore";
import AboutPage from "./components/AboutPage";
import CoreValues from "./components/CoreValues";
import Badges from "./components/Badges";
import Leaderboard from "./components/Leaderboard";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";

function App() {
  const learnMoreRef = createRef();

  const scrollToLearnMore = () => {
    learnMoreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutRef = createRef();

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const badgesRef = createRef();

  const scrollToBadges = () => {
    badgesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const leaderboardRef = createRef();

  const scrollToLeaderboard = () => {
    leaderboardRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar
            onAbout={scrollToAbout}
            onBadges={scrollToBadges}
            onLeaderboard={scrollToLeaderboard}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <IntroPage onLearnMore={scrollToLearnMore} />
                  <div ref={learnMoreRef}>
                    <LearnMore />
                    <div ref={aboutRef}>
                      <AboutPage />
                      <CoreValues />
                      <div ref={badgesRef}>
                        <Badges />
                        <div ref={leaderboardRef}>
                          <Leaderboard />
                          <ForgotPassword />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
