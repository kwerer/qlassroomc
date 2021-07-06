import React from "react";
import { Button, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";
function IncompleteTopicsIndivButtons(props) {
  return (
    <Button className={styles.IncompleteTopicsIndivButtons}>
      {props.topic}
    </Button>
  );
}

export default IncompleteTopicsIndivButtons;
