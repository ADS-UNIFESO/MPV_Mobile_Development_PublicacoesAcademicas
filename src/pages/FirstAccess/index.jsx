import styles from "./styles.module.css";
import React from "react";

import unifesoData from "../../assets/json/unifesoData.json";
import MainBanner from "../../components/banners/Main";
import Login from "../../components/banners/Login";
import MenuSuperior from "../../components/MenuSuperior";

export default function FirstAccess({ pageId }) {
  const filteredId = unifesoData.find((data) => data.id === pageId);
  if (!filteredId) {
    return null;
  }

  const { banners, ...filteredWithoutBanners } = filteredId;

  const filteredBanner = (type, background, revertPosition, anchor) => [
    filteredWithoutBanners,
    filteredId.banners.filter((banner) => banner.type === type),
    background,
    revertPosition,
    anchor,
  ];
  return (
    <>
      <MenuSuperior />
      <div className={styles.container}>
        <div className={styles.content}>
          <MainBanner
            type={filteredBanner("Main", true, false, "anchorHome")}
            className={styles.mainBanner}
          />
          <Login type={filteredBanner("Login", false, false, "anchorHome")} />
        </div>
      </div>
    </>
  );
}