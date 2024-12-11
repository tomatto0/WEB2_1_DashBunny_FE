import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/auth/store/sign-in">
        <button>로그인하기</button>
      </Link>
    </>
  );
}
