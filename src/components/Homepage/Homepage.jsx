import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SidebarItems } from "./SidebarData";
import DashPhysics from "../SubjectDashboard/DashPhysics";
import DashChemistry from "../SubjectDashboard/DashChemistry";
import DashBiology from "../SubjectDashboard/DashBiology";

export default function Homepage() {
  return (
    <Router>
      {SidebarItems.map((SidebarItem) => (
        <Route
          exact
          path={SidebarItem.path}
          component={SidebarItem.component}
        />
      ))}
      <Route exact path="/physics" component={DashPhysics}></Route>
      <Route exact path="/chemistry" component={DashChemistry}></Route>
      <Route exact path="/biology" component={DashBiology}></Route>
    </Router>
  );
}
