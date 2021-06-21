import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  Header,
  Container,
  Tab,
  Menu,
  Sidebar,
  Item,
  Grid,
  Button,
  Segment,
  Icon,
} from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";
import { useSelector, useDispatch } from "react-redux";
import LogoQlassroom from "../Images/LogoQlassroom.jpg";
import { SidebarItemsTop } from "../Homepage/SidebarDataTop";
import SmallHomeSidebar from "../Homepage/SmallHomeSidebar";
import GraphSegment from "./GraphSegment";
import GraphVisualSegment from "./GraphVisualSegment";
import HelpButton from "./HelpButton";
import LogoPhysics from "../Images/LogoPhysics.jpg";
import CircleGraph from "../Images/CircleGraph.jpg";
import Graph from "../Images/Graph.jpg";

function PhysicsDashboard() {
  const TabIndex = useSelector((state) => state.ChangeTab);
  let [activeIndex, setActiveIndex] = useState(0);
  const handleRangeChange = (e) => setActiveIndex(0);
  const handleTabChange = (e) => setActiveIndex(e.target.value);
  const panes = [
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment className={styles.TabHeaderSegment}>
            <div className={styles.TabHeaderTitle}>
              <h1>Physics</h1>
              <div className={styles.TabHeaderTitleMain}>Secondary 1</div>
            </div>
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <div>
            <Grid className={styles.TabMainGrid}>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <Container className={styles.SegmentTitle}>To-Do</Container>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Quiz"
                    SubjectPath="physics/practice"
                    ButtonName="START"
                    Description="Due in 2 hours"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <Container className={styles.SegmentTitle}>
                    Progress
                  </Container>
                  <GraphVisualSegment
                    Subject="Chapter 2"
                    SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className={styles.DashboardButtonRow}>
                <HelpButton />
              </Grid.Row>
            </Grid>
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment className={styles.TabMenuSegmentPractice}>Practice</Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <div>
            <Grid columns={3} className={styles.TabMainGrid}>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Button active icon circular onClick={handleRangeChange}>
                    <Icon
                      className={styles.DashboardButtonIcon}
                      name="arrow left"
                    />
                  </Button>
                </Grid.Column>
                <Grid.Column width={9}>
                  <Container className={styles.SegmentTitle}>Week 1</Container>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Energy 1"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Completed"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Energy 2"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Incomplete"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Revision"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Incomplete"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <Container className={styles.SegmentTitle}>Week 2</Container>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Conversion of Energy"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Completed"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className={styles.DashboardButtonRow}>
                <HelpButton />
              </Grid.Row>
            </Grid>
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment className={styles.TabMenuSegmentQuiz}>Quiz</Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <div>
            <Grid columns={3} className={styles.TabMainGrid}>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Button active icon circular onClick={handleRangeChange}>
                    <Icon
                      className={styles.DashboardButtonIcon}
                      name="arrow left"
                    />
                  </Button>
                </Grid.Column>
                <Grid.Column width={9}>
                  <Container className={styles.SegmentTitle}>Week 1</Container>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Energy 1"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Completed"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <Container className={styles.SegmentTitle}>Week 2</Container>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Conversion of Energy"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Incomplete"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={9}>
                  <SubjectsSegment
                    SubjectImage={LogoPhysics}
                    Subject="Conversion of Energy"
                    SubjectPath="physics/practice"
                    ButtonName="CONTINUE"
                    Description="Incomplete"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className={styles.DashboardButtonRow}>
                <HelpButton />
              </Grid.Row>
            </Grid>
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment className={styles.TabMenuSegmentAnalytics}>
            Analytics
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Grid columns={3} className={styles.TabMainGrid}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Button active icon circular onClick={handleRangeChange}>
                <Icon
                  className={styles.DashboardButtonIcon}
                  name="arrow left"
                />
              </Button>
            </Grid.Column>
            <Grid.Column width={8}>
              <GraphSegment
                Subject="Quiz Competency"
                SubjectImage={CircleGraph}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
              <GraphVisualSegment
                Subject="Chapter 2"
                SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment Subject="Top 30%" SubjectImage={Graph} />
            </Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment Subject="Top 30%" SubjectImage={Graph} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.DashboardButtonRow}>
            <HelpButton />
          </Grid.Row>
        </Grid>
      ),
    },
    {
      menuItem: <div className={styles.Filler}>sdsd</div>,
      render: () => (
        <Grid columns={3} className={styles.TabMainGrid}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Button active icon circular onClick={handleRangeChange}>
                <Icon
                  className={styles.DashboardButtonIcon}
                  name="arrow left"
                />
              </Button>
            </Grid.Column>
            <Grid.Column width={8}>
              <GraphSegment
                Subject="Quiz Competency"
                SubjectImage={CircleGraph}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
              <GraphVisualSegment
                Subject="Chapter 2"
                SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment Subject="Top 30%" SubjectImage={Graph} />
            </Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment Subject="Top 30%" SubjectImage={Graph} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.DashboardButtonRow}>
            <HelpButton />
          </Grid.Row>
        </Grid>
      ),
    },
  ];
  return (
    <Grid className={styles.GridBackground}>
      <Grid.Column className={styles.GridBackground}>
        <Sidebar.Pushable as={Grid.Column}>
          <SmallHomeSidebar />

          <Sidebar.Pusher className={styles.SidebarPusher}>
            <Grid.Column className={styles.TabGrid}>
              <Tab
                menu={{
                  vertical: true,
                  tabular: false,
                  className: "trial",
                }}
                grid={{ paneWidth: 13, tabWidth: 3 }}
                panes={panes}
                activeIndex={activeIndex}
                onTabChange={handleTabChange}
                className={styles.Tabs}
              />
            </Grid.Column>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default PhysicsDashboard;
