'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../modal_order.module.scss';
import { useState } from 'react';
import OrderCounter from '../OrderCounter';

export default function NewOrderModal() {
  const [fullTime, setFullTime] = useState(50);
  return (
    <>
      <div className={styles.modal_wrap}>
        <div className={styles.header_wrap}>
          <div className={styles.header_left}>
            <Image
              aria-hidden
              src="/icons/modal_order.svg"
              alt="alert icon"
              width={30}
              height={30}
            />
            배달 00CRT
          </div>
          <Image
            aria-hidden
            src="/icons/window_close.svg"
            alt="Window icon"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.contents_wrap}>
          <div className={styles.content}>
            <div className={styles.text_section}>
              메뉴 3개 · 총 32,000원(결제완료)
              <p className={styles.detail}>
                [오픈특가]화덕마르게리따 산마르지아노산 토마토플럼,
                아메리카노(아이스, tall) 1개, 애플시나몬 크로플 1개
              </p>
            </div>
            <div className={styles.order_buttons}>
              <button className={styles.order_decline}>거부</button>
              <OrderCounter number={fullTime} onStateChange={setFullTime} />
              <button className={styles.order_accept}>접수</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
