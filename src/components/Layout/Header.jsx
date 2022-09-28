import React from "react";
import styles from "../../styles/Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import { Apps, BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from "@mui/icons-material";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLeft}>
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
          <div className={styles.search}>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className={styles.headerRight}>
          <HeaderOption title="Home" Icon={Home} />
          <HeaderOption title="My Network" Icon={SupervisorAccount} />
          <HeaderOption title="Jobs" Icon={BusinessCenter} />
          <HeaderOption title="Messaging" Icon={Chat} />
          <HeaderOption title="Notifications" Icon={Notifications} />
          <HeaderOption title="Me" avatar="https://www14.0zz0.com/2022/09/27/22/690075953.jpg" />
          <HeaderOption title="Work" Icon={Apps} />
        </div>
      </div>
    </div>
  );
};

export default Header;
