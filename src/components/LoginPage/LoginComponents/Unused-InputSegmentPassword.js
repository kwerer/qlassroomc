import React from "react";
import {
  Container,
  Input,
  Grid,
  Segment,
  Icon,
  Button,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function InputSegmentPassword(props) {
  function Password() {
    const x = document.getElementById("myInput1");
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
          id="myInput1"
          placeholder={props.Placeholder}
          type="password"
          transparent
        ></Input>
        <Button icon onClick={Password} className={styles.InputSegmentButton}>
          <Icon name="eye" />
        </Button>
      </Segment>
      <Container className={styles.ForgetPasswordContainer} fluid>
        <Link to="/forgotpassword">
          <a className={styles.ForgetPassword}>Forget Password?</a>
        </Link>
      </Container>
    </Grid.Column>
  );
}

export default InputSegmentPassword;
