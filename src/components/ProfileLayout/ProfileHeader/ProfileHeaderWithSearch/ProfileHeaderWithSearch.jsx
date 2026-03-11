import React from "react";
import styles from "./ProfileHeaderWithSearch.module.css";

import toastmastersLogo from "../../../../assets/Logo-WhiteBG.jpg";

import { GrSearch } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";

function ProfileHeaderWithSearch({ userAvatar, user }) {
  // Avatar resolution (backend-safe)
  const avatar = userAvatar || user?.avatar || user?.profile_image || null;

  // Resolve name
  const userName =
    user?.name || `${user?.first_name ?? ""} ${user?.last_name ?? ""}`.trim();

  // First letter for fallback
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : null;

  // Logged-in detection
  const isLoggedIn = !!user;

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
          {/* Case 1: User uploaded image */}
          {avatar && (
            <img
              src={avatar}
              alt={`${userName} profile`}
              className={styles.avatarImg}
            />
          )}

          {/* Case 2: Logged in but no image */}
          {!avatar && isLoggedIn && firstLetter && (
            <div
              className={styles.avatarLetter}
              aria-label="User avatar letter"
            >
              {firstLetter}
            </div>
          )}

          {/* Case 3: Not logged in */}
          {!avatar && !isLoggedIn && (
            <div className={styles.avatarGuest} aria-label="Guest avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M12 12c2.7 0 4.8-2.2 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default ProfileHeaderWithSearch;
