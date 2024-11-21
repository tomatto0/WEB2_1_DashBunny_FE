'use client';

import styles from '@/styles/coupon.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Coupon() {
  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.page_title}>
          쿠폰
          <Link href="/menu/add">
            <div className={styles.add_menu_button}>
              <Image
                aria-hidden
                src="/icons/add_white.svg"
                alt="add_menu_plus_icon"
                width={14}
                height={14}
              />
              쿠폰 발행
            </div>
          </Link>
        </div>

        <div className={styles.menu_list}>
          <div className={styles.list_bar_wrap}>
            쿠폰번호
            <div>쿠폰명</div>
            <div className={styles.list_bar_right}>
              <div>할인금액</div>

              <div className={styles.soldout_name}>사용기한</div>

              <div className={styles.soldout_name}>발급 수</div>

              <div className={styles.soldout_name}>상태</div>
            </div>
          </div>

          <div className={styles.menu}>
            <div className={styles.menu_left}>
              <div className={styles.menu_title}>
                <p>00001238</p>
              </div>
            </div>
            <div>비오면 우비 할인</div>
            <div className={styles.menu_right}>
              <div className={styles.min_width}>2000원</div>
              <div className={styles.expire}>발급 후 7일 이내</div>
              <div className={styles.min_width}>0</div>
              <div
                className={`${styles.badge} ${styles.orange} ${styles.min_width}`}
              >
                진행중
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
