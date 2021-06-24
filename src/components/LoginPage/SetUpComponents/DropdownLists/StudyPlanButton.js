import React from "react";
import { Button, Dropdown, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
function StudyPlanButton() {
  return (
    <Link to="/studyplan">
      <Button fluid className={styles.StudyPlanButton}>
        Customise Study Plan
      </Button>
    </Link>
  );
}

export default StudyPlanButton;
