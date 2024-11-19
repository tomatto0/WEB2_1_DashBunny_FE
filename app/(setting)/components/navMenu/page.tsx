import React from 'react';
import styles from './navMenu.module.scss';
import Link from 'next/link';

export default function NavMenu() {
  return (
    <>
      <div className={styles.nav_wrap}>
        <h1 className={styles.title}>메뉴 관리</h1>
        <ul className={styles.category_list}>
          <Link href="/menu">
            <li className={styles.category}>메뉴</li>
          </Link>
          <Link href="/menu/add">
            <li className={styles.category}>메뉴등록</li>
          </Link>
          <Link href="/menu/groups">
            <li className={styles.category}>메뉴 그룹 설정</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
