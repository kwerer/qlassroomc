import React from "react";
import { Grid, Header, Container } from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";

import HelpButton from "./HelpButton";

import styles from "../styles.module.css";

function SubjectDashboardBody(props) {
  return (
    <div className={styles.HomeBody}>
      <div fluid className={styles.Banner}>
        <Header as="h1" inverted color="white" className={styles.BannerTitle}>
          {props.Subject}
        </Header>
      </div>
      <Grid centered columns={3} className={styles.HelpButtonSegment}>
        <Grid.Column width={9}>
          <Container className={styles.SegmentTitle}>To-Do</Container>
          <SubjectsSegment
            SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
            Subject="Quiz"
            SubjectPath="physics"
            ButtonName="START"
          />
        </Grid.Column>

        <Grid.Column width={9}>
          <Container className={styles.SegmentTitle}>Progress</Container>
          <SubjectsSegment
            SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
            Subject="Forces"
            SubjectPath="biology"
            ButtonName="CONTINUE"
          />
        </Grid.Column>
        <Grid.Column width={9}>
          <SubjectsSegment
            SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
            Subject="Newton's Law"
            SubjectPath="chemistry"
            ButtonName="CONTINUE"
          />
        </Grid.Column>
        <Grid.Column width={9}>
          <HelpButton />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SubjectDashboardBody;
