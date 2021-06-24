import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./components/ReduxComponents/reducers/index";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SidebarItemsBottom } from "./components/Homepage/HomepageComponents/SidebarDataBottom";
import { SidebarItemsTop } from "./components/Homepage/HomepageComponents/SidebarDataTop";
import PhysicsDashboard from "./components/SubjectDashboard/PhysicsDashboard";
import PhysicsPractice from "./components/SubjectPractice/PhysicsPractice";
import MainLoginPage from "./components/LoginPage/MainLoginPage";
import ForgetPassword from "./components/Homepage/ForgetPassword";
import MainSignUpPage from "./components/LoginPage/MainSignUpPage";
import MainSetUpPage from "./components/LoginPage/MainSetUpPage";
function App() {
  const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
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

        <Route
          exact
          path="/physics/practice"
          component={PhysicsPractice}
        ></Route>
        <Route exact path="/login" component={MainLoginPage}></Route>
        <Route exact path="/signup" component={MainSignUpPage}></Route>
        <Route exact path="/setup" component={MainSetUpPage}></Route>
        <Route exact path="/forgotpassword" component={ForgetPassword}></Route>
      </Router>
    </Provider>
  );
}

export default App;
