import React, { useState } from "react";
import {
  Container,
  Input,
  Grid,
  Segment,
  Icon,
  Button,
} from "semantic-ui-react";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import HelpButton from "./HelpButton";
function InputSegment() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await (
      await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
    ).json();
    if (!result.error) {
      console.log(result.message);
      history.push("/setup");
    } else {
      console.log(result.error);
    }
  };

  const handleChange = (e) => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };
  function ShowPassword1() {
    const x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function ShowPassword2() {
    const x = document.getElementById("myInput3");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <>
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.InputGridColumn}>
          <Container className={styles.InputHeader}>Email</Container>
          <Segment className={styles.InputBoxSegment} vertical="center">
            <Icon
              inverted
              color="blue"
              name="envelope"
              size="large"
              className={styles.SegmentIcon}
            />
            <Input
              className={styles.InputBox}
              placeholder="email@email.com"
              transparent
              value={email}
              onChange={handleChange}
              name="email"
            ></Input>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.InputGridColumn}>
          <Container className={styles.InputHeader}>Password</Container>
          <Segment className={styles.InputBoxSegment} vertical="center">
            <Icon
              inverted
              color="blue"
              name="key"
              size="large"
              className={styles.SegmentIcon}
            />
            <Input
              className={styles.InputBoxPassword}
              id="myInput2"
              placeholder="***************"
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              transparent
            ></Input>
            <Button
              icon
              onClick={ShowPassword1}
              className={styles.InputSegmentButton}
            >
              <Icon name="eye" />
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.InputGridColumn}>
          <Container className={styles.InputHeader}>
            Re-Enter Password
          </Container>
          <Segment className={styles.InputBoxSegment} vertical="center">
            <Icon
              inverted
              color="blue"
              name="key"
              size="large"
              className={styles.SegmentIcon}
            />
            <Input
              className={styles.InputBoxPassword}
              id="myInput3"
              placeholder="*************"
              type="password"
              transparent
            ></Input>
            <Button
              icon
              onClick={ShowPassword2}
              className={styles.InputSegmentButton}
            >
              <Icon name="eye" />
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal" className={styles.LoginColumnRow}>
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.SignUpButtonGridColumn}>
          <Button className={styles.LoginButton} fluid onClick={handleSubmit}>
            Join Now
          </Button>
        </Grid.Column>
        <Grid.Column>
          <HelpButton />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}

export default InputSegment;
