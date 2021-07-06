import React, { useState, createRef } from "react";
import styles from "./styles.module.css";
import {
  Container,
  Tab,
  Menu,
  Sidebar,
  Grid,
  Button,
  Segment,
  Icon,
  Divider,
} from "semantic-ui-react";
import SubjectsSegment from "./SubjectDashboardComponents/SubjectsSegment";
import { useSelector, useDispatch } from "react-redux";
import SmallHomeSidebar from "../CommonComponents/SmallHomeSidebar";
import GraphSegment from "./SubjectDashboardComponents/GraphSegment";
import GraphVisualSegment from "./SubjectDashboardComponents/GraphVisualSegment";
import HelpButton from "./SubjectDashboardComponents/HelpButton";
import LogoPhysics from "../Images/LogoPhysics.jpg";
import CircleGraph from "../Images/CircleGraph.jpg";
import Graph from "../Images/Graph.jpg";
import {
  Tab0,
  Tab1,
  Tab2,
  Tab3,
} from "../ReduxComponents/reduxSlicer/ChangeTabs";

function PhysicsDashboard() {
  const { TabNumber } = useSelector((state) => state.changeTabs);
  let [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  function handleTabChange(e) {
    setActiveIndex(e.target.id);
    if (e.target.id === "0") {
      dispatch(Tab0());
    } else if (e.target.id === "1") {
      dispatch(Tab1());
    } else if (e.target.id === "2") {
      dispatch(Tab2());
    } else if (e.target.id === "3") {
      dispatch(Tab3());
    } else {
      console.log("doesnt work");
    }
    console.log(e.target.id);
    console.log(TabNumber);
  }
  function handleRangeChange(e) {
    dispatch(Tab0());
  }

  const panes = [
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="0" className={styles.TabHeaderSegment}>
            <div className={styles.TabHeaderTitle}>
              <h1>Physics</h1>
              <div className={styles.TabHeaderTitleMain}>Secondary 1</div>
            </div>
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <Grid className={styles.TabMainGrid}>
            <Divider hidden />
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
                <Container className={styles.SegmentTitle}>To-Do</Container>
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Quiz"
                  SubjectPath="physics/practice"
                  ButtonName="START"
                  Description="Due in 2 hours"
                />
                <Container className={styles.SegmentTitle}>Progress</Container>
                <GraphVisualSegment
                  Subject="Chapter 2"
                  SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
                />
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <HelpButton />
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="1" className={styles.TabMenuSegmentPractice}>
            Practice
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <Grid columns={3} className={styles.TabMainGrid} id="MainGrid2">
            <Divider hidden />

            <Grid.Row>
              <Grid.Column width={2}>
                <Button active icon circular onClick={handleRangeChange}>
                  <Icon
                    className={styles.DashboardButtonIcon}
                    name="arrow left"
                  />
                </Button>
              </Grid.Column>
              <Grid.Column
                width={12}
                className={styles.DashboardSegementHeight}
              >
                <Container className={styles.SegmentTitle}>Week 1</Container>
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Energy 1"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Completed"
                />
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Energy 2"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Revision"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <HelpButton />
            <Divider hidden />
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column
                width={12}
                className={styles.DashboardSegementHeight}
              >
                <Container className={styles.SegmentTitle}>Week 2</Container>
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Conservation of Energy"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Conservation of Energy"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Revision"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="2" className={styles.TabMenuSegmentQuiz}>
            Quiz
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <Divider hidden />
          <Grid className={styles.TabMainGrid}>
            <Grid.Row>
              <Grid.Column width={2}>
                <Button active icon circular onClick={handleRangeChange}>
                  <Icon
                    className={styles.DashboardButtonIcon}
                    name="arrow left"
                  />
                </Button>
              </Grid.Column>
              <Grid.Column width={12}>
                <Container className={styles.SegmentTitle}>Week 1</Container>
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Conservation of Energy"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
                <Container className={styles.SegmentTitle}>Week 2</Container>
                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Conversion of Energy"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
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
              <HelpButton />
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="3" className={styles.TabMenuSegmentAnalytics}>
            Analytics
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Grid columns={3} className={styles.TabMainGrid}>
          <Divider hidden />
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
            <Grid.Column width={4}>
              <HelpButton />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              width={4}
              className={styles.DashboardButtonRow}
            ></Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment Subject="Top 30%" SubjectImage={Graph} />
            </Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment Subject="Top 30%" SubjectImage={Graph} />
              <HelpButton />
            </Grid.Column>
            <Grid.Column
              width={4}
              className={styles.DashboardButtonRow}
            ></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <HelpButton />
          </Grid.Row>
        </Grid>
      ),
    },
  ];

  return (
    <Grid className={styles.GridBackground}>
      <Grid.Column className={styles.GridBackground1}>
        <Sidebar.Pushable as={Grid.Column}>
          <SmallHomeSidebar />

          <Sidebar.Pusher className={styles.SidebarPusher}>
            <Grid.Column className={styles.TabGrid} id="TabGap1">
              <Tab
                id="TabGap2"
                menu={{
                  vertical: true,
                  tabular: false,
                  fluid: "true",
                }}
                grid={{ paneWidth: 14, tabWidth: 2 }}
                panes={panes}
                className={styles.Tabs}
                onTabChange={handleTabChange}
                activeIndex={TabNumber}
              />
            </Grid.Column>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default PhysicsDashboard;
