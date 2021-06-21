import React from "react";
import { Header, Image } from "semantic-ui-react";
import LogoQlassroomLogin from "../../Images/LogoQlassroomLogin.jpg";
import styles from "./styles.module.css";
export default function HeaderComponent() {
  return (
    <div className={styles.HeaderDiv}>
      <Image src={LogoQlassroomLogin} size="small" />
    </div>
  );
}
