import React from "react";
import { Button, Header, Icon, Grid, Dropdown } from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function QuestionsButton() {
  let list = [];
  for (var i = 1; i < 16; i++) {
    list.push(i);
  }

  return (
    <Dropdown
      text="QUESTIONS"
      labeled
      fluid
      button
      className="icon"
      id="dropdown"
    >
      <Dropdown.Menu className={styles.DropdownMenu}>
        <Grid id="DropdownGrid">
          <Grid.Row>
            <Grid.Column fluid>
              <Header className={styles.DropdownHeader}>QUESTIONS</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div fluid className={styles.DropdownCol}>
              {list.map((QnNumber) => (
                <div className={styles.DropdownInDivButtonDiv}>
                  <div className={styles.DropdownInDivButtonDivBorder}>
                    <Link to={`/subject/practice/q${QnNumber}`}>
                      <Button className={styles.DropdownInDivButton} circular>
                        {QnNumber}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Grid.Row>
        </Grid>
        <Button fluid className={styles.DropdownBackButton} attached="bottom">
          <Icon name="caret up" inverted color="white" />
        </Button>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default QuestionsButton;
