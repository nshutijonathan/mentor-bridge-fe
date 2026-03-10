import React from "react";
import styles from "./ProfileFooter.module.css";
import toastmastersLogo from "../../../assets/Logo-Transparent-BG.png";
import { TiSocialFacebook } from "react-icons/ti";
import { RiYoutubeFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function ProfileFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* LOGO */}
      <div className={styles.logoContainer}>
        <img
          src={toastmastersLogo}
          alt="Toastmasters District 114"
          className={styles.logo}
        />
      </div>

      {/* Right Section - Social Icons and Info */}
      <div className={styles.rightSection}>
        {/* Top Row - Social Icons */}
        <div className={styles.topRow}>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.facebook}`}
            >
              <TiSocialFacebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.youtube}`}
            >
              <RiYoutubeFill size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.linkedin}`}
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className={styles.infoText}>
          <span className={styles.copyright}>
            ©2026 - District 114 - All Rights Reserved
          </span>
        </div>

        {/* Go to Top Button */}
        <button
          className={styles.goToTopButton}
          onClick={scrollToTop}
          title="Go to top"
        >
          <IoIosArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
