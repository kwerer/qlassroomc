import React from "react";
import { Menu, Sidebar, Item, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import LogoQlassroom from "../Images/LogoQlassroom.jpg";
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
        width="thin"
        visible
        className={styles.MainSidebar}
      >
        <div className={styles.SidebarMenuItemOverall}>
          <Menu.Item>
            <Item.Header className={styles.BrandLogo}>
              <Item.Image size="mini" src={LogoQlassroom} />
            </Item.Header>
          </Menu.Item>
          <div className={styles.SidebarItemsTop}>
            {SidebarItemsTop.map((SidebarItem) => (
              <Link to={SidebarItem.path}>
                <Menu.Item as="a">
                  {SidebarItem.icon}
                  <Menu.Header>{SidebarItem.item}</Menu.Header>
                </Menu.Item>
              </Link>
            ))}
          </div>
          <div className={styles.SidebarMenuItemBottom}>
            {SidebarItemsBottom.map((SidebarItem) => (
              <Link to={SidebarItem.path}>
                <Menu.Item as="a">
                  {SidebarItem.icon}
                  <Menu.Header>{SidebarItem.item}</Menu.Header>
                </Menu.Item>
              </Link>
            ))}
          </div>
        </div>
      </Sidebar>
    </>
  );
}
