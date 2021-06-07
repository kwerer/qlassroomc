import React from "react";
import { Menu, Sidebar, Item, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import LogoQlassroom from "../Images/LogoQlassroom.jpg";
import HomepageBody from "./HomepageBody";
import { SidebarItems } from "./SidebarData";

export default function SmallHomeSidebar() {
  return (
    <>
      <Sidebar.Pushable
        as={Container}
        className={styles.SmallBackgroundSidebar}
        attached="top"
        fluid
      >
        <Sidebar
          as={Menu}
          icon
          vertical
          inverted
          width="very thin"
          size="mini"
          visible="true"
          className={styles.SmallBackgroundSidebar}
        >
          <Menu.Item>
            <Item.Header className={styles.BrandLogo}>
              <Item.Image size="mini" src={LogoQlassroom} />
            </Item.Header>
          </Menu.Item>
          {SidebarItems.map((SidebarItem, index) => (
            <Link to={SidebarItem.path}>
              <Menu.Item as="a">{SidebarItem.icon}</Menu.Item>
            </Link>
          ))}
        </Sidebar>

        <Sidebar.Pusher>
          <HomepageBody />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}
