import React, { useEffect } from "react";
import { Container, Segment, Button, Icon, Progress } from "semantic-ui-react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import JanTopicCheckboxSegment from "./TopicCheckboxSegment/JanTopicCheckboxSegment";
import FebTopicCheckboxSegment from "./TopicCheckboxSegment/FebTopicCheckboxSegment";
import MarTopicCheckboxSegment from "./TopicCheckboxSegment/MarTopicCheckboxSegment";
import AprTopicCheckboxSegment from "./TopicCheckboxSegment/AprTopicCheckboxSegment";
import MayTopicCheckboxSegment from "./TopicCheckboxSegment/MayTopicCheckboxSegment";
import JunTopicCheckboxSegment from "./TopicCheckboxSegment/JunTopicCheckboxSegment";
import JulTopicCheckboxSegment from "./TopicCheckboxSegment/JulTopicCheckboxSegment";
import AugTopicCheckboxSegment from "./TopicCheckboxSegment/AugTopicCheckboxSegment";
import SepTopicCheckboxSegment from "./TopicCheckboxSegment/SepTopicCheckboxSegment";
import OctTopicCheckboxSegment from "./TopicCheckboxSegment/OctTopicCheckboxSegment";
import NovTopicCheckboxSegment from "./TopicCheckboxSegment/NovTopicCheckboxSegment";
import DecTopicCheckboxSegment from "./TopicCheckboxSegment/DecTopicCheckboxSegment";
import {
  ZeroMonth,
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
} from "../../ReduxComponents/reduxSlicer/LearningJourney/LearningJourneyProgress";

import "./SubjectDashboard.css";

