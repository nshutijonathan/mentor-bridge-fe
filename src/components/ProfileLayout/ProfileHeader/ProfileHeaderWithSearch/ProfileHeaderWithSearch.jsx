import React from "react";
import styles from "./ProfileHeaderWithSearch.module.css";

import toastmastersLogo from "../../../../assets/Logo-WhiteBG.jpg";

import { GrSearch } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";

function ProfileHeaderWithSearch({ userAvatar, user }) {
  // Resolve avatar safely for backend integration
  const avatar = userAvatar || user?.avatar || user?.profile_image || null;

  const userName =
    user?.name ||
    `${user?.first_name ?? ""} ${user?.last_name ?? ""}`.trim() ||
    "User";

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
          {avatar ? (
            <img
              src={avatar}
              alt={`${userName} profile`}
              className={styles.avatarImg}
            />
          ) : (
            <div
              className={styles.avatarPlaceholder}
              aria-label="User avatar placeholder"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default ProfileHeaderWithSearch;
