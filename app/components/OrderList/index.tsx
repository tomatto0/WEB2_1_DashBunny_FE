import React from 'react';
import Image from 'next/image';
import styles from './OrderList.module.scss';
import Link from 'next/link';

export default function OrderList() {
  return (
    <div className={styles.order_list}>
      <div className={styles.new_list_wrap}>
        <div className={styles.list_title}>
          <h4>신규 1건</h4>
        </div>
        <div className={styles.new_list}>
          <div className={styles.new_order_wrap}>
            <div className={styles.order_title}>
              <h3 className={styles.order_number}>배달 00CRT</h3>
              <div className={styles.order_paid}>결제완료 · 3분전</div>
            </div>
            <div className={styles.order_contents}>
              <p className={styles.order_item}>
                [오픈특가] 화덕 마르게리따 산마르지자노산...
              </p>
              <div className={styles.order_price}>
                23,000
                <p>원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list_title}>
        <h4>진행 3건</h4>
      </div>
      <div className={styles.list}>
        <div className={styles.order_wrap}>
          <div className={styles.order_title}>
            <h3 className={styles.order_number}>배달 00CRT</h3>
            <div className={styles.order_paid}>결제완료 · 13분전</div>
          </div>
          <div className={styles.order_contents}>
            <p className={styles.order_item}>스파이시 치킨 샌드위치 세트</p>
            <div className={styles.order_price}>
              23,000
              <p>원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
