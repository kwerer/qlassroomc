import React from "react";
import { Menu, Sidebar, Item, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import LogoQlassroom from "../Images/LogoQlassroom.jpg";
import SidebarDashboardBody from "./SubjectDashboardBody";
import { SidebarItemsTop } from "../Homepage/SidebarDataTop";

export default function DashboardSidebar() {
  return (
    <div>
      <Grid className={styles.GridBackground}>
        <Grid.Column only="computer" className={styles.GridBackground}>
          <Sidebar.Pushable as={Grid.Column}>
            <Sidebar
              as={Menu}
              icon="labeled"
              vertical
              inverted
              width="thin"
              visible="true"
              className={styles.MainSidebar}
            >
              <Menu.Item>
                <Item.Header className={styles.BrandLogo}>
                  <Item.Image size="mini" src={LogoQlassroom} />
                  Qlassroom
                </Item.Header>
              </Menu.Item>
              {SidebarItemsTop.map((SidebarItem) => (
                <Link to={SidebarItem.path}>
                  <Menu.Item as="a">
                    {SidebarItem.icon}
                    {SidebarItem.item}
                  </Menu.Item>
                </Link>
              ))}
            </Sidebar>

            <Sidebar.Pusher>
              <SidebarDashboardBody Subject="Physics" />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
      {/*this is where the difference is*/}

      <Grid className={styles.GridBackground}>
        <Grid.Column only=" tablet mobile" className={styles.GridBackground}>
          <Sidebar.Pushable as={Grid.Column}>
            <Sidebar as={Menu} icon vertical inverted width="very thin" visible>
              <Menu.Item>
                <Item.Header className={styles.BrandLogo}>
                  <Item.Image size="mini" src={LogoQlassroom} />
                </Item.Header>
              </Menu.Item>
              {SidebarItemsTop.map((SidebarItem) => (
                <Link to={SidebarItem.path}>
                  <Menu.Item as="a">{SidebarItem.icon}</Menu.Item>
                </Link>
              ))}
            </Sidebar>

            <Sidebar.Pusher>
              <SidebarDashboardBody Subject="Physics" />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  );
}
