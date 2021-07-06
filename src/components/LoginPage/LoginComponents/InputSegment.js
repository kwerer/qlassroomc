import React, { useState, useEffect, useContext } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

function InputSegment() {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await (
      await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include", // Needed to include the cookie
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
    ).json();

    if (result.accesstoken) {
      setUser({
        accesstoken: result.accesstoken,
      });
      history.push("/");
    } else {
      console.log(result.error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleChange = (e) => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };
  function Password() {
    const x = document.getElementById("myInput1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <>
      <Grid.Row columns="equal" className={styles.InputColumnRow}>
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.InputGridColumn}>
          <Form onSubmit={handleSubmit}>
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
                onChange={handleChange}
                name="email"
              ></Input>
            </Segment>
            <Container className={styles.InputHeaderPassword}>
              Password
            </Container>
            <Segment className={styles.InputBoxSegment} vertical="center">
              <Icon
                inverted
                color="blue"
                name="key "
                size="large"
                className={styles.SegmentIcon}
              />
              <Input
                className={styles.InputBoxPassword}
                id="myInput1"
                placeholder="***************"
                type="password"
                transparent
                onChange={handleChange}
                name="password"
              ></Input>
              <Button
                icon
                onClick={Password}
                className={styles.InputSegmentButton}
              >
                <Icon name="eye" />
              </Button>
            </Segment>
            <Container className={styles.ForgetPasswordContainer} fluid>
              <Link to="/forgotpassword">
                <a className={styles.ForgetPassword}>Forget Password?</a>
              </Link>
            </Container>

            <Button className={styles.LoginButton} fluid type="submit">
              Login
            </Button>
          </Form>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </>
  );
}

export default InputSegment;
