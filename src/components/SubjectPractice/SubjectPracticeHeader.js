import React, { useState, setState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Sidebar,
  Grid,
  Header,
  Segment,
  Icon,
  Button,
} from "semantic-ui-react";
import Tab1 from "../ReduxComponents/actions/ChangeTabButton/ChangeTabIndex1";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function SubjectPracticeHeader(props) {
  const TabIndex = useSelector((state) => state.ChangeTab);
  const dispatch = useDispatch();
  function handlePageTab1Change() {}
  return (
    <Segment className={styles.SubjectPracticeHeader} raised>
      <span>
        <Link to="/physics">
          <Button
            icon
            className={styles.SubjectPracticeHeaderSegmentBackButton}
            onClick={handlePageTab1Change}
            value={1}
          >
            <Icon name="caret left"></Icon>
          </Button>
        </Link>
      </span>
      <span>
        <Header>
          {props.header}
          <Header sub>{props.subheader}</Header>
        </Header>
      </span>
    </Segment>
  );
}

export default SubjectPracticeHeader;
