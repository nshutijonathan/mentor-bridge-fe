import React from "react";
import styles from "./ProfileHeaderWithSearch.module.css";

import toastmastersLogo from "../../../../assets/Logo-WhiteBG.jpg";

import { GrSearch } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";

function ProfileHeaderWithSearch({ userAvatar }) {
  return (
    <header className={styles.header}>
      {/* LOGO */}
      <div className={styles.logoContainer}>
        <img
          src={toastmastersLogo}
          alt="Toastmasters District 114"
          className={styles.logo}
        />
      </div>

      {/* SEARCH */}
      <div className={styles.search}>
        <span className={styles.searchIcon}>
          <GrSearch />
        </span>

        <input
          type="search"
          placeholder="Mentor Search"
          className={styles.searchInput}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className={styles.rightSection}>
        <div className={styles.iconActions}>
          {/* EMAIL */}
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Messages"
          >
            <TfiEmail />
          </button>

          {/* NOTIFICATIONS */}
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Notifications"
          >
            <CiBellOn />
          </button>
        </div>

        {/* AVATAR */}
        <div className={styles.avatar}>
          {userAvatar ? (
            <img
              src={userAvatar}
              alt="User profile"
              className={styles.avatarImg}
            />
          ) : (
            <div className={styles.avatarPlaceholder}></div>
          )}
        </div>
      </div>
    </header>
  );
}

export default ProfileHeaderWithSearch;
