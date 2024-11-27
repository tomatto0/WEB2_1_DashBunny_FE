'use client';

import styles from '@/styles/settings.module.scss';
import { useState, FormEvent, ChangeEvent, useReducer, useEffect } from 'react';
import {
  useGetOperationInfo,
  useUpdateOperationInfo,
  useEndPauseTime,
} from '../hooks/useOperationInfo';
import PauseModal from '../component/modal/pauseTime';

export default function businessHours() {
  const { data, isLoading } = useGetOperationInfo();
  const [pauseTime, setPauseTime] = useState('현재 영업중지 상태가 아닙니다');

  //시간설정 NAV 함수
  const [showPauseModal, setPauseModal] = useState(false);
  const clickModal = () => setPauseModal(!showPauseModal);

  const initialState = {
    openingHours: '',
    breakTime: '',
    holidayDays: '',
    holidayNotice: '',
  };

  function reducer(
    state: typeof initialState,
    action:
      | { type: 'UPDATE_FIELD'; field: string; value: any }
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

  const makePauseTime = () => {
    const pauseSentence = `현재 설정된 임시중지 기간: ${data?.pauseStartTime} ~ ${data?.pauseEndTime}`;

    return pauseSentence;
  };

  useEffect(() => {
    if (data) {
      if (data.pauseStartTime !== '') {
        setPauseTime(makePauseTime);
      }

      dispatch({
        type: 'SET_INITIAL_STATE',
        value: {
          openingHours: data.openingHours || '',
          breakTime: data.breakTime || '',
          holidayDays: data.holidayDays || '',
          holidayNotice: data.holidayNotice || '',
        },
      });
    }
  }, [data]);

  //입력될때마다 formdata가 업뎃되는 함수
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const { updateOperationInfoMutate } = useUpdateOperationInfo();
  const { endPauseTimeMutate } = useEndPauseTime();

  //폼데이터 제출
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateOperationInfoMutate(formData);
  };

  const handleEndUpdate = () => {
    endPauseTimeMutate();
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
            운영정보
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.formtitle}>
            영업시간
            <input
              type="text"
              name="openingHours"
              defaultValue={formData.openingHours}
              className={`${styles.long_input_text}`}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            휴게시간
            <input
              type="text"
              name="breakTime"
              defaultValue={formData.breakTime}
              className={`${styles.long_input_text}`}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            휴무일
            <input
              type="text"
              name="holidayDays"
              defaultValue={formData.holidayDays}
              className={`${styles.long_input_text}`}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            휴무일 안내
            <textarea
              wrap="soft"
              placeholder="휴무일과 임시로 휴무시 사유를 알리고 싶을때 활용해보세요"
              rows={2}
              name="holidayNotice"
              defaultValue={formData.holidayNotice}
              className={styles.text_area}
              onChange={handleInputChange}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={`${styles.formtitle} ${styles.margin_bottom}`}>
            영업 임시중지
            <div className={styles.button_form}>
              {pauseTime}
              <button
                className={styles.modal_open_button}
                type="button"
                onClick={clickModal}
              >
                설정하기
              </button>
            </div>
          </div>

          <div className={styles.reopen}>
            영업 임시중지 해제
            <button
              className={styles.reopen_button}
              type="button"
              onClick={handleEndUpdate}
            >
              해제하기
            </button>
          </div>
        </form>
      </div>
      {showPauseModal && <PauseModal clickModal={clickModal} />}
    </>
  );
}
