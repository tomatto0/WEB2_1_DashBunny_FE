'use client';

import React, { ChangeEvent, useState, useReducer } from 'react';
import styles from '@/styles/modal.module.scss';
import Image from 'next/image';
import { useAddMenuGroup } from '../hooks/useGroup';

interface ClickModalProps {
  clickAddModal: () => void;
}

export default function AddMenuGroupModal(props: ClickModalProps) {
  const { clickAddModal } = props;
  const [isChecked, setIsChecked] = useState(false);

  const initialState = {
    groupName: '',
    isMainGroup: false,
  };

  function reducer(
    state: typeof initialState,
    action: { type: 'UPDATE_FIELD'; field: string; value: string | boolean },
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  //checkbox가 눌러질때마다 checkbox의 상태에 따라서 formdata가 업뎃되는 함수
  const handleMainGroup = () => {
    setIsChecked(!isChecked);

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'isMainGroup',
      value: isChecked,
    });
  };

  const { addMenuGroupMutate } = useAddMenuGroup();

  //폼데이터 제출
  const handleSubmit = () => {
    addMenuGroupMutate(formData);
    clickAddModal();
  };

  return (
    <>
      <div className={styles.modal_wrap}>
        <div className={styles.modal_box}>
          <div className={styles.modal_close}>
            <Image
              aria-hidden
              src="/icons/modal_close.svg"
              alt="storeLogo"
              width={36}
              height={36}
              onClick={clickAddModal}
            />
          </div>
          <div className={styles.modal_title}>신규 메뉴 그룹 생성</div>
          <div>
            <div className={styles.time_wrap}>
              대표메뉴 설정
              <label className={`${styles.inline_flex}`} htmlFor="포장주문여부">
                <input
                  type="checkbox"
                  className={styles.peer}
                  checked={isChecked}
                  onChange={handleMainGroup}
                  id="포장주문여부"
                />
              </label>
            </div>
            <div className={styles.time_wrap}>
              그룹이름
              <input
                type="text"
                placeholder="메뉴 이름을 입력해주세요"
                className={styles.long_input_text}
                name="groupName"
                value={formData.groupName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.bottom_buttons}>
            <button className={styles.cancel_button} onClick={clickAddModal}>
              취소
            </button>
            <button className={styles.submit_button} onClick={handleSubmit}>
              추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
