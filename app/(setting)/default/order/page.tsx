'use client';

import styles from '@/styles/settings.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function Delivery() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" encType="multipart/form-data">
          <div className={styles.page_title}>
            주문정보{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.short_toggle}>
            포장 주문 여부
            <label className={`${styles.inline_flex}`} htmlFor="포장주문여부">
              <input
                type="checkbox"
                className={`${styles.peer}`}
                checked={isChecked}
                onChange={handleChange}
                id="포장주문여부"
              />
            </label>
          </div>

          <div className={styles.formtitle}>
            포장할인
            <p className={styles.short_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="10000"
              step="100"
              className={styles.short_input_text}
            ></input>
          </div>

          <div className={styles.formtitle}>
            최소 주문금액
            <p className={styles.short_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="100000"
              step="100"
              className={styles.short_input_text}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={styles.formtitle}>
            기본 배달팁(최소 주문 금액 이상)
            <p className={styles.short_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="100000"
              step="100"
              className={styles.short_input_text}
            />
          </div>
        </form>
      </div>
    </>
  );
}
