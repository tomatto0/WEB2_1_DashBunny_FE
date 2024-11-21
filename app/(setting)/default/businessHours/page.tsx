import styles from '@/styles/settings.module.scss';
import Image from 'next/image';

export default function businessHours() {
  //현재 주소가 /posts로 시작하면 상단에 포스트로 표기

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" encType="multipart/form-data">
          <div className={styles.page_title}>
            운영정보{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={`${styles.formtitle} ${styles.margin_bottom}`}>
            영업시간
            <div className={styles.button_form}>
              등록된 영업시간이 없어요
              <button className={styles.modal_open_button} type="button">
                설정하기
              </button>
            </div>
          </div>

          <div className={`${styles.formtitle} ${styles.margin_bottom}`}>
            휴게시간
            <div className={styles.button_form}>
              등록된 휴게시간이 없어요
              <button className={styles.modal_open_button} type="button">
                설정하기
              </button>
            </div>
          </div>

          <div className={`${styles.formtitle} ${styles.margin_bottom}`}>
            휴무일
            <div className={styles.button_form}>
              등록된 휴무일이 없어요
              <button className={styles.modal_open_button} type="button">
                설정하기
              </button>
            </div>
          </div>

          <div className={styles.formtitle}>
            휴무일 안내
            <textarea
              wrap="soft"
              placeholder="휴무일과 임시로 휴무시 사유를 알리고 싶을때 활용해보세요"
              rows={2}
              className={styles.text_area}
            />
          </div>

          <hr className={styles.margin_bottom} />

          <div className={`${styles.formtitle} ${styles.margin_bottom}`}>
            영업 임시중지
            <div className={styles.button_form}>
              오후 01:00 ~ 오후 04:30
              <button className={styles.modal_open_button} type="button">
                설정하기
              </button>
            </div>
          </div>

          <div className={styles.reopen}>
            영업 임시중지 해제
            <button className={styles.reopen_button} type="button">
              해제하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
