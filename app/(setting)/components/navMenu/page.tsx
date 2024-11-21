'use client';

import React from 'react';
import styles from './navMenu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavMenu() {
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
        <h1 className={styles.title}>메뉴 관리</h1>
        <ul className={styles.category_list}>
          <Link href="/menu">
            <li
              className={`${styles.category} ${
                isActive('/menu') ? styles.active : ''
              }`}
            >
              메뉴
            </li>
          </Link>
          <Link href="/menu/add">
            <li
              className={`${styles.category} ${
                isActive('/menu/add') ? styles.active : ''
              }`}
            >
              메뉴등록
            </li>
          </Link>
          <Link href="/menu/groups">
            <li
              className={`${styles.category} ${
                isActive('/menu/groups') ? styles.active : ''
              }`}
            >
              메뉴 그룹 설정
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
