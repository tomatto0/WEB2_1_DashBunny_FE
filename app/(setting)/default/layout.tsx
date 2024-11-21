'use client';

import type { Metadata } from 'next';
import NavDefault from '../components/navDefault/page';
import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.flex}>
      <NavDefault />
      {children}
    </div>
  );
}
