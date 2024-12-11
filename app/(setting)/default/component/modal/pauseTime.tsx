'use client';

import React, { ChangeEvent } from 'react';
import styles from '@/styles/modal.module.scss';
import Image from 'next/image';
import { useReducer } from 'react';
import { useUpdatePauseTime } from '../../hooks/useOperationInfo';

interface ClickModalProps {
  clickModal: () => void; // Adjust the type based on your actual use case
}

export default function PauseModal(props: ClickModalProps) {
  const { clickModal } = props;

  const initialState = {
    pauseStartTime: '',
    pauseEndTime: '',
  };

  function reducer(
    state: typeof initialState,
    action: { type: 'UPDATE_FIELD'; field: string; value: string },
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const { updatePauseTimeMutate } = useUpdatePauseTime();

  //폼데이터 제출
  const handleSubmit = () => {
    updatePauseTimeMutate(formData);
    clickModal();
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
              onClick={clickModal}
            />
          </div>
          <div className={styles.modal_title}>임시 휴무시간 설정</div>
          <div>
            <div className={styles.time_wrap}>
              시작
              <input
                type="time"
                id="start-time"
                className="bg-gray-50 border leading-none border-gray-100 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                step={1800}
                required
                name="pauseStartTime"
                value={formData.pauseStartTime}
                onChange={handleChange}
              />
            </div>
            <div className={styles.time_wrap}>
              종료
              <input
                type="time"
                id="end-time"
                className="bg-gray-50 border leading-none border-gray-100 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                step={1800}
                required
                name="pauseEndTime"
                value={formData.pauseEndTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.bottom_buttons}>
            <button className={styles.cancel_button} onClick={clickModal}>
              취소
            </button>
            <button className={styles.submit_button} onClick={handleSubmit}>
              설정
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
