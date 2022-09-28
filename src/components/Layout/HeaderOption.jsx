import { Avatar } from "@mui/material";
import React from "react";
import styles from "../../styles/HeaderOption.module.css";

const HeaderOption = ({ avatar, title, Icon }) => {
  return (
    <div className={styles.HeaderOption}>
      {Icon && <Icon className={styles.icons} />}
      {avatar && <Avatar className={styles.icons} src={avatar} />}
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default HeaderOption;
