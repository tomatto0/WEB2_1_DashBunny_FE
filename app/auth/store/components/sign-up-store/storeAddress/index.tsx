import React from 'react';
import styles from '../sign-up-store.module.scss';
import { useState, useReducer, useEffect } from 'react';
import { useGetAddressListByKeyword } from './hook/useJusoAddress';
import AddressSearchResults from './component/AddressSearchResult';
import AddressSearchGuide from './component/AddressSearchGuide';
import Image from 'next/image';

interface TextInputprops {
  onStateChange: (_state: string) => void; // 도로명 주소 업데이트 함수
  onJibunChange: (_state: string) => void; // 지번 주소 업데이트 함수
  number: number;
  onStepHandler: (_state: number) => void;
}
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

export interface Address {
  roadAddress: string;
  jibunAddress: string;
}

export default function StoreAddress({
  onStateChange,
  onJibunChange,
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

  //Address
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 입력 상태
  const { data, isError, isLoading } = useGetAddressListByKeyword(searchTerm);

  const addressSelectHandler = ({ jibunAddress, roadAddress }: Address) => {
    onStateChange(roadAddress); // 도로명 주소 업데이트
    onJibunChange(jibunAddress); // 지번 주소 업데이트
    setSearchTerm('');
  };

  return (
    <>
      <button
        className={styles.back_button}
        onClick={() => dispatch({ type: 'DECREASE' })}
      >
        이전
      </button>

      <div className={styles.block}>
        매장주소를 알려주세요
        <div className={styles.search_block}>
          <input
            type="text"
            placeholder="건물명, 도로명, 또는 지번으로 검색"
            className={styles.short_input_text}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Image
            aria-hidden
            src="/icons/auth_search.svg"
            alt="searchIcon"
            width={18}
            height={18}
          />
          <AddressSearchResults
            searchTerm={searchTerm}
            data={data}
            isLoading={isLoading}
            isError={isError}
            onClick={(selectedAddress: Address) => {
              addressSelectHandler(selectedAddress);
              dispatch({ type: 'INCREASE' });
            }}
          />
          {searchTerm == '' && <AddressSearchGuide />}
        </div>
      </div>
    </>
  );
}
