import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import Interests from "./Components/Interests";
import Projects from "./Components/Projects"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const HomePage = () => {
  return <Home />;
};
const AboutPage = () => {
  return <About />;
};
const ExperiencesPage = () => {
  return <Experiences />;
};

const EducationPage = () => {
  return <Education />;
};

const InterestsPage = () => {
  return <Interests />
}

const ProjectsPage = () => {
  return <Projects />
}



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/experiences" component={ExperiencesPage} />
          <Route path="/education" component={EducationPage} />
          <Route path="/Interests" component={InterestsPage} />
          <Route path="/Projects" component={ProjectsPage} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
