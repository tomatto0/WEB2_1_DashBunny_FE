import styles from '@/styles/settings.module.scss';

export default function couponAdd() {
  //현재 주소가 /posts로 시작하면 상단에 포스트로 표기

  return (
    <>
      <div className={styles.contents_wrap}>
        <form className="" action="" encType="multipart/form-data">
          <div className={styles.page_title}>
            쿠폰 발급 신청{' '}
            <button className={styles.submit_button} type="submit">
              저장
            </button>
          </div>

          <div className={styles.formtitle}>
            쿠폰 이름
            <input
              type="text"
              placeholder="맛있는 타이티"
              className={`${styles.long_input_text}`}
            />
          </div>

          <div className={styles.formtitle}>
            할인 금액
            <input
              type="text"
              placeholder="2,000"
              className={`${styles.long_input_text}`}
            />
          </div>

          <div className={styles.formtitle}>
            최소 주문 금액
            <p className={styles.long_number_text}>원 이상</p>
            <input
              type="text"
              placeholder="9,500"
              className={`${styles.long_input_text}`}
            />
          </div>

          <div className={styles.formtitle}>
            할인 적용 범위
            <select className={styles.long_selector}>
              <option>운영중</option>
              <option>운영정지</option>
            </select>
          </div>

          <div className={styles.formtitle}>
            쿠폰 유효 기간
            <select className={styles.long_selector}>
              <option>7일</option>
              <option>14일</option>
              <option>21일</option>
              <option>당일</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}
