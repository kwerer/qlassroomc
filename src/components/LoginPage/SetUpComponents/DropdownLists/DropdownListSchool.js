import React from "react";
import { Container, Dropdown, Segment } from "semantic-ui-react";
import styles from "../styles.module.css";
const options = [
  { key: 1, text: "School 1", value: 1 },
  { key: 2, text: "School 2", value: 2 },
  { key: 3, text: "School 3", value: 3 },
];

function DropdownListSchool() {
  return (
    <>
      <Container className={styles.HeaderHeight}>
        <h5>School</h5>
      </Container>

      <Dropdown
        fluid
        placeholder="Select a school or institution"
        options={options}
        selection
        className={styles.DropdownSegment}
      />
    </>
  );
}

export default DropdownListSchool;
