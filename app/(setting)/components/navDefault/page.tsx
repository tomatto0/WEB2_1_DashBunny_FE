'use client';

import React from 'react';
import styles from './navDefault.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavDefault() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    // 현재 경로를 activePath로 설정
    setActivePath(pathname);
  }, [pathname]);

  const isActive = (path: string) => activePath === path;

  return (
    <>
      <div className={styles.nav_wrap}>
        <h1 className={styles.title}>가게 관리</h1>
        <ul className={styles.category_list}>
          <Link href="/default">
            <li
              className={`${styles.category} ${
                isActive('/default') ? styles.active : ''
              }`}
            >
              기본정보
            </li>
          </Link>
          <Link href="/default/businessHours">
            <li
              className={`${styles.category} ${
                isActive('/default/businessHours') ? styles.active : ''
              }`}
            >
              운영정보
            </li>
          </Link>
          <Link href="/default/order">
            <li
              className={`${styles.category} ${
                isActive('/default/order') ? styles.active : ''
              }`}
            >
              주문정보
            </li>
          </Link>
          <Link href="/default/delivery">
            <li
              className={`${styles.category} ${
                isActive('/default/delivery') ? styles.active : ''
              }`}
            >
              배달정보
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
