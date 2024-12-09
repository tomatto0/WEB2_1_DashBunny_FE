'use client';

import { useStoreSignIn, useUserStoreInfo } from './hook/useUserStoreInfo';
import { Store } from '@/utils/model/user';
import styles from './lobby.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Lobby() {
  const router = useRouter();
  const { data: userData, isLoading: isUserLoading } = useUserStoreInfo();
  const { data: storeListData, isLoading: isStoreLoading } = useStoreSignIn();

  const topThreeStores = (storeListData as Store[] | undefined)?.slice(0, 3); // 첫 3개 데이터 추출

  const handleSubmit = (store: Store) => {
    localStorage.setItem('storeId', store.storeId);
    localStorage.setItem('storeStatus', store.storeStatus);
    router.push('/main');
  };

  // console.log(data);
  if (isUserLoading) return <div>loading...</div>;
  if (isStoreLoading) return <div>loading...</div>;
  if (!userData) return <div>유저 데이터가 없음</div>;
  if (!storeListData) return <div>가게 데이터가 없음</div>;
  return (
    <>
      <div className={styles.lobby_wrap}>
        <Image
          aria-hidden
          src="/logo/logo_login.svg"
          alt="storebannerImg"
          width={229}
          height={39}
        />

        <div className={styles.storelist_wrap}>
          <ul>
            {topThreeStores?.map((store: Store) => (
              <li
                key={store.storeId}
                className={styles.store}
                onClick={() => {
                  handleSubmit(store);
                }}
              >
                <span>{store.storeName}</span>
                <span>{store.storeStatus}</span>
              </li>
            ))}
            <li>
              <Link href="/auth/store/sign-up/store">
                <div className={styles.add_store}>
                  <Image
                    aria-hidden
                    src="/icons/count_plus.svg"
                    alt="storebannerImg"
                    width={14}
                    height={14}
                  />
                  새로운 가게 등록하기
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
