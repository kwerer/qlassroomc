import React from "react";
import { Header, Grid } from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link, useHistory } from "react-router-dom";
import InputSegment from "./InputSegment";
import HelpButton from "./HelpButton";
import HeaderComponent from "../Common/HeaderComponent";
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
      <InputSegment />
      {/*Input Segment is where the input for email and password, button is located */}
      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.NeedAnAccount}>
          <Link to="/signup">Need An Account?</Link>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <HelpButton />
      </Grid.Row>
    </Grid>
  );
}

export default SignInInput;
