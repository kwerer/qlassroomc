import React from "react";
import { Container, Image } from "semantic-ui-react";
import CellStructure from "../../Images/CellStructure.jpg";
import styles from "./styles.module.css";
function QuestionsBody() {
  return (
    <Container className={styles.QuestionBodyContainer}>
      <Image src={CellStructure} size />
      <h3>Which structure represents a ribosome?</h3>
    </Container>
  );
}

export default QuestionsBody;
