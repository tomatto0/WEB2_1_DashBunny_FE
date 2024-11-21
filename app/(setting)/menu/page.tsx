'use client';

import styles from '@/styles/menu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function menuSetting() {
  const [isChecked, setIsChecked] = useState(false);
  const [isStoreChecked, setIsStoreChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const storehandleChange = () => {
    setIsStoreChecked(!isStoreChecked);
  };

  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.page_title}>
          메뉴
          <Link href="/menu/add">
            <div className={styles.add_menu_button}>
              <Image
                aria-hidden
                src="/icons/add_white.svg"
                alt="add_menu_plus_icon"
                width={14}
                height={14}
              />
              메뉴 추가
            </div>
          </Link>
        </div>
        <div className={styles.groups}>
          <div className={styles.group}>전체</div>
          <div className={styles.group}>1인팩</div>
          <div className={styles.group}>치킨</div>
          <div className={styles.group}>샐러드</div>
        </div>

        <div className={styles.menu_list}>
          <div className={styles.button_wrap}>
            <button className={styles.delete_button} type="button">
              삭제
            </button>
            <button className={styles.soldout_button} type="button">
              품절
            </button>
          </div>

          <div className={styles.list_bar_wrap}>
            상품
            <div className={styles.list_bar_right}>
              <div>재고수량</div>

              <div className={styles.soldout_name}>
                품절표시
                <Image
                  aria-hidden
                  src="/icons/menu_filter.svg"
                  alt="add_menu_plus_icon"
                  width={15}
                  height={15}
                />
              </div>

              <label className={`${styles.inline_flex}`} htmlFor="품절표시">
                <input
                  type="checkbox"
                  className={`${styles.checkbox}`}
                  checked={isStoreChecked}
                  onChange={storehandleChange}
                  id="품절표시"
                />
              </label>
            </div>
          </div>

          <div className={styles.menu}>
            <div className={styles.menu_left}>
              <div className={styles.add_image}>
                <Image
                  aria-hidden
                  src="/icons/menu_img_plus.svg"
                  alt="camera icon"
                  width={30}
                  height={30}
                />
                이미지
              </div>
              <div className={styles.menu_title}>
                <p>sample 남성</p>
                <p>50000</p>
              </div>
            </div>

            <div className={styles.menu_right}>
              <div className={styles.left_count}> 25</div>
              <label className={`${styles.inline_flex}`} htmlFor="품절여부">
                <input
                  type="checkbox"
                  className={`${styles.peer}`}
                  checked={isChecked}
                  onChange={handleChange}
                  id="품절여부"
                />
              </label>
              <label className={`${styles.inline_flex}`} htmlFor="배열추가용">
                <input
                  type="checkbox"
                  className={`${styles.checkbox}`}
                  checked={isStoreChecked}
                  onChange={storehandleChange}
                  id="배열추가용"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
