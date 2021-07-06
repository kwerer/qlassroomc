import React from "react";
import { Container, Image, Dropdown } from "semantic-ui-react";
import styles from "./styles.module.css";
import LogoQlassroom from "../../Images/LogoQlassroom.png";
import { Link } from "react-router-dom";
function SubjectDashboardHeader() {
  const ProfilePicTrigger = (
    <Image
      src={LogoQlassroom}
      circular
      size="mini"
      className={styles.HeaderDropdownTrigger}
    />
  );
  return (
    <>
      <Container fluid className={styles.HeaderContainer}>
        <span className={styles.HeaderTitle}>
          <Image
            src={LogoQlassroom}
            size="mini"
            className={styles.HeaderImage}
          />
          Qlassroom
        </span>

        <div className={styles.HeaderDropdownDiv}>
          <Dropdown
            trigger={ProfilePicTrigger}
            icon={null}
            className={styles.HeaderDropdown}
            inline
          >
            <Dropdown.Menu className={styles.HeaderDropdownMenu}>
              <Dropdown.Item className={styles.HeaderSettings}>
                <Link to="settings" style={{ color: "#FFF" }}>
                  Settings
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className={styles.HeaderLogout}>
                <Link to="logout" style={{ color: "#FF6363" }}>
                  Logout
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </>
  );
}

export default SubjectDashboardHeader;
