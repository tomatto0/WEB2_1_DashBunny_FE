import type { Metadata } from 'next';
import styles from './lobby.module.scss';

export const metadata: Metadata = {
  title: 'DashBunny - 로비',
  description: '상태 확인 및 가게선택을 할 수 있습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.color}>
      <div>{children}</div>
    </div>
  );
}
