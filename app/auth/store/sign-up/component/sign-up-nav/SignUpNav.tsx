import React from 'react';
import Image from 'next/image';
import styles from './SignUpNav.module.scss';
import Link from 'next/link';

export default function SignUpNav() {
  return (
    <>
      <div className={styles.nav_wrap}>
        <Image
          aria-hidden
          src="/logo/logo_intro.svg"
          alt="logo"
          width={164}
          height={28.47}
          priority={true}
        />
        <Link href="/auth/store/sign-in">
          <button>로그아웃</button>
        </Link>
      </div>
    </>
  );
}
