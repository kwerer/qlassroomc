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
function InputSegmentEmail(props) {
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
          className={styles.InputBox}
          placeholder={props.Placeholder}
          transparent
        ></Input>
      </Segment>
    </Grid.Column>
  );
}

export default InputSegmentEmail;
