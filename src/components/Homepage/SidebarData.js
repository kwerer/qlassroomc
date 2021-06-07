import { Icon } from "semantic-ui-react";

import StudyPlan from "./studyplan";
import Settings from "./Settings";
import Logout from "./logout";

import BigSidebar from "./Sidebar";

export const SidebarItems = [
  {
    item: "Home",
    icon: <Icon name="home" size="big" />,
    path: "/",
    component: BigSidebar,
  },
  {
    item: "Study Plan",
    icon: <Icon name="book " size="big" />,
    path: "/studyplan",
    component: StudyPlan,
  },
  {
    item: "Settings",
    icon: <Icon name="setting " size="big" />,
    path: "/settings",
    component: Settings,
  },
  {
    item: "Logout",
    icon: <Icon name="logout " size="big" />,
    path: "/logout",
    component: Logout,
  },
];
