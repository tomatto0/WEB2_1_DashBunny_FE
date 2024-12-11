import styles from '../../sign-up-store.module.scss';

export default function AddressSearchGuide() {
  return (
    <div className={styles.search_guide_wrap}>
      <p className={styles.search_guide_title}>이렇게 검색해보세요</p>
      <ul>
        <li className={styles.search_guide_detail}>
          · 도로명 + 건물번호(위례성대로 2)
        </li>
        <li className={styles.search_guide_detail}>
          · 건물명 + 번지 (방이동 44-2)
        </li>
        <li className={styles.search_guide_detail}>
          · 건물명, 아파트명(반포 자이, 분당 주공 1차)
        </li>
      </ul>
    </div>
  );
}
