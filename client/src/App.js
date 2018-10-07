import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Services from "./components/pages/Services";
import Usage from "./components/pages/Usage";
import Output from "./components/pages/Output";
import Monthly from "./components/pages/Monthly";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/services" component={Services} />
      <Route path="/usage" component={Usage} />
      <Route path="/output" component={Output} />
      <Route path="/monthly" component={Monthly} />
    </div>
  </Router>
);

export default App;
