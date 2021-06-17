import React from "react";
import { Grid, Header, Container, Rail } from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";

import HelpButton from "./HelpButton";

import styles from "./styles.module.css";

function HomepageBody() {
  return (
    <div className={styles.HomeBody}>
      <Header fluid className={styles.Banner}>
        <h1 className={styles.BannerTitle}>Home</h1>
      </Header>
      <Grid className={styles.MainGrid}>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={9}>
            <Container className={styles.SegmentTitle}>
              Latest Activity
            </Container>
            <SubjectsSegment
              SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
              Subject="Physics"
              SubjectPath="physics"
            />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={9}>
            <Container className={styles.SegmentTitle}>
              Available Subjects
            </Container>
            <SubjectsSegment
              SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
              Subject="Biology"
              SubjectPath="biology"
            />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={9}>
            <SubjectsSegment
              SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
              Subject="Chemistry"
              SubjectPath="chemistry"
            />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <HelpButton />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default HomepageBody;
