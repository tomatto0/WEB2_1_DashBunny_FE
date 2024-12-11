import React from 'react';
import styles from '../sign-up-store.module.scss';
import { useEffect, ChangeEvent, useState, useReducer } from 'react';
import KakaoMapAddress from './KakaoMapAddress';

interface TextInputprops {
  roadAddress: string;
  jibunAddress: string;
  onStateChange: (_state: string) => void;
  onMapChange: (_coords: { lat: number; lng: number }) => void;
  totalFormCheck: () => void;
  number: number;
  onStepHandler: (_state: number) => void;
}

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export default function StoreMap({
  roadAddress,
  jibunAddress,
  onStateChange,
  onMapChange,
  totalFormCheck,
  number,
  onStepHandler,
}: TextInputprops) {
  //스텝handler
  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, number);

  useEffect(() => {
    onStepHandler(state);
  }, [state, onStepHandler]);

  // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [detailAddress, setDetailAddress] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const datailAddressText = e.currentTarget.value;
    setDetailAddress(datailAddressText);
  };

  useEffect(() => {
    onStateChange(detailAddress);
  }, [detailAddress]);

  const handleCoordinate = (coords: { lat: number; lng: number }) => {
    onMapChange(coords);
  };

  // if (isLoading) return <div>로딩 중...</div>;
  // if (isError) return <div>에러 발생</div>;

  return (
    <>
      <button
        className={styles.back_button}
        onClick={() => dispatch({ type: 'DECREASE' })}
      >
        이전
      </button>
      <div className={styles.block}>
        <span>매장주소 확인</span>
        <div className={styles.address_map_wrap}>
          <div className={styles.address_check}>
            <div>
              <p className={styles.address_road}>{roadAddress}</p>
              <p className={styles.address_legacy}>{jibunAddress}</p>
            </div>
            <input
              type="text"
              placeholder="상세 주소를 입력해주세요"
              className={styles.short_input_text}
              value={detailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.map_wrap}>
            <KakaoMapAddress
              roadAddress={roadAddress}
              handleCoordinate={handleCoordinate}
            />
            <p>
              표시된 위치가 다르다면 지도를 끌어 깃발을 정확한 위치에
              가져다주세요
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            totalFormCheck();
            dispatch({ type: 'INCREASE' });
          }}
        >
          이 위치로 주소 등록
        </button>
      </div>
    </>
  );
}
