import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Header,
  Container,
  Tab,
  Menu,
  Sidebar,
  Item,
  Grid,
  Segment,
} from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";

import styles from "./styles.module.css";
import LogoQlassroom from "../Images/LogoQlassroom.jpg";
import { SidebarItemsTop } from "../Homepage/SidebarDataTop";
import SmallHomeSidebar from "../Homepage/SmallHomeSidebar";
import GraphSegment from "./GraphSegment";
import GraphVisualSegment from "./GraphVisualSegment";
import HelpButton from "./HelpButton";
const panes = [
  {
    menuItem: (
      <Segment inverted color="grey">
        <Header as="h1" className={styles.trial}>
          Secondary 1
        </Header>
      </Segment>
    ),
    render: () => (
      <Tab.Pane className={styles.MainTab}>
        <div>
          <Grid columns={3} className={styles.TabMainGrid}>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={9}>
                <Container className={styles.SegmentTitle}>To-Do</Container>
                <SubjectsSegment
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
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
                <Container className={styles.SegmentTitle}>Progress</Container>
                <SubjectsSegment
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
                  Subject="Chapter 1"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Content"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Column className={styles.backgc}>
              <HelpButton />
            </Grid.Column>
          </Grid>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Practice",
    render: () => (
      <Tab.Pane className={styles.MainTab}>
        <div>
          <Grid columns={3} className={styles.TabMainGrid}>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={9}>
                <Container className={styles.SegmentTitle}>Week 1</Container>
                <SubjectsSegment
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
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
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
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
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
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
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
                  Subject="Conversion of Energy"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Completed"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Quiz",
    render: () => (
      <Tab.Pane className={styles.MainTab}>
        <div>
          <Grid columns={3} className={styles.TabMainGrid}>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={9}>
                <Container className={styles.SegmentTitle}>Week 1</Container>
                <SubjectsSegment
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
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
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
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
                  SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
                  Subject="Conversion of Energy"
                  SubjectPath="physics/practice"
                  ButtonName="CONTINUE"
                  Description="Incomplete"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Analytics",
    render: () => (
      <Tab.Pane className={styles.MainTab} attached={false}>
        <Grid columns={3} className={styles.TabMainGrid}>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={8}>
              <GraphSegment
                Subject="Quiz Competency"
                SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={8}>
              <GraphVisualSegment
                Subject="Quiz Competency"
                SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment
                Subject="Quiz Competency"
                SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <GraphSegment
                Subject="Quiz Competency"
                SubjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuh9g1YS7a-7jwEoMJl1XPlJvchiCx2zqHw&usqp=CAU"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  },
];

const PhysicsDashboard = () => (
  <>
    <Grid className={styles.GridBackground}>
      <Grid.Column className={styles.GridBackground}>
        <Sidebar.Pushable as={Grid.Column}>
          <SmallHomeSidebar />

          <Sidebar.Pusher className={styles.SidebarPusher}>
            <Tab
              menu={{
                vertical: true,
                tabular: true,
              }}
              grid={{ paneWidth: 14, tabWidth: 2 }}
              panes={panes}
              className={styles.Tabs}
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  </>
);

export default PhysicsDashboard;
