import React from 'react';
import MenuSuperior from './MenuSuperior';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.topBar}>
        <MenuSuperior />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
