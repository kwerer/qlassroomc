import React from "react";
import {
  Menu,
  Sidebar,
  Item,
  Container,
  Image,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import LogoQlassroom1 from "../Images/LogoQlassroom1.png";
import HomepageBody from "./HomepageBody";
import { SidebarItemsTop } from "./SidebarDataTop";
import { SidebarItemsBottom } from "./SidebarDataBottom";

export default function SmallHomeSidebar() {
  return (
    <>
      <Sidebar
        as={Menu}
        icon
        vertical
        inverted
        width="very thin"
        visible
        className={styles.MainSmallSidebar}
      >
        <div className={styles.SidebarMenuItemOverall}>
          <Item.Image
            src={LogoQlassroom1}
            size="large"
            className={styles.SmallSidebarBrandLogo}
          />

          <div className={styles.SidebarItemsTop}>
            {SidebarItemsTop.map((SidebarItem) => (
              <Link to={SidebarItem.path}>
                <Menu.Item as="a">
                  {SidebarItem.icon}
                  <div className={styles.SmallSidebarIconText}>
                    {SidebarItem.item}
                  </div>
                </Menu.Item>
              </Link>
            ))}
          </div>
          <div className={styles.SidebarMenuItemBottom}>
            {SidebarItemsBottom.map((SidebarItem) => (
              <Link to={SidebarItem.path}>
                <Menu.Item as="a">
                  {SidebarItem.icon}
                  <div className={styles.SmallSidebarIconText}>
                    {SidebarItem.item}
                  </div>
                </Menu.Item>
              </Link>
            ))}
          </div>
        </div>
      </Sidebar>
    </>
  );
}
