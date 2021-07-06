import React from "react";
import { Button, Grid } from "semantic-ui-react";
import styles from "./styles.module.css";
function LoginButton() {
  return (
    <Grid.Column width={5} className={styles.SignUpButtonGridColumn}>
      <Button className={styles.LoginButton} fluid>
        Join Now
      </Button>
    </Grid.Column>
  );
}

export default LoginButton;
