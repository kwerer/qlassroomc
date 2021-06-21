import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function LoginButton() {
  return (
    <Grid.Column width={5} className={styles.SignUpButtonGridColumn}>
      <Link to="/setup">
        <Button className={styles.LoginButton} fluid>
          Join Now
        </Button>
      </Link>
    </Grid.Column>
  );
}

export default LoginButton;
