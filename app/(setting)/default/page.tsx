'use client';

import styles from '@/styles/settings.module.scss';
import Image from 'next/image';
import { useGetStoreBasicInfo } from './hooks/useStoreInfo';

export default function BasicInfo() {
  //현재 주소가 /posts로 시작하면 상단에 포스트로 표기
  const { data, isLoading } = useGetStoreBasicInfo();

  console.log(data);
  console.log(data?.storeName);

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" encType="multipart/form-data">
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
            />
          </div>

          <div className={styles.formtitle}>
            가게 상태
            <select className={styles.short_selector}>
              <option>운영중</option>
              <option>운영정지</option>
            </select>
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
                  <Image
                    aria-hidden
                    src="/icons/setting_camera.svg"
                    alt="camera icon"
                    width={29}
                    height={29}
                  />
                  이미지 추가
                </div>
              </div>
              <div className={styles.add_image_block}>
                배너 이미지
                <div className={styles.add_image}>
                  <Image
                    aria-hidden
                    src="/icons/setting_camera.svg"
                    alt="camera icon"
                    width={29}
                    height={29}
                  />
                  이미지 추가
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
            />
          </div>

          <div className={styles.formtitle}>
            가게 홍보용 shorts URL주소
            <input
              type="text"
              placeholder="https://youtube.com/shorts/PgIJlbWb7Nc?feature=shared"
              className={`${styles.long_input_text}`}
            />
          </div>
        </form>
      </div>
    </>
  );
}
