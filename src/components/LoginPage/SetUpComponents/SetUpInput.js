import React from "react";
import HeaderComponent from "../Common/HeaderComponent";
import { Grid, Divider } from "semantic-ui-react";
import DropdownListSchool from "./DropdownLists/DropdownListSchool";
import DropdownListScore from "./DropdownLists/DropdownListScore";
import DropdownListTotalScore from "./DropdownLists/DropdownListTotalScore";
import DropdownListExam from "./DropdownLists/DropdownListExam";
import DropdownListGrade from "./DropdownLists/DropdownListGrade";
import styles from "./styles.module.css";
import StudyPlanButton from "./DropdownLists/StudyPlanButton";
import DashboardButton from "./DropdownLists/DashboardButton";
import HelpButton from "./DropdownLists/HelpButton";
function SetUpInput() {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderComponent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <div className={styles.KnowBetter}>
              <h3>LET'S GET TO KNOW YOU BETTER</h3>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Divider />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal" className={styles.TopRow}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>
            <DropdownListSchool />
          </Grid.Column>
          <Grid.Column width={6}>
            <DropdownListGrade />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="equal" className={styles.MiddleRow}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>
            <DropdownListExam />
          </Grid.Column>
          <Grid.Column width={2}>
            <DropdownListScore header="Target Score" />
          </Grid.Column>
          <Grid.Column width={1} className={styles.OutOf}>
            out of
          </Grid.Column>
          <Grid.Column width={2}>
            <DropdownListTotalScore />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal" className={styles.ButtonsRow}>
          <Grid.Column></Grid.Column>
          <Grid.Column width={4}>
            <StudyPlanButton />
          </Grid.Column>
          <Grid.Column>
            <HelpButton />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={4}>
            <DashboardButton />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default SetUpInput;
