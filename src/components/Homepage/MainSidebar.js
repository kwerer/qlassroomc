import React, { createRef, useContext } from "react";
import { Menu, Sidebar, Item, Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import LogoQlassroom from "../Images/LogoQlassroom.png";
import HomepageBody from "./HomepageComponents/HomepageBody";
import { SidebarItemsTop } from "./HomepageComponents/SidebarDataTop";
import { SidebarItemsBottom } from "./HomepageComponents/SidebarDataBottom";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../App";

export default function BigHomeSidebar({ logOutCallback }) {
  const contextRef = createRef();
  const [user] = useContext(UserContext);
  if (!user.accesstoken) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className={styles.LargestDiv}>
        <Grid className={styles.GridBackground}>
          <Grid.Column only="computer" className={styles.GridColumnBackground}>
            <Sidebar.Pushable as={Grid.Column}>
              <Sidebar
                as={Menu}
                icon="labeled"
                vertical
                inverted
                width="wide"
                visible="true"
                className={styles.MainSidebar}
              >
                <div className={styles.SidebarMenuItemOverall}>
                  <Menu.Item className={styles.LogoPicture}>
                    <Item.Header className={styles.BrandLogo}>
                      <div className={styles.SidebarMenuItemLogo}>
                        <Item.Image size="large" src={LogoQlassroom} />

                        <span className={styles.SidebarItem}>
                          <h1>Qlassroom</h1>
                        </span>
                      </div>
                    </Item.Header>
                  </Menu.Item>
                  <div className={styles.SidebarItemsTop}>
                    {SidebarItemsTop.map((SidebarItem) => (
                      <Link to={SidebarItem.path} key={SidebarItem.path}>
                        <Menu.Item as="a">
                          <div className={styles.SidebarMenuItem}>
                            {SidebarItem.icon}

                            <span className={styles.SidebarItem}>
                              {SidebarItem.item}
                            </span>
                          </div>
                        </Menu.Item>
                      </Link>
                    ))}
                  </div>
                  <div className={styles.SidebarMenuItemBottom}>
                    {SidebarItemsBottom.map((SidebarItem) => (
                      <Link to={SidebarItem.path} key={SidebarItem.path}>
                        <Menu.Item as="a">
                          <div className={styles.SidebarMenuItem}>
                            <span className={styles.SidebarIcon}>
                              {SidebarItem.icon}
                            </span>
                            <span className={styles.SidebarItem}>
                              {SidebarItem.item}
                            </span>
                          </div>
                        </Menu.Item>
                      </Link>
                    ))}
                  </div>
                </div>
                <Button onClick={logOutCallback}>Log Out</Button>
              </Sidebar>

              <div className={styles.SidebarPusher}>
                <HomepageBody />
              </div>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
        {/*this is where the responsive webpage top is large, bottom is small*/}

        <Grid className={styles.GridBackground}>
          <Grid.Column
            only=" tablet mobile"
            className={styles.GridColumnBackground}
          >
            <Sidebar.Pushable as={Grid.Column}>
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
                  <div className={styles.SidebarItemsTop}>
                    <Menu.Item>
                      <div className={styles.SidebarBrandLogo}>
                        <Image size="mini" src={LogoQlassroom} />
                      </div>
                    </Menu.Item>
                    {SidebarItemsTop.map((SidebarItem) => (
                      <Link to={SidebarItem.path} key={SidebarItem.path}>
                        <Menu.Item as="a">
                          {SidebarItem.icon}
                          <Menu.Header>{SidebarItem.item}</Menu.Header>
                        </Menu.Item>
                      </Link>
                    ))}
                  </div>
                  <div className={styles.SidebarMenuItemBottom}>
                    {SidebarItemsBottom.map((SidebarItem) => (
                      <Link to={SidebarItem.path} key={SidebarItem.path}>
                        <Menu.Item as="a">
                          {SidebarItem.icon}
                          <Menu.Header>{SidebarItem.item}</Menu.Header>
                        </Menu.Item>
                      </Link>
                    ))}
                  </div>
                </div>
              </Sidebar>

              <Sidebar.Pusher className={styles.SidebarSmallPusher}>
                <HomepageBody />
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
