import React from 'react';
import MenuSuperior from './MenuSuperior';
import styles from './layout.module.css';
import { AccessibilityWidget } from 'react-accessibility';

const Layout = ({ children }) => {
  return (
    <>
      <AccessibilityWidget />
      <header className={styles.topBar}>
        <MenuSuperior />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
