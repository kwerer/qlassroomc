import React from "react";
import Banner from "./SubjectPracticeMVPComponents/Banner";
import { Grid } from "semantic-ui-react";
import QuestionsButton from "./SubjectPracticeMVPComponents/QuestionsButton";
import AnswerSegment from "./SubjectPracticeMVPComponents/AnswerSegment";
import QuestionsBody from "./SubjectPracticeMVPComponents/QuestionsBody";
import styles from "./SubjectPracticeMVPComponents/styles.module.css";
function SubjectPractice() {
  return (
    <div className={styles.MainGrid}>
      <Grid>
        <Grid.Row className={styles.BannerRow}>
          <Grid.Column className={styles.BannerCol}>
            <Banner />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal" className={styles.QuestionButtonRow}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column className={styles.QuestionsBodyColumn}>
            <QuestionsBody />
          </Grid.Column>
          <Grid.Column className={styles.DropdownButton}>
            <QuestionsButton />
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column className={styles.AnswerColumn}>
            <AnswerSegment />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SubjectPractice;
