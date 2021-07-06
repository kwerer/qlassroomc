import React from "react";
import { Header, Grid } from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import InputSegment from "./InputSegment";
import HeaderComponent from "../Common/HeaderComponent";
function SignUpInput() {
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
            CREATE YOUR ACCOUNT
          </Header>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>

      <InputSegment />
      {/*this is where all the input boxes are */}

      <Grid.Row columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={5} className={styles.NeedAnAccount}>
          <Link to="/login">Already Have An Account?</Link>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default SignUpInput;
