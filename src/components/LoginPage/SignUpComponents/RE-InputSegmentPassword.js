import React from "react";
import {
  Container,
  Input,
  Grid,
  Segment,
  Icon,
  Button,
  Form,
} from "semantic-ui-react";
import styles from "./styles.module.css";
function ReInputSegmentPassword(props) {
  function Password() {
    const x = document.getElementById("myInput3");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <Grid.Column width={5} className={styles.InputGridColumn}>
      <Container className={styles.InputHeader}>{props.header}</Container>
      <Segment className={styles.InputBoxSegment} vertical="center">
        <Icon
          inverted
          color="blue"
          name={props.Icon}
          size="large"
          className={styles.SegmentIcon}
        />
        <Input
          className={styles.InputBoxPassword}
          id="myInput3"
          placeholder={props.Placeholder}
          type="password"
          transparent
        ></Input>
        <Button icon onClick={Password} className={styles.InputSegmentButton}>
          <Icon name="eye" />
        </Button>
      </Segment>
    </Grid.Column>
  );
}

export default ReInputSegmentPassword;
