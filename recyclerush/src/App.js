import React, { createRef, useState } from "react";
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
import Login from "./components/Login";
import ScrollTop from "./components/ScrollToTop";

function App() {
  const [isAuthPage, setIsAuthPage] = useState(false);

  const handleAuthPage = (authPage) => {
    setIsAuthPage(authPage);
  };

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
          {!isAuthPage && (
            <NavBar
              onAbout={scrollToAbout}
              onBadges={scrollToBadges}
              onLeaderboard={scrollToLeaderboard}
            />
          )}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
            <Route
              path="/signup"
              element={<SignUp handleAuthPage={handleAuthPage} />}
            />
            <Route
              path="/login"
              element={<Login handleAuthPage={handleAuthPage} />}
            />
            <Route
              path="/forgotpassword"
              element={<ForgotPassword handleAuthPage={handleAuthPage} />}
            />
          </Routes>
        </header>
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;