function LearningJourneySegment() {
  let { Month } = useSelector((state) => state.lJProgress);
  let { JanProgress } = useSelector((state) => state.janProgressBar);
  let { FebProgress } = useSelector((state) => state.febProgressBar);
  let { MarProgress } = useSelector((state) => state.marProgressBar);
  let { AprProgress } = useSelector((state) => state.aprProgressBar);
  let { MayProgress } = useSelector((state) => state.mayProgressBar);
  let { JunProgress } = useSelector((state) => state.junProgressBar);
  let { JulProgress } = useSelector((state) => state.julProgressBar);
  let { AugProgress } = useSelector((state) => state.augProgressBar);
  let { SepProgress } = useSelector((state) => state.sepProgressBar);
  let { OctProgress } = useSelector((state) => state.octProgressBar);
  let { NovProgress } = useSelector((state) => state.novProgressBar);
  let { DecProgress } = useSelector((state) => state.decProgressBar);

  const dispatch = useDispatch();
  function GoLeft() {
    document.getElementById("LearningJourneyContainer").scrollLeft -= 150;
  }
  function GoRight() {
    document.getElementById("LearningJourneyContainer").scrollLeft += 150;
  }

  useEffect(() => {
    if (JanProgress === 100) {
      dispatch(Jan());
    }
    if (FebProgress === 100) {
      dispatch(Feb());
    }
    if (MarProgress === 100) {
      dispatch(Mar());
    }
    if (AprProgress === 100) {
      dispatch(Apr());
    }
    if (MayProgress === 100) {
      dispatch(May());
    }
    if (JunProgress === 100) {
      dispatch(Jun());
    }
    if (JulProgress === 100) {
      dispatch(Jul());
    }
    if (AugProgress === 100) {
      dispatch(Aug());
    }
    if (SepProgress === 100) {
      dispatch(Sep());
    }
    if (OctProgress === 100) {
      dispatch(Oct());
    }
    if (NovProgress === 100) {
      dispatch(Nov());
    }
    if (DecProgress === 100) {
      dispatch(Dec());
    }
  });

  useEffect(() => {
    let d = new Date();
    let CurrentMonth = d.getMonth();
    document.getElementById("LearningJourneyContainer").scrollLeft =
      CurrentMonth * 165;
  }, []);
  return (
    <Segment className={styles.LearningJourneyOverallSegment}>
      <Button
        icon
        onClick={GoLeft}
        className={styles.LearningJourneySegmentButton}
      >
        <Icon name="angle left" />
      </Button>
      <Container
        className={styles.LearningJourneyContainer}
        id="LearningJourneyContainer"
      >
        <div className={styles.YearlyProgressBarDiv}>
          <Progress
            percent={Month}
            className={styles.YearlyProgressBar}
            size="tiny"
            id="YearlyProgressBar"
          ></Progress>

          <div className={styles.LearningJourneySegmentDiv}>
            <Segment hidden>hello world</Segment>

            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Jan</span>
                <span
                  className={
                    JanProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      JanProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={JanProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <JanTopicCheckboxSegment
                Topic11="Acceleration"
                Topic12="Speed"
                Topic13="Velocity"
                Topic14="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Feb</span>
                <span
                  className={
                    FebProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      FebProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={FebProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <FebTopicCheckboxSegment
                Topic21="Acceleration"
                Topic22="Speed"
                Topic23="Velocity"
                Topic24="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Mar</span>
                <span
                  className={
                    MarProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      MarProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={MarProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <MarTopicCheckboxSegment
                Topic31="Acceleration"
                Topic32="Speed"
                Topic33="Velocity"
                Topic34="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Apr</span>
                <span
                  className={
                    AprProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      AprProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={AprProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <AprTopicCheckboxSegment
                Topic41="Acceleration"
                Topic42="Speed"
                Topic43="Velocity"
                Topic44="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>May</span>
                <span
                  className={
                    MayProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      MayProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={MayProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <MayTopicCheckboxSegment
                Topic51="Acceleration"
                Topic52="Speed"
                Topic53="Velocity"
                Topic54="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Jun</span>
                <span
                  className={
                    JunProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      JunProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={JunProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <JunTopicCheckboxSegment
                Topic61="Acceleration"
                Topic62="Speed"
                Topic63="Velocity"
                Topic64="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Jul</span>
                <span
                  className={
                    JulProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      JulProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={JulProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <JulTopicCheckboxSegment
                Topic71="Acceleration"
                Topic72="Speed"
                Topic73="Velocity"
                Topic74="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Aug</span>
                <span
                  className={
                    AugProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      AugProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={AugProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <AugTopicCheckboxSegment
                Topic81="Acceleration"
                Topic82="Speed"
                Topic83="Velocity"
                Topic84="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Sep</span>
                <span
                  className={
                    SepProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      SepProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={SepProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <SepTopicCheckboxSegment
                Topic91="Acceleration"
                Topic92="Speed"
                Topic93="Velocity"
                Topic94="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Oct</span>
                <span
                  className={
                    OctProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      OctProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={OctProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <OctTopicCheckboxSegment
                Topic101="Acceleration"
                Topic102="Speed"
                Topic103="Velocity"
                Topic104="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Nov</span>
                <span
                  className={
                    NovProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      NovProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={NovProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <NovTopicCheckboxSegment
                Topic111="Acceleration"
                Topic112="Speed"
                Topic113="Velocity"
                Topic114="Momentum"
              />
            </Segment>
            <Segment className={styles.MonthlySegment}>
              <div className={styles.ProgressTitleDiv}>
                <span className={styles.ProgressTitle}>Dec</span>
                <span
                  className={
                    DecProgress === 100
                      ? "MonthlyAchievementCircleCompleted"
                      : "MonthlyAchievementCircle"
                  }
                >
                  <Icon
                    name="check"
                    size="small"
                    className={
                      DecProgress === 100 ? "CheckmarkCompleted" : "Checkmark"
                    }
                  />
                </span>
                <Progress
                  percent={DecProgress}
                  size="medium"
                  id="MonthlyLearningJourneyProgressBar"
                ></Progress>
              </div>
              <DecTopicCheckboxSegment
                Topic121="Acceleration"
                Topic122="Speed"
                Topic123="Velocity"
                Topic124="Momentum"
              />
            </Segment>
          </div>
        </div>
      </Container>
      <Button
        icon
        onClick={GoRight}
        className={styles.LearningJourneySegmentButton}
      >
        <Icon name="angle right" />
      </Button>
    </Segment>
  );
}

export default LearningJourneySegment;
