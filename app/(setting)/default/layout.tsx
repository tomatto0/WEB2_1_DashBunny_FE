import type { Metadata } from 'next';
import NavDefault from '../components/navDefault/page';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'DashBunny - DefaultSetting',
  description: '가게 기본정보를 세팅할 수 있습니다',
  icons: {
    icon: '/logo/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.flex}>
      <NavDefault />
      {children}
    </div>
  );
}
