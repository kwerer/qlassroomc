import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
function DashboardButton() {
  return (
    <Link to="/">
      <Button fluid className={styles.DashboardButton}>
        Go to Dashboard
      </Button>
    </Link>
  );
}

export default DashboardButton;
