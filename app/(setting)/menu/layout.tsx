import type { Metadata } from 'next';
import styles from './menu.module.scss';
import NavMenu from '../components/navMenu/page';

export const metadata: Metadata = {
  title: 'DashBunny - 메뉴관리',
  description: '판매되는 메뉴와 메뉴그룹을 설정할 수 있습니다',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.flex}>
      <NavMenu />
      {children}
    </div>
  );
}
