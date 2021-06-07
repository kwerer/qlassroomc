import React from "react";
import { Grid, Header, Container } from "semantic-ui-react";
import SubjectsSegment from "./SubjectsSegment";

import HelpButton from "./HelpButton";

import styles from "./styles.module.css";

function HomepageBody() {
  return (
    <div className={styles.HomeBody}>
      <div fluid className={styles.Banner}>
        <Header as="h1" inverted color="white" className={styles.BannerTitle}>
          Home
        </Header>
      </div>
      <Grid centered columns={3} className={styles.HelpButtonSegment}>
        <Grid.Column width={9}>
          <Container className={styles.SegmentTitle}>Latest Activity</Container>
          <SubjectsSegment
            SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
            Subject="Physics"
            SubjectPath="physics"
          />
        </Grid.Column>

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
        <Grid.Column width={9}>
          <SubjectsSegment
            SubjectImage="https://react.semantic-ui.com/images/wireframe/image.png"
            Subject="Chemistry"
            SubjectPath="chemistry"
          />
        </Grid.Column>
        <Grid.Column width={9}>
          <HelpButton />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default HomepageBody;
