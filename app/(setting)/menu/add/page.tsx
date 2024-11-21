'use client';

import styles from '@/styles/settings.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function addMenu() {
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
        <form className="" action="" encType="multipart/form-data">
          <div className={styles.page_title}>
            메뉴 등록{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.formtitle}>
            메뉴 이름
            <input
              type="text"
              placeholder="맛있는 타이티"
              className={`${styles.long_input_text}`}
            />
          </div>

          <div className={styles.formtitle}>
            메뉴 그룹 선택
            <select className={styles.long_selector}>
              <option>샐러드</option>
              <option>등등 map으로 생성</option>
            </select>
          </div>

          <div className={styles.formtitle}>
            가격
            <p className={styles.long_number_text}>원</p>
            <input
              type="text"
              placeholder="9,500"
              className={`${styles.long_input_text}`}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={styles.long_toggle}>
            포장 주문 여부
            <label className={`${styles.inline_flex}`} htmlFor="포장주문여부">
              <input
                type="checkbox"
                className={`${styles.peer} ${styles.sr_only}`}
                checked={isChecked}
                onChange={handleChange}
                id="포장주문여부"
              />
            </label>
          </div>

          <div className={styles.formtitle}>
            재고 관리
            <p className={styles.long_number_text}>개</p>
            <input
              type="text"
              placeholder="0"
              className={`${styles.long_input_text}`}
            />
          </div>

          <div className={styles.long_toggle}>
            품절표시
            <label className={`${styles.inline_flex}`} htmlFor="품절표시">
              <input
                type="checkbox"
                className={`${styles.peer} ${styles.sr_only}`}
                checked={isStoreChecked}
                onChange={storehandleChange}
                id="품절표시"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
