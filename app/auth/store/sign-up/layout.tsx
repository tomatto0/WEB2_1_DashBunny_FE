import type { Metadata } from 'next';
import styles from './sign-up.module.scss';
import SignUpNav from './component/sign-up-nav/SignUpNav';

export const metadata: Metadata = {
  title: 'DashBunny - 회원가입',
  description: '신규 가입을 진행할 수 있습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.color}>
      <SignUpNav />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
