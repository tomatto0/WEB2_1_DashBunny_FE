'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker, Circle } from 'react-kakao-maps-sdk';
import styles from '@/styles/settings.module.scss';

export default function KakaoMap({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY;
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener('load', () => {
      setScriptLoad(true);
    });
  }, []);

  return (
    <div className={styles.map}>
      {scriptLoad ? (
        <Map
          center={{ lat: latitude, lng: longitude }}
          style={{ width: '100%', height: '270px' }}
          level={6}
        >
          <Circle
            center={{
              lat: latitude,
              lng: longitude,
            }}
            radius={1450}
            strokeWeight={2} // 선의 두께입니다
            strokeColor={'#FF7B4F'} // 선의 색깔입니다
            strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={'solid'} // 선의 스타일 입니다
            fillColor={'#FFB994'} // 채우기 색깔입니다
            fillOpacity={0.5} // 채우기 불투명도 입니다
          />
          <MapMarker
            position={{ lat: latitude, lng: longitude }}
            image={{
              src: '/icons/rabbit_flag.svg', // 마커이미지의 주소입니다
              size: {
                width: 46,
                height: 46,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 10,
                  y: 42,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          ></MapMarker>
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
}
