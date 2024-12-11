'use client';

import styles from '@/styles/settings.module.scss';
import { useState, useReducer, FormEvent, ChangeEvent } from 'react';
import { useAddMenu, useGetGroupMenuOnly } from '../hooks/useMenu';
import { useRouter } from 'next/navigation';

export default function addMenu() {
  const router = useRouter();
  const { data, isError, isLoading } = useGetGroupMenuOnly();
  const groupMenus = data || [];

  //재고관리, 품절표시 토글 상태 관리
  const [isChecked, setIsChecked] = useState(false);
  const [isStoreChecked, setIsStoreChecked] = useState(false);

  //초깃값 설정
  const initialState = {
    menuName: '',
    menuGroupId: 0,
    price: 0,
    menuContent: '',
    stockAvaliable: false,
    menuStock: 0,
    isSoldOut: false,
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

  //checkbox가 눌러질때마다 checkbox의 상태에 따라서 formdata가 업뎃되는 함수
  const handleStockChange = () => {
    setIsChecked(!isChecked);

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'stockAvaliable',
      value: !isChecked,
    });
  };

  //품절 checkbox가 눌러질때마다 checkbox의 상태에 따라서 formdata가 업뎃되는 함수
  const handleSoldOutChange = () => {
    setIsStoreChecked(!isStoreChecked);

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'isSoldOut',
      value: !isStoreChecked,
    });
  };

  const { addMenuMutate } = useAddMenu();

  //폼데이터 제출
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addMenuMutate(formData);
    router.push('/menu');
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" onSubmit={handleSubmit}>
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
              placeholder="메뉴 이름을 입력해주세요"
              className={`${styles.long_input_text}`}
              name="menuName"
              value={formData.menuName}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            메뉴 그룹 선택
            <select
              className={styles.long_selector}
              onChange={handleInputChange}
              name="menuGroupId"
              disabled={!groupMenus.length}
            >
              <option value="">
                {isLoading
                  ? '메뉴 그룹을 불러오는 중...'
                  : '메뉴 그룹을 선택해주세요'}
              </option>
              {groupMenus?.map((menu) => (
                <option value={menu.groupId} key={menu.groupId}>
                  {menu.groupName}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formtitle}>
            가격
            <p className={styles.long_number_text}>원</p>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="100000"
              step="100"
              className={`${styles.long_input_text}`}
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            메뉴 소개
            <input
              type="text"
              placeholder="메뉴 소개를 입력해주세요"
              className={`${styles.long_input_text}`}
              name="menuContent"
              value={formData.menuContent}
              onChange={handleInputChange}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={styles.long_toggle}>
            재고 관리 사용 여부
            <label className={`${styles.inline_flex}`} htmlFor="포장주문여부">
              <input
                type="checkbox"
                className={`${styles.peer} ${styles.sr_only}`}
                checked={isChecked}
                onChange={handleStockChange}
                id="포장주문여부"
              />
            </label>
          </div>

          <div className={styles.formtitle}>
            재고 갯수 설정
            <p className={styles.long_number_text}>개</p>
            <input
              type="number"
              placeholder="0"
              max="10000"
              step="1"
              className={`${styles.long_input_text}`}
              name="menuStock"
              value={formData.menuStock}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.long_toggle}>
            품절표시
            <label className={`${styles.inline_flex}`} htmlFor="품절표시">
              <input
                type="checkbox"
                className={`${styles.peer} ${styles.sr_only}`}
                checked={isStoreChecked}
                onChange={handleSoldOutChange}
                id="품절표시"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
