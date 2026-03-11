import React from "react";
import styles from "./ProfileHeaderWithoutSearch.module.css";

import toastmastersLogo from "../../../../assets/Logo-WhiteBG.jpg";

import { TfiEmail } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";

function ProfileHeaderWithoutSearch({ userAvatar, user }) {
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

export default ProfileHeaderWithoutSearch;
