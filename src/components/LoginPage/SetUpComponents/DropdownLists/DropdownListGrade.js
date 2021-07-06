import React from "react";
import { Container, Dropdown } from "semantic-ui-react";
import styles from "../styles.module.css";

function DropdownListGrade(props) {
  const options = [
    { key: 1, text: "Primary 1", value: 1 },
    { key: 2, text: "Primary 2", value: 2 },
    { key: 3, text: "Primary 3", value: 3 },
    { key: 4, text: "Primary 4", value: 4 },
    { key: 5, text: "Primary 5", value: 5 },
    { key: 6, text: "Primary 6", value: 6 },
  ];

  return (
    <>
      <Container className={styles.HeaderHeight}>
        <h5>Grade</h5>
      </Container>

      <Dropdown
        fluid
        options={options}
        selection
        placeholder="Select your grade"
        defaultValue={props.defaultValue}
        className={styles.DropdownSegment}
      />
    </>
  );
}

export default DropdownListGrade;
