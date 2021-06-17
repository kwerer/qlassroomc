import { Icon } from "semantic-ui-react";

import StudyPlan from "./studyplan";
import Settings from "./Settings";
import Logout from "./logout";

import BigSidebar from "./MainSidebar";

export const SidebarItemsBottom = [
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
