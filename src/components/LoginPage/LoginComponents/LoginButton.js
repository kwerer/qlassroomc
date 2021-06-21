import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";
function LoginButton() {
  return (
    <Grid.Column width={5} className={styles.InputGridColumn}>
      <Button className={styles.LoginButton} fluid>
        Login
      </Button>
    </Grid.Column>
  );
}

export default LoginButton;
