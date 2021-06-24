import React, { useState } from "react";
import { Container, Dropdown, Segment } from "semantic-ui-react";
import styles from "../styles.module.css";

function DropdownListTotalScore(props) {
  let [selectedValue, setSelectedValue] = useState(100);
  var options = [];
  for (var i = 1; i <= 100; i++) {
    options.push({ key: i, text: i, value: i });
  }

  console.log("options");
  return (
    <>
      <Container className={styles.HeaderHeight}>
        <h5>{props.header}</h5>
      </Container>

      <Dropdown
        fluid
        options={options}
        selection
        defaultValue={selectedValue}
        className={styles.DropdownSegment}
      />
    </>
  );
}

export default DropdownListTotalScore;
