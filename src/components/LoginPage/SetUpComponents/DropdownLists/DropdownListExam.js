import React from "react";
import { Container, Dropdown } from "semantic-ui-react";
import styles from "../styles.module.css";
const options = [
  { key: 1, text: "PSLE", value: 1 },
  { key: 2, text: "O Level", value: 2 },
  { key: 3, text: "A Level", value: 3 },
];

function DropdownListExam() {
  return (
    <>
      <Container className={styles.HeaderHeight}>
        <h5>Target Exam</h5>
      </Container>

      <Dropdown
        fluid
        options={options}
        selection
        placeholder="Select an upcoming exam"
        className={styles.DropdownSegment}
      />
    </>
  );
}

export default DropdownListExam;
