'use client';

import React from 'react';
import Image from 'next/image';
import styles from './horizontalNav.module.scss';
import { useState, useEffect } from 'react';
import VerticalNav from '../verticalNav';
import Link from 'next/link';

interface CustomHTMLElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function HorizontalNav() {
  //현재시간 가져오는 함수

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const options: Intl.DateTimeFormatOptions = {
        month: '2-digit', // 두 자리 월
        day: '2-digit', // 두 자리 일
        weekday: 'short', // 요일 (짧은 형식: 월, 화, 수 ...)
        hour: '2-digit', // 두 자리 시간
        minute: '2-digit', // 두 자리 분
        hour12: false, // 24시간제
        timeZone: 'Asia/Seoul', // 한국 시간대
      };

      const date = new Date();

      const formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(
        date,
      );
      setCurrentTime(formattedDate);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //사이드 NAV onoff함수
  const [showSideNav, setShowSideNav] = useState(false);
  const clickModal = () => setShowSideNav(!showSideNav);

  //화면 전체크기로 변경하는 함수
  const handleFullScreen = () => {
    const element = document.documentElement as CustomHTMLElement;

    if (element.requestFullscreen) {
      element.requestFullscreen(); // 표준 브라우저
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(); // Safari
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen(); // Internet Explorer/Edge
    }
  };

  return (
    <div>
      <div className={styles.h_nav}>
        <div className={styles.h_nav_left}>
          <Image
            aria-hidden
            src="/icons/navBar.svg"
            alt="Window icon"
            width={36}
            height={36}
            onClick={clickModal}
          />
          <Link href="/">
            <div className={styles.status_box}>
              <div className={styles.status_color}></div>영업중
            </div>
          </Link>
        </div>
        <div className={styles.h_nav_right}>
          <p>{currentTime}</p>
          <div className={styles.window_status}>
            <div className={styles.window_wrap}>
              <Image
                aria-hidden
                src="/icons/window_minimize.svg"
                alt="Window icon"
                width={36}
                height={36}
                onClick={handleFullScreen}
              />
            </div>
          </div>
        </div>
      </div>
      {showSideNav && <VerticalNav clickModal={clickModal} />}
    </div>
  );
}
