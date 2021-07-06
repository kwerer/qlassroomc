import React from "react";
import { Grid, Container } from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";
import LogoPhysics from "../../Images/LogoPhysics.jpg";
import LogoBiology from "../../Images/LogoBiology.jpg";
import LogoChemistry from "../../Images/LogoChemistry.jpg";
import HelpButton from "./HelpButton";
import styles from "../styles.module.css";

function HomepageBody() {
  return (
    <div className={styles.HomeBody}>
      <Grid className={styles.MainGrid}>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={13}>
            <Container className={styles.SegmentTitle} fluid>
              Latest Activity
            </Container>
            <SubjectsSegment
              SubjectImage={LogoPhysics}
              Subject="Physics"
              SubjectPath="physics"
            />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={13}>
            <Container className={styles.SegmentTitle} fluid>
              Available Subjects
            </Container>
            <SubjectsSegment
              SubjectImage={LogoBiology}
              Subject="Biology"
              SubjectPath="biology"
            />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={13}>
            <SubjectsSegment
              SubjectImage={LogoChemistry}
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
