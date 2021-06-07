import React from "react";
import SmallHomeSidebar from "./SmallHomeSidebar";
import BigHomeSidebar from "./Sidebar";

function SidebarMediaDecider() {
  let mql = window.matchMedia("(max-width: 600px)");
  console.log(mql.matches);
  if (mql.matches === "true") {
    return <SmallHomeSidebar />;
  } else {
    return <BigHomeSidebar />;
  }
}

export default SidebarMediaDecider;
