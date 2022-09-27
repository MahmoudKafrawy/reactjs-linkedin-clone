import React from "react";
import styles from "../../styles/HeaderOption.module.css";
const HeaderOption = ({ title, Icon }) => {
  return (
    <div className={styles.HeaderOption}>
      <div className={styles.HeaderOptionIcon}>{Icon && <Icon />}</div>
      <div className={styles.HeaderOptionTitle}>{title}</div>
    </div>
  );
};

export default HeaderOption;
