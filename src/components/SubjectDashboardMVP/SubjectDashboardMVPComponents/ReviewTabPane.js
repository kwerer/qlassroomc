import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Tab,
  Grid,
  Segment,
  Dropdown,
  Checkbox,
  Item,
  Container,
  Icon,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import { OptionsData } from "../../CommonComponents/QuestionsData0";
import ReviewTabCalender from "./ReviewTabComponents/ReviewTabCalender";
let Today = new Date();

function ReviewTabPane() {
  const { CurrentDate } = useSelector((state) => state.CurrentDate);
  const { CurrentMonth } = useSelector((state) => state.CurrentMonth);

  const [showTrue, setShowTrue] = useState(false);
  const [answerDecider, setAnswerDecider] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  function handleShowCorrect() {
    if (answerDecider === false) {
      setAnswerDecider(true);
    } else if (answerDecider === true) {
      setAnswerDecider(false);
    }
    if (showTrue === false) {
      setShowTrue(true);
    } else if (showTrue === true) {
      setShowTrue(false);
    }
  }
  function handleDropdown() {
    if (openDropdown === true) {
      setOpenDropdown(false);
    } else if (openDropdown === false) {
      setOpenDropdown(true);
    }
  }
  const trigger = (
    <span className={styles.DropdownButton} onClick={handleDropdown}>
      <span>{`${CurrentDate}/${CurrentMonth}`}</span>
      <span className={styles.DropdownButtonIcon}>
        <Icon name="triangle down" />
      </span>
    </span>
  );
  const panes = [
    {
      menuItem: "Daily Practice",
      render: () => (
        <Tab.Pane className={styles.ReviewTabPane}>
          <Segment attached="bottom" className={styles.SegmentPane}>
            <span className={styles.DailyPracticeHeader}>
              <Dropdown trigger={trigger} icon={null} open={openDropdown}>
                <Dropdown.Menu className={styles.DropdownMenu}>
                  <Segment className={styles.ReviewTabCalenderOverallSegment}>
                    <ReviewTabCalender />
                  </Segment>
                </Dropdown.Menu>
              </Dropdown>
            </span>
            <span className={styles.CheckboxSpan}>
              <Checkbox
                label="SHOW CORRECT ANSWERS"
                onClick={handleShowCorrect}
                checked={showTrue}
                radio
                id="ReviewTabSegmentCheckbox"
              />
            </span>
          </Segment>
          <Grid>
            <Grid.Row columns="equal">
              <Grid.Column>
                {OptionsData.map((Options) => {
                  if (Options.gotCorrect === false && answerDecider === false) {
                    return (
                      <Container
                        className={styles.QuestionLoopContainerNumberFalse}
                      >
                        <h3>{Options.QuestionNumber}</h3>
                      </Container>
                    );
                  }
                  if (Options.gotCorrect === false && answerDecider === true) {
                    return (
                      <Container
                        className={styles.QuestionLoopContainerNumberFalse}
                      >
                        <h3>{Options.QuestionNumber}</h3>
                      </Container>
                    );
                  }
                  if (Options.gotCorrect === true && answerDecider === true) {
                    return (
                      <Container
                        className={styles.QuestionLoopContainerNumberTrue}
                      >
                        <h3>{Options.QuestionNumber}</h3>
                      </Container>
                    );
                  }
                })}
              </Grid.Column>
              <Grid.Column width={12}>
                {OptionsData.map((Options) => {
                  if (Options.gotCorrect === false && answerDecider === false) {
                    return (
                      <Container className={styles.QuestionLoopContainerFalse}>
                        <Item>
                          <Item.Content>
                            <Item.Header>
                              Your Answer:
                              <span className={styles.ReviewTabYourAnswerWrong}>
                                {Options.YourAnswer}
                              </span>
                            </Item.Header>
                            <Item.Description>
                              {
                                Options.answerOptions[Options.YourAnswer]
                                  .explanation
                              }
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Container>
                    );
                  }
                  if (Options.gotCorrect === false && answerDecider === true) {
                    return (
                      <Container className={styles.QuestionLoopContainerFalse}>
                        <Item>
                          <Item.Content>
                            <Item.Header>
                              <span>Your Answer:</span>
                              <span className={styles.ReviewTabYourAnswerWrong}>
                                {Options.YourAnswer}
                              </span>
                            </Item.Header>
                            <Item.Description>
                              <span className={styles.ReviewTabExplanation}>
                                Explanation:
                              </span>
                              {
                                Options.answerOptions[Options.YourAnswer]
                                  .explanation
                              }
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Container>
                    );
                  }
                  if (Options.gotCorrect === true && answerDecider === true) {
                    return (
                      <Container className={styles.QuestionLoopContainerTrue}>
                        <Item>
                          <Item.Content>
                            <Item.Header>
                              Your Answer:
                              <span
                                className={styles.ReviewTabYourAnswerCorrect}
                              >
                                {Options.YourAnswer}
                              </span>
                            </Item.Header>
                            <Item.Description>
                              <span className={styles.ReviewTabExplanation}>
                                Explanation:
                              </span>
                              {
                                Options.answerOptions[Options.YourAnswer]
                                  .explanation
                              }
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Container>
                    );
                  }
                })}
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      ),
    },
    { menuItem: "Topical", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  ];
  return <Tab panes={panes} id="reviewtab" />;
}

export default ReviewTabPane;
