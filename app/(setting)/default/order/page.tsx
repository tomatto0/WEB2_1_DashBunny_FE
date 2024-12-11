'use client';

import styles from '@/styles/settings.module.scss';
import React, {
  FormEvent,
  ChangeEvent,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { useGetStoreOrderInfo } from '../hooks/useOrderInfo';
import useUpdateStoreOrderInfo from '../hooks/useOrderInfo';

export default function OrderInfo() {
  const { data, isLoading } = useGetStoreOrderInfo();
  const [isChecked, setIsChecked] = useState(false);

  console.log('주문정보', data);

  const initialState = {
    isTakeout: '',
    takeoutDiscount: 0,
    minOrderAmount: 0,
    deliveryTip: 0,
  };

  function reducer(
    state: typeof initialState,
    action:
      | { type: 'UPDATE_FIELD'; field: string; value: string | number }
      | { type: 'SET_INITIAL_STATE'; value: typeof initialState },
  ) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'SET_INITIAL_STATE':
        return {
          ...state,
          ...action.value,
        };
      default:
        return state;
    }
  }

  const [formData, dispatch] = useReducer(reducer, initialState);

  // Update state when `data` is loaded
  useEffect(() => {
    if (data) {
      dispatch({
        type: 'SET_INITIAL_STATE',
        value: {
          isTakeout: data.isTakeout || '',
          takeoutDiscount: data.takeoutDiscount || 0,
          minOrderAmount: data.minOrderAmount || 0,
          deliveryTip: data.deliveryTip || 0,
        },
      });
      if (data.isTakeout === 'On') {
        setIsChecked(true);
      }
    }
  }, [data]);

  //입력될때마다 formdata가 업뎃되는 함수
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    // Convert the value to a number if the input type is "number"
    const parsedValue = type === 'number' ? parseFloat(value) : value;

    dispatch({ type: 'UPDATE_FIELD', field: name, value: parsedValue });
  };

  //checkbox가 눌러질때마다 checkbox의 상태에 따라서 formdata가 업뎃되는 함수
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'isTakeout',
      value: !isChecked ? 'On' : 'Off',
    });
  };

  const { mutate } = useUpdateStoreOrderInfo();

  //폼데이터 제출
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData);
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <>
      <div className={styles.contents_wrap}>
        <form
          className=""
          action=""
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
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
                onChange={handleCheckBoxChange}
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
              className={styles.short_input_text}
              name="takeoutDiscount"
              value={formData.takeoutDiscount}
              onChange={handleInputChange}
            ></input>
          </div>

          <div className={styles.formtitle}>
            최소 주문금액
            <p className={styles.short_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              className={styles.short_input_text}
              name="minOrderAmount"
              value={formData.minOrderAmount}
              onChange={handleInputChange}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={styles.formtitle}>
            기본 배달팁(최소 주문 금액 이상)
            <p className={styles.short_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              className={styles.short_input_text}
              name="deliveryTip"
              value={formData.deliveryTip}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}
