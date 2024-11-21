import Image from 'next/image';
import styles from './page.module.scss';
import OrderList from './components/OrderList';
export default function Home() {
  return (
    <div className={styles.background}>
      <OrderList />

      <div className={styles.order_wrap}>
        <div className={styles.order_total_wrap}>
          <div className={styles.order_total_left}>
            <div className={styles.order_badge}>배달</div>
            <div className={styles.total_text}>
              <div className={styles.total_text_title}>
                <p>배달OOCRT</p>
                <p className={styles.total_text_paid}>결제완료</p>
              </div>
              메뉴 3개 · 총 32,000원
            </div>
          </div>

          <div className={styles.orderSubmit}>
            <div className={styles.order_sub_decline}>거부</div>
            <div className={styles.order_sub_count}>
              <Image
                aria-hidden
                src="/icons/count_minus.svg"
                alt="Window icon"
                width={28}
                height={28}
              />
              20분
              <Image
                aria-hidden
                src="/icons/count_plus.svg"
                alt="Window icon"
                width={28}
                height={28}
              />
            </div>
            <div className={styles.order_sub_accept}>접수</div>
          </div>
        </div>
        <div className={styles.contents_wrap}>
          <div className={styles.order_reciept_wrap}>
            <div className={styles.receipt_list}>
              <div className={styles.receipt}>
                <p>주문금액</p>
                <p>37,000원</p>
              </div>
              <div className={styles.receipt}>
                <p>주문시간</p>
                <p>1.18(목) 18:30</p>
              </div>
              <div className={styles.receipt}>
                <p>주문유형</p>
                <p>배민1 한집배달</p>
              </div>
            </div>
            <hr />
            <div className={styles.message_wrap}>
              <p>요청사항</p>
              <p className={styles.message}>
                (수저포크X), 문 앞에 두고 벨 눌러주세요 알겠죠?
              </p>
            </div>
          </div>
          <div className={styles.order_menuList_wrap}>
            <div className={styles.menu}>
              [오픈특가] 화덕마르게리따 산마르자노산 플럼토마토
              <div className={styles.menu_right}>
                <p>3</p>
                <div className={styles.menu_right_price}>68,000원</div>
              </div>
            </div>
            <div className={styles.print_wrap}>
              <div className={styles.print_button}>주문서 출력</div>
              <div className={styles.print_button}>영수증 출력</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
