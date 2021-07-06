import React, { useEffect } from "react";
import {
  Container,
  Segment,
  Button,
  Icon,
  Progress,
  Form,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import IncompleteTopicsIndivButtons from "./IncompleteTopicsIndivButtons";
import "./SubjectDashboard.css";

function IncompleteTopicsSegment() {
  let { YearlyProgress } = useSelector((state) => state.lJProgress);
  let { JanProgress } = useSelector((state) => state.janProgressBar);
  const dispatch = useDispatch();
  function GoLeft() {
    document.getElementById("IncompleteTopicsContainer").scrollLeft -= 150;
  }
  function GoRight() {
    document.getElementById("IncompleteTopicsContainer").scrollLeft += 150;
  }
  return (
    <>
      <Segment
        attached="bottom"
        className={styles.IncompleteTopicsOverallSegment}
        raised
      >
        <Container className={styles.IncompleteTopicHeaderContainer}>
          <Segment className={styles.IncompleteTopicHeader}>
            Basic Algebra
          </Segment>
        </Container>
        <div className={styles.IncompleteTopicsOverallContainer}>
          <Button icon onClick={GoLeft}>
            <Icon name="angle left" />
          </Button>
          <Container
            className={styles.IncompleteTopicsContainer}
            id="IncompleteTopicsContainer"
          >
            <IncompleteTopicsIndivButtons topic="Linear equations in one unknown" />
            <IncompleteTopicsIndivButtons topic="Algebraic Formula" />
          </Container>
          <Button icon onClick={GoRight}>
            <Icon name="angle right" />
          </Button>
        </div>
      </Segment>
    </>
  );
}

export default IncompleteTopicsSegment;
