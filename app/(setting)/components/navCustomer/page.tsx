import React from 'react';
import styles from './navCustomer.module.scss';
import Link from 'next/link';

export default function NavCustomer() {
  return (
    <>
      <div className={styles.nav_wrap}>
        <h1 className={styles.title}>고객센터</h1>
        <ul className={styles.category_list}>
          <Link href="/customer">
            <li className={styles.category}>공지사항</li>
          </Link>
          <Link href="/customer/chore">
            <li className={styles.category}>설정</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
