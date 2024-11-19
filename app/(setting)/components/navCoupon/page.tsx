import React from 'react';
import styles from './navCoupon.module.scss';
import Link from 'next/link';

export default function NavCoupon() {
  return (
    <>
      <div className={styles.nav_wrap}>
        <h1 className={styles.title}>쿠폰 관리</h1>
        <ul className={styles.category_list}>
          <Link href="/coupon">
            <li className={styles.category}>쿠폰 목록</li>
          </Link>
          <Link href="/coupon/add">
            <li className={styles.category}>쿠폰 발급 신청</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
