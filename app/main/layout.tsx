import type { Metadata } from 'next';
import HorizontalNav from '../components/horizontalNav';

export const metadata: Metadata = {
  title: 'DashBunny - 메인화면',
  description: '현재 배달현황 확인 및 주문관리를 할 수 있습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HorizontalNav />
      {children}
    </div>
  );
}
