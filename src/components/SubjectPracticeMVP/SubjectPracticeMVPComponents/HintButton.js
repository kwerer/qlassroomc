import React, { useState } from "react";
import { Button, Modal, Header, Divider } from "semantic-ui-react";
import styles from "./styles.module.css";
function HintButton() {
  let [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className={styles.AnswerSegmentHintButton}
        onClick={() => setOpen(true)}
      >
        HINT
      </Button>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        className={styles.Modal}
      >
        <Header>
          <h1 className={styles.ModalTitle}>HINT</h1>
          <Divider className={styles.ModalDivider} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dui, commodo tempus sapien pulvinar bibendum amet condimentum non.
          Ornare sollicitudin elit mauris eget convallis at enim. Viverra quis
          lacus tincidunt interdum ut ultrices convallis. Tellus sit tellus
          massa.
          <div className={styles.ModalButtonDiv}>
            <Button
              onClick={() => setOpen(false)}
              size="large"
              color="white"
              className={styles.ModalButton}
            >
              BACK
            </Button>
          </div>
        </Header>
      </Modal>
    </>
  );
}

export default HintButton;
