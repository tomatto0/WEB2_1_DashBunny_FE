'use client';

import styles from '@/styles/settings.module.scss';
import { useRouter } from 'next/navigation';
import { useState, useReducer, FormEvent, ChangeEvent } from 'react';
import { useCouponGroup } from '../hook/useCoupon';

export default function addCoupon() {
  const router = useRouter();

  const [isPercentActive, setIsPercentActive] = useState(false);

  const initialState = {
    couponName: '',
    discountPrice: 0,
    discountType: '',
    minOrderPrice: 0,
    maximumDiscount: 0,
    expiredDay: 0,
    couponDescription: '',
  };

  function reducer(
    state: typeof initialState,
    action: {
      type: 'UPDATE_FIELD';
      field: string;
      value: string | number | boolean;
    },
  ) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  }

  const [formData, dispatch] = useReducer(reducer, initialState);

  //입력될때마다 formdata가 업뎃되는 함수
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  //원 버튼이 눌러질때 formdata가 업뎃되는 함수
  const handleSetWon = () => {
    setIsPercentActive(false);

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'discountType',
      value: 'FIXED',
    });
  };

  //퍼센트 버튼이 눌러질때 formdata가 업뎃되는 함수
  const handleSetPercent = () => {
    setIsPercentActive(true);

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'discountType',
      value: 'PERCENT',
    });
  };

  const { addCouponMutate } = useCouponGroup();

  //폼데이터 제출
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addCouponMutate(formData);
    router.push('/coupon');
  };

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" onSubmit={handleSubmit}>
          <div className={styles.page_title}>
            쿠폰 발급 신청{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.formtitle}>
            쿠폰 이름
            <input
              type="text"
              placeholder="쿠폰 이름을 입력해주세요"
              className={`${styles.long_input_text}`}
              name="couponName"
              value={formData.couponName}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            할인 금액
            <div className={styles.discount_wrap}>
              <input
                type="number"
                placeholder="0"
                className={`${styles.long_input_discount}`}
                name="discountPrice"
                value={formData.discountPrice}
                onChange={handleInputChange}
              />
              <div
                className={`${styles.discount_button} ${
                  isPercentActive === true
                    ? styles.button_active
                    : styles.disabled
                }`}
                onClick={handleSetPercent}
              >
                %
              </div>
              <div
                className={`${styles.discount_button} ${
                  isPercentActive === true
                    ? styles.disabled
                    : styles.button_active
                }`}
                onClick={handleSetWon}
              >
                원
              </div>
            </div>
          </div>

          <div className={styles.formtitle}>
            최소 주문 금액
            <p className={styles.long_number_text}>원 이상</p>
            <input
              type="number"
              placeholder="0"
              className={`${styles.long_input_text}`}
              name="minOrderPrice"
              value={formData.minOrderPrice}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            최대 할인 금액
            <p className={styles.long_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              className={`${styles.long_input_text}`}
              name="maximumDiscount"
              value={formData.maximumDiscount}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            쿠폰 유효 기간
            <select
              className={styles.long_selector}
              onChange={handleInputChange}
              name="expiredDay"
            >
              <option value={7}>7일</option>
              <option value={14}>14일</option>
              <option value={21}>21일</option>
              <option value={0}>당일</option>
            </select>
          </div>

          <div className={styles.formtitle}>
            쿠폰 설명
            <input
              type="text"
              placeholder="관리자에게만 보이는 쿠폰 용도 설명입니다."
              className={`${styles.long_input_text}`}
              name="couponDescription"
              value={formData.couponDescription}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}
