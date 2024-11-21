import styles from '@/styles/settings.module.scss';
import Image from 'next/image';

export default function Order() {
  //현재 주소가 /posts로 시작하면 상단에 포스트로 표기

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
              실제로 관리자쪽에 넘어갈 데이터가 문자로 표시되어야함
              <button className={styles.modal_open_button} type="button">
                설정하기
              </button>
            </div>
            <div className={styles.map}>map</div>
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
            <div className={styles.setting_count}>
              <Image
                aria-hidden
                src="/icons/count_minus.svg"
                alt="Window icon"
                width={24}
                height={24}
              />
              20분
              <Image
                aria-hidden
                src="/icons/count_plus.svg"
                alt="Window icon"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className={styles.count_form}>
            조리시간
            <div className={styles.setting_count}>
              <Image
                aria-hidden
                src="/icons/count_minus.svg"
                alt="Window icon"
                width={24}
                height={24}
              />
              20분
              <Image
                aria-hidden
                src="/icons/count_plus.svg"
                alt="Window icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
