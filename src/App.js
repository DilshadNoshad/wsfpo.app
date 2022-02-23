import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import VisionGoals from "./components/vision-goals-wsfpo/vision_goals";
import AboutHistory from "./components/about-history-wsfpo/about_history";
import VoteRegister from "./components/vote/vote_reg";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <MainPage />
            <Footer />
          </Route>
          <Route exact path="/reg-vote">
            <Header />
            <VoteRegister />
            <Footer />
          </Route>
          <Route exact path="/vision-goals">
            <Header />
            <VisionGoals />
            <Footer />
          </Route>
          <Route exact path="/about-history">
            <Header />
            <AboutHistory />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
