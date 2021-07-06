import React, { useState, useEffect } from "react";
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
  Dropdown,
} from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";
import { useSelector, useDispatch } from "react-redux";
import GraphSegment from "./GraphSegment";
import GraphVisualSegment from "./GraphVisualSegment";
import HelpButton from "./HelpButton";
import LogoPhysics from "../../Images/LogoPhysics.jpg";
import LogoQlassroom from "../../Images/LogoQlassroom.jpg";
import CircleGraph from "../../Images/CircleGraph.jpg";
import Graph from "../../Images/Graph.jpg";
import LearningJourneySegment from "./LearningJourneySegment";
import IncompleteTopicSegment from "./IncompleteTopicSegment";
import {
  Tab0,
  Tab1,
  Tab2,
  Tab3,
  Tab4,
} from "../../ReduxComponents/reduxSlicer/ChangeTabs";
import ReviewTabPane from "./ReviewTabPane";

function SubjectDashboardTabs() {
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
    } else if (e.target.id === "4") {
      dispatch(Tab4());
    } else {
      console.log("doesnt work");
    }
    console.log(e.target.id);
    console.log(TabNumber);
  }
  function handleRangeChange(e) {
    dispatch(Tab0());
  }
  /*used as a trigger for changing subject dropdown list*/
  const SubjectTrigger = (
    <>
      <span className={styles.SubjectChooserSubject}>Physics</span>
      <span className={styles.SubjectChooserIcon}>
        <Icon name="triangle down" size="big" />
      </span>
    </>
  );

  const panes = [
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="0" className={styles.TabHeaderSegment}>
            <Dropdown trigger={SubjectTrigger} icon={null}>
              <Dropdown.Menu>
                <Dropdown.Item>Chemistry</Dropdown.Item>
                <Dropdown.Item>Biology</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                  Subject="Mycoprotein Chain Reactions"
                  SubjectPath="physics/practice"
                  ButtonName="START"
                  Description="Continue where you left off!"
                />

                <SubjectsSegment
                  SubjectImage={LogoPhysics}
                  Subject="Mycoprotein Chain Reactions"
                  SubjectPath="physics/practice"
                  ButtonName="START"
                  Description="Start a new, upcoming topic!"
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
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column
                width={12}
                className={styles.DashboardSegementHeight}
              >
                <Container className={styles.SegmentTitle}>To Do</Container>
                <SubjectsSegment
                  SubjectImage={LogoQlassroom}
                  Subject="Daily Practice"
                  SubjectPath="physics/practice"
                  ButtonName="START"
                  Description="qAI -  adaptive set of questions"
                />

                <Container className={styles.SegmentTitle}>
                  Learning Journey
                </Container>
                <LearningJourneySegment />
                <Container className={styles.SegmentTitle}>
                  Incomplete Topics
                </Container>
                <IncompleteTopicSegment />
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
              ></Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="2" className={styles.TabMenuSegmentReview}>
            Review
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <Divider hidden />
          <Grid columns="equal" className={styles.TabMainGrid}>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column>
              <ReviewTabPane />
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className={styles.TabMenuItem}>
          <Segment id="3" className={styles.TabMenuSegmentLearningPlan}>
            Learning Plan
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <Divider hidden />
          <Grid className={styles.TabMainGrid}>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
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
          <Segment id="4" className={styles.TabMenuSegmentAnalytics}>
            Analytics
          </Segment>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className={styles.MainTab}>
          <Divider hidden />
          <Grid columns={3} className={styles.TabMainGrid}>
            <Grid.Row>
              <Grid.Column width={4}></Grid.Column>
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
              <Grid.Column width={4}></Grid.Column>
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
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Tab
      menu={{
        vertical: true,
        tabular: false,
        fluid: "true",
        id: "tabmenu",
      }}
      grid={{ paneWidth: 13, tabWidth: 3 }}
      panes={panes}
      className={styles.Tabs}
      onTabChange={handleTabChange}
      activeIndex={TabNumber}
    />
  );
}

export default SubjectDashboardTabs;
