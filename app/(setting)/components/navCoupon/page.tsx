'use client';

import React from 'react';
import styles from './navCoupon.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavCoupon() {
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
        <h1 className={styles.title}>쿠폰 관리</h1>
        <ul className={styles.category_list}>
          <Link href="/coupon">
            <li
              className={`${styles.category} ${
                isActive('/coupon') ? styles.active : ''
              }`}
            >
              쿠폰 목록
            </li>
          </Link>
          <Link href="/coupon/add">
            <li
              className={`${styles.category} ${
                isActive('/coupon/add') ? styles.active : ''
              }`}
            >
              쿠폰 발급 신청
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
