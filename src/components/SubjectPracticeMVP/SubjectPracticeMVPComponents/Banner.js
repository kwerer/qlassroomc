import React from "react";
import { Segment, Icon, Container, Button } from "semantic-ui-react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Tab1 } from "../../ReduxComponents/reduxSlicer/ChangeTabs";
function Banner() {
  const dispatch = useDispatch();

  let history = useHistory();
  function handlePageTab1Change() {
    history.push("/physics");
    dispatch(Tab1());
    console.log("what");
  }
  return (
    <Segment attached="bottom" className={styles.HeaderSegment}>
      <div className={styles.HeaderIconContainer}>
        <Button
          Icon
          compact
          className={styles.HeaderButton}
          onClick={handlePageTab1Change}
        >
          <Icon name="arrow left" size="large" />
        </Button>
      </div>
      <Container className={styles.HeaderContainer}>
        <Link to="/subject/practice/q15">
          <Button Icon compact className={styles.HeaderButton} size="big">
            <Icon name="angle left" />
          </Button>
        </Link>
        <span className={styles.BannerQuestionNumber}>1/15</span>
        <Link to="/subject/practice/q2">
          <Button Icon compact className={styles.HeaderButton} size="big">
            <Icon name="angle right" />
          </Button>
        </Link>
      </Container>
      <div className={styles.HeaderTitle}>
        <h5>DAILY PRACTICE 1</h5>
        PHYSICS
      </div>
    </Segment>
  );
}

export default Banner;
