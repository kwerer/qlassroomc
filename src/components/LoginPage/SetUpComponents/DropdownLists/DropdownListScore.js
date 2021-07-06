import React from "react";
import { Container, Dropdown } from "semantic-ui-react";
import styles from "../styles.module.css";

function DropdownListScore(props) {
  var options = [];
  for (var i = 1; i <= 100; i++) {
    options.push({ key: i, text: i, value: i });
  }

  return (
    <>
      <Container className={styles.HeaderHeight}>
        <h5>{props.header}</h5>
      </Container>

      <Dropdown
        fluid
        options={options}
        selection
        className={styles.DropdownSegment}
      />
    </>
  );
}

export default DropdownListScore;
