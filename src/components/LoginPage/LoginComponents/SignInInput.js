import React from "react";
import { Container, Input, Header, Grid, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import InputSegmentEmail from "./InputSegmentEmail";
import InputSegmentPassword from "./InputSegmentPassword";
import LoginButton from "./LoginButton";
import HelpButton from "./HelpButton";
import HeaderComponent from "../SetUpComponents/HeaderComponent";
function SignInInput() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <HeaderComponent />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column className={styles.SignInTextColumn}>
          <Header as="h1" className={styles.SignInText}>
            SIGN IN TO YOUR ACCOUNT
          </Header>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal" className={styles.InputColumnRow}>
        <Grid.Column></Grid.Column>
        <InputSegmentEmail
          header="Email"
          Icon="envelope"
          Placeholder="email@email.com"
        />
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <InputSegmentPassword
          header="Password"
          Icon="key"
          Placeholder="*******************"
          ButtonIcon="eye"
        />
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal" className={styles.LoginColumnRow}>
        <Grid.Column></Grid.Column>
        <LoginButton />
        <Grid.Column>
          <HelpButton />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.NeedAnAccount}>
          <Link to="/signup">
            <a>Need An Account?</a>
          </Link>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default SignInInput;
