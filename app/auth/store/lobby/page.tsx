'use client';

import { useUserStoreInfo } from './hook/useUserStoreInfo';

export default function Lobby() {
  const { data, isLoading } = useUserStoreInfo();

  console.log(data);
  if (isLoading) return <div>loading...</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>데이터가 없습니다</div>;
  return <>lobby</>;
}
