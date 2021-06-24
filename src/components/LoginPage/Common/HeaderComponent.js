import React from "react";
import { Header, Image } from "semantic-ui-react";
import LogoQlassroomLogin from "../../Images/LogoQlassroomLogin.jpg";
import { Link } from "react-router-dom";
import styles from "../LoginComponents/styles.module.css";
export default function HeaderComponent() {
  return (
    <div className={styles.HeaderDiv}>
      <Link to="login">
        <Image src={LogoQlassroomLogin} size="small" />
      </Link>
    </div>
  );
}
