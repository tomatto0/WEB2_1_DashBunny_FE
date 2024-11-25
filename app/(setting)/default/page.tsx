'use client';

import styles from '@/styles/settings.module.scss';
import Image from 'next/image';
import { useGetStoreBasicInfo } from './hooks/useStoreInfo';
import React, { FormEvent, ChangeEvent, useReducer, useEffect } from 'react';
import useUpdateStoreBasicInfo from './hooks/useStoreInfo';

export default function BasicInfo() {
  const { data, isLoading } = useGetStoreBasicInfo();

  const initialState = {
    storePhone: '',
    storeLogo: '',
    bannerImage: '',
    storeDescription: '',
    promoShortsUrl: '',
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

  // Update state when `data` is loaded
  useEffect(() => {
    if (data) {
      dispatch({
        type: 'SET_INITIAL_STATE',
        value: {
          storePhone: data.storePhone || '',
          storeLogo: data.storeLogo || '',
          bannerImage: data.bannerImage || '',
          storeDescription: data.storeDescription || '',
          promoShortsUrl: data.ShortsUrl || '',
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

  const { mutate } = useUpdateStoreBasicInfo();

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
            기본정보{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.formtitle}>
            가게이름
            <input
              type="text"
              defaultValue={data?.storeName}
              disabled
              className={`${styles.short_input_text} ${styles.disabled}`}
            />
          </div>

          <div className={styles.formtitle}>
            가게 전화번호
            <input
              type="text"
              placeholder="000-0000-0000"
              className={styles.short_input_text}
              name="storePhone"
              value={formData.storePhone}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            가게 상태
            <input
              type="text"
              defaultValue={data?.storeStatus}
              disabled
              className={`${styles.short_input_text} ${styles.disabled}`}
            />
          </div>

          <div className={styles.formtitle}>
            가게 주소
            <input
              type="text"
              defaultValue={data?.storeAddress}
              disabled
              className={`${styles.long_input_text} ${styles.disabled}`}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={styles.formtitle}>
            가게 소개 편집
            <div className={styles.add_image_wrap}>
              <div className={styles.add_image_block}>
                매장 로고
                <div className={styles.add_image}>
                  {data?.storeLogo ? (
                    <Image
                      aria-hidden
                      src={data.storeLogo}
                      alt="storeLogo"
                      width={102}
                      height={102}
                      quality={75}
                    />
                  ) : (
                    <Image
                      aria-hidden
                      src="/img/setting_img_placeholder.jpg"
                      alt="placeholderImg"
                      width={102}
                      height={102}
                    />
                  )}
                </div>
              </div>
              <div className={styles.add_image_block}>
                배너 이미지
                <div className={styles.add_image}>
                  {data?.storeLogo ? (
                    <Image
                      aria-hidden
                      src={data.bannerImage}
                      alt="storebannerImg"
                      width={102}
                      height={102}
                      quality={75}
                    />
                  ) : (
                    <Image
                      aria-hidden
                      src="/img/setting_img_placeholder.jpg"
                      alt="placeholderImg"
                      width={102}
                      height={102}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formtitle}>
            가게 소개
            <textarea
              wrap="soft"
              placeholder="가게 소개를 적어주세요"
              rows={2}
              className={styles.text_area}
              name="storeDescription"
              value={formData.storeDescription}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formtitle}>
            가게 홍보용 shorts URL주소
            <input
              type="text"
              placeholder="https://youtube.com/shorts/PgIJlbWb7Nc?feature=shared"
              className={`${styles.long_input_text}`}
              name="promoShortsUrl"
              value={formData.promoShortsUrl}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}
