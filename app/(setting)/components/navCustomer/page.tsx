'use client';

import React from 'react';
import styles from './navCustomer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavCustomer() {
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
        <h1 className={styles.title}>고객센터</h1>
        <ul className={styles.category_list}>
          <Link href="/customer">
            <li
              className={`${styles.category} ${
                isActive('/customer') ? styles.active : ''
              }`}
            >
              공지사항
            </li>
          </Link>
          <Link href="/customer/chore">
            <li
              className={`${styles.category} ${
                isActive('/customer/chore') ? styles.active : ''
              }`}
            >
              설정
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
