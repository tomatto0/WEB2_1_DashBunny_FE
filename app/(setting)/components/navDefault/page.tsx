import React from 'react';
import styles from './navDefault.module.scss';
import Link from 'next/link';

export default function NavDefault() {
  return (
    <>
      <div className={styles.nav_wrap}>
        <h1 className={styles.title}>가게 관리</h1>
        <ul className={styles.category_list}>
          <Link href="/default">
            <li className={styles.category}>기본정보</li>
          </Link>
          <Link href="/default/businessHours">
            <li className={styles.category}>운영정보</li>
          </Link>
          <Link href="/default/order">
            <li className={styles.category}>주문정보</li>
          </Link>
          <Link href="/default/delivery">
            <li className={styles.category}>배달정보</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
