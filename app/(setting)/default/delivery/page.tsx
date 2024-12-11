'use client';

import styles from '@/styles/settings.module.scss';
import Counter from '../component/Counter';
import { useState } from 'react';
import KakaoMap from '../component/KakaoMap';

export default function Delivery() {
  const [fullTime, setFullTime] = useState(50);
  const [shortTime, setShortTime] = useState(20);
  console.log('shortTime: ', shortTime);

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" encType="multipart/form-data">
          <div className={styles.page_title}>
            배달정보{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.formtitle}>
            배달 지역 설정
            <div className={styles.button_form}>
              실제 배달될 영역을 수정할 수 있습니다.
              <button className={styles.modal_open_button} type="button">
                설정하기
              </button>
            </div>
            <KakaoMap latitude={33.5563} longitude={126.79581} />
          </div>

          <div className={styles.formtitle}>
            배달지역 안내문구
            <input
              type="text"
              placeholder="합정동, 서교동, 당인동"
              className={`${styles.long_input_text}`}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={styles.count_form}>
            조리 + 배달시간
            <Counter number={fullTime} onStateChange={setFullTime} />
          </div>

          <div className={styles.count_form_bottom}>
            조리시간
            <Counter number={shortTime} onStateChange={setShortTime} />
          </div>
        </form>
      </div>
    </>
  );
}
