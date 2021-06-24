import { Icon } from "semantic-ui-react";
import StudyPlan from "../studyplan";
import BigSidebar from "../MainSidebar";

export const SidebarItemsTop = [
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
];
