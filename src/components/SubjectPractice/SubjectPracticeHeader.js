import React from "react";
import { Sidebar, Grid, Header, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";

function SubjectPracticeHeader(props) {
  return (
    <Segment>
      <Header>
        {props.header}
        <Header sub>{props.subheader}</Header>
      </Header>
    </Segment>
  );
}

export default SubjectPracticeHeader;
