import "semantic-ui-css/semantic.min.css";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SidebarItemsBottom } from "./components/Homepage/SidebarDataBottom";
import { SidebarItemsTop } from "./components/Homepage/SidebarDataTop";
import PhysicsDashboard from "./components/SubjectDashboard/PhysicsDashboard";
import DashChemistry from "./components/SubjectDashboard/DashChemistry";
import DashBiology from "./components/SubjectDashboard/DashBiology";
import PhysicsPractice from "./components/SubjectPractice/PhysicsPractice";
function App() {
  return (
    <Router>
      {SidebarItemsTop.map((SidebarItem) => (
        <Route
          exact
          path={SidebarItem.path}
          component={SidebarItem.component}
        />
      ))}
      {SidebarItemsBottom.map((SidebarItem) => (
        <Route
          exact
          path={SidebarItem.path}
          component={SidebarItem.component}
        />
      ))}
      <Route exact path="/physics" component={PhysicsDashboard}></Route>
      <Route exact path="/chemistry" component={DashChemistry}></Route>
      <Route exact path="/biology" component={DashBiology}></Route>
      <Route exact path="/physics/practice" component={PhysicsPractice}></Route>
    </Router>
  );
}

export default App;
