'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styles from '@/styles/settings.module.scss';
import Image from 'next/image';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface MapInputprops {
  roadAddress: string;
  handleCoordinate: (_coords: { lat: number; lng: number }) => void;
}

export default function KakaoMapAddress({
  roadAddress,
  handleCoordinate,
}: MapInputprops) {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY;
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true); // 초기 로드 여부

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener('load', () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          `${roadAddress}`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (result: any, status: string) {
            if (status === window.kakao.maps.services.Status.OK) {
              const initialCenter = {
                lat: parseFloat(result[0].y),
                lng: parseFloat(result[0].x),
              };

              setCenter(initialCenter);
              handleCoordinate(initialCenter); // 초기 좌표 전달
              setScriptLoad(true);
              setIsInitialLoad(false); // 초기 로드 완료
            }
          },
        );
      });
    });
  }, [roadAddress]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (map: any) => {
    const latlng = map.getCenter();
    const updatedCenter = { lat: latlng.getLat(), lng: latlng.getLng() };
    setCenter(updatedCenter);
    handleCoordinate(updatedCenter); // 드래그 후 좌표 전달

    //초기 로드가 아닌 경우에만 handleCoordinate 호출
    if (!isInitialLoad) {
      handleCoordinate(updatedCenter);
    }
  };

  return (
    <div className={styles.map}>
      {scriptLoad ? (
        <Map
          center={center}
          style={{
            width: '350px',
            height: '240px',
            borderRadius: '8px',
            border: '1px solid rgba(208, 213, 221, 1)',
          }}
          level={3}
          onCreate={(map) => {
            map.setZoomable(false);
          }} // 줌 비활성화
          onDragEnd={handleDragEnd}
        >
          {/* 마커를 항상 지도 중심에 고정 */}
          <MapMarker
            position={center}
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
        <div>
          {' '}
          <Image
            className={styles.map_placeholder}
            aria-hidden
            src="/img/map_placeholder.svg"
            alt="add_menu_plus_icon"
            width={350}
            height={240}
          />
        </div>
      )}
    </div>
  );
}
