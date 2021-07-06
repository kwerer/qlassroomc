import "semantic-ui-css/semantic.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { SidebarItemsBottom } from "./components/Homepage/HomepageComponents/SidebarDataBottom";
import { SidebarItemsTop } from "./components/Homepage/HomepageComponents/SidebarDataTop";
import PhysicsDashboard from "./components/SubjectDashboard/PhysicsDashboard";
import PhysicsPractice from "./components/SubjectPractice/PhysicsPractice";
import MainLoginPage from "./components/LoginPage/MainLoginPage";
import ForgetPassword from "./components/Homepage/ForgetPassword";
import MainSignUpPage from "./components/LoginPage/MainSignUpPage";
import MainSetUpPage from "./components/LoginPage/MainSetUpPage";
import SubjectPractice from "./components/SubjectPracticeMVP/SubjectPractice";
import SubjectDashboardMVP from "./components/SubjectDashboardMVP/SubjectDashboardMVP";
export const UserContext = React.createContext([]);
function App() {
  {
    /*this is for login authentication*/
  }
  const history = useHistory();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const logOutCallback = async () => {
    await fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include", // Needed to include the cookie
    });
    // Clear user from context
    setUser({});
    // Navigate back to startpage
    history.push("/login");
  };
  useEffect(() => {
    async function checkRefreshToken() {
      const result = await (
        await fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include", // Needed to include the cookie
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
      setUser({
        accesstoken: result.accesstoken,
      });
      setLoading(false);
    }
    checkRefreshToken();
  }, []);
  if (loading) return <div>Loading ...</div>;

  {
    /*this is for creating redux store*/
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        {SidebarItemsTop.map((SidebarItem) => (
          <Route
            exact
            path={SidebarItem.path}
            component={SidebarItem.component}
            key={SidebarItem.path}
          />
        ))}
        {SidebarItemsBottom.map((SidebarItem) => (
          <Route
            exact
            path={SidebarItem.path}
            component={SidebarItem.component}
            key={SidebarItem.path}
          />
        ))}
        <Route exact path="/physics" component={PhysicsDashboard}></Route>
        <Route
          exact
          path="/subjectdashboard"
          component={SubjectDashboardMVP}
        ></Route>
        <Route
          exact
          path="/subject/practice/q1"
          component={SubjectPractice}
        ></Route>
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
    </UserContext.Provider>
  );
}

export default App;
