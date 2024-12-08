import type { Metadata } from 'next';
import styles from './sign-in.module.scss';

export const metadata: Metadata = {
  title: 'DashBunny - 로그인',
  description: '로그인 후 사장님의 가게 관리가 가능합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.color}>{children}</div>;
}
