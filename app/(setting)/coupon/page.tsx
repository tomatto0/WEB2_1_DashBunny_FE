'use client';

import styles from '@/styles/coupon.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useDeleteCoupon, useGetCouponList } from './hook/useCoupon';
import { coupon } from '@/utils/model/coupon';

export default function Coupon() {
  const { data, isLoading, isError } = useGetCouponList();
  const couponList = data;

  const { useDeleteCouponMutate } = useDeleteCoupon();

  const handleDeleteCoupon = (coupon: coupon) => {
    const confirmation = window.confirm(
      `쿠폰 '${coupon.couponName}'을(를) 운영중지 하시겠습니까?`,
    );
    if (confirmation) {
      const ownerCouponId = coupon.ownerCouponId;
      useDeleteCouponMutate(ownerCouponId);
    }
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.page_title}>
          쿠폰
          <Link href="/coupon/add">
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
              <div className={styles.margin_22px}>할인금액</div>

              <div className={`${styles.soldout_name} ${styles.margin_15px}`}>
                사용기한
              </div>

              <div className={`${styles.soldout_name} ${styles.margin_8px}`}>
                최소주문금액
              </div>

              <div className={styles.soldout_name}>상태</div>
              <div className={styles.soldout_name}>운영중지</div>
            </div>
          </div>
          {couponList?.map((coupon: coupon) => (
            <div className={styles.menu} key={coupon.ownerCouponId}>
              <div className={styles.menu_left}>
                <div className={styles.menu_title}>
                  <p>{coupon.ownerCouponId}</p>
                </div>
              </div>
              <div>{coupon.couponName}</div>
              <div className={styles.menu_right}>
                <div className={styles.min_width}>
                  {coupon.discountPrice}
                  {coupon.discountType}
                </div>
                <div className={styles.expire}>
                  발급 후 {coupon.expiredDay}일 이내
                </div>
                <div className={styles.min_orderPrice}>
                  {coupon.minOrderPrice}
                </div>
                <div
                  className={`${styles.badge} ${styles.min_width} ${
                    coupon.couponStatus === 'ACTIVE'
                      ? styles.orange
                      : coupon.couponStatus === 'EARLY_TERMINATED'
                        ? styles.purple
                        : styles.gray_blue
                  } `}
                >
                  {coupon.couponStatus === 'ACTIVE'
                    ? '진행중'
                    : coupon.couponStatus === 'EARLY_TERMINATED'
                      ? '조기종료'
                      : '만료'}
                </div>
                <div
                  className={styles.delete_coupon}
                  onClick={() => {
                    handleDeleteCoupon(coupon);
                  }}
                >
                  <Image
                    aria-hidden
                    src="/icons/coupon_delete.svg"
                    alt="Window icon"
                    width={22}
                    height={22}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
