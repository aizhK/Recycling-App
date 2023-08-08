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
import Dashboard from "./dashboard/Dashboard";
import LeaderboardDash from "./dashboard/LeaderboardDash";
import Sidebar from "./dashboard/Sidebar";
import BadgesDash from "./dashboard/BadgesDash";

function App() {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [isDashboardPage, setIsDashboardPage] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpens, setIsDrawerOpens] = useState(false);

  const handleAuthPage = (authPage) => {
    setIsAuthPage(authPage);
  };
  const handleDashboardPage = (dashboardPage) => {
    setIsDashboardPage(dashboardPage);
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
          {!isAuthPage && !isDashboardPage && (
            <NavBar
              onAbout={scrollToAbout}
              onBadges={scrollToBadges}
              onLeaderboard={scrollToLeaderboard}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          )}
          {isDashboardPage && <Sidebar setIsDrawerOpens={setIsDrawerOpens} />}
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
            <Route
              path="/dashboard"
              element={<Dashboard handleDashboardPage={handleDashboardPage} />}
            />
            <Route
              path="/leaderboard"
              element={
                <LeaderboardDash handleDashboardPage={handleDashboardPage} />
              }
            />
            <Route
              path="/badges"
              element={
                <BadgesDash handleDashboardPage={handleDashboardPage} />
              }
            />
          </Routes>
        </header>
        <ScrollTop isDrawerOpen={isDrawerOpen} />
        <ScrollTop isDrawerOpens={isDrawerOpens} />
      </div>
    </Router>
  );
}

export default App;
