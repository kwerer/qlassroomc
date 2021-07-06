import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "./SubjectDashboardMVPComponents/SubjectDashboardHeader";
import SubjectDashboardTabs from "./SubjectDashboardMVPComponents/SubjectDashboardTabs";
import styles from "./SubjectDashboardMVPComponents/styles.module.css";

function SubjectDashboardMVP() {
  return (
    <Grid className={styles.MainGrid}>
      <Grid.Row className={styles.HeaderRow}>
        <Header />
      </Grid.Row>
      <Grid.Row className={styles.TabsRow}>
        <SubjectDashboardTabs />
      </Grid.Row>
    </Grid>
  );
}

export default SubjectDashboardMVP;
