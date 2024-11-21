'use client';

import styles from '@/styles/menu_group.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Coupon() {
  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.page_title}>
          메뉴 그룹 설정
          <Link href="/menu/add">
            <div className={styles.add_menu_button}>
              <Image
                aria-hidden
                src="/icons/add_white.svg"
                alt="add_menu_plus_icon"
                width={14}
                height={14}
              />
              그룹 추가
            </div>
          </Link>
        </div>
        <div className={styles.menu_list}>
          카테고리명
          <hr className={styles.margin_top} />
          <div>
            <div className={styles.button_wrap}>
              샐러드
              <div>
                <button className={styles.delete_button} type="button">
                  삭제
                </button>
                <button className={styles.soldout_button} type="button">
                  품절
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
