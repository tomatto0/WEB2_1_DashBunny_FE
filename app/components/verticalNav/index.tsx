import React from 'react';
import Image from 'next/image';
import styles from './verticalNav.module.scss';
import Link from 'next/link';

interface ClickModalProps {
  clickModal: () => void; // Adjust the type based on your actual use case
}

export default function VerticalNav(props: ClickModalProps) {
  const { clickModal } = props;

  return (
    <div>
      <div className={styles.v_nav}>
        <div className={styles.v_nav_top}>
          <Image
            aria-hidden
            src="/icons/v_nav_close.svg"
            alt="Window icon"
            width={41}
            height={41}
            onClick={clickModal}
          />
          <div className={styles.button_wrap}>
            <Link href="/report">
              <div className={styles.button}>
                <Image
                  aria-hidden
                  src="/icons/v_nav_report.svg"
                  alt="Window icon"
                  width={34}
                  height={34}
                />
                <p>매출조회</p>
              </div>
            </Link>
            <Link href="/setting/default">
              <div className={styles.button}>
                <Image
                  aria-hidden
                  src="/icons/v_nav_default.svg"
                  alt="Window icon"
                  width={34}
                  height={34}
                />
                <p>가게관리</p>
              </div>
            </Link>
            <Link href="/setting/menu">
              <div className={styles.button}>
                <Image
                  aria-hidden
                  src="/icons/v_nav_menu.svg"
                  alt="Window icon"
                  width={34}
                  height={34}
                />
                <p>메뉴관리</p>
              </div>
            </Link>
            <Link href="/setting/coupon">
              <div className={styles.button}>
                <Image
                  aria-hidden
                  src="/icons/v_nav_coupon.svg"
                  alt="Window icon"
                  width={34}
                  height={34}
                />
                <p>쿠폰관리</p>
              </div>
            </Link>
            <div className={styles.divider}></div>

            <Link href="/setting/customer">
              <div className={styles.button}>
                <Image
                  aria-hidden
                  src="/icons/v_nav_customer.svg"
                  alt="Window icon"
                  width={34}
                  height={34}
                />
                <p>공지사항</p>
              </div>
            </Link>
            <Link href="/setting/customer/chore">
              <div className={styles.button}>
                <Image
                  aria-hidden
                  src="/icons/v_nav_chore.svg"
                  alt="Window icon"
                  width={34}
                  height={34}
                />
                <p>설정</p>
              </div>
            </Link>
          </div>
        </div>
        <Link href="/sales-report">
          <div className={styles.bottom_button}>
            <Image
              aria-hidden
              src="/icons/v_nav_pause.svg"
              alt="Window icon"
              width={34}
              height={36}
            />
            <p>영업중지</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
