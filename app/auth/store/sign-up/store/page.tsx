'use client';

import StoreIntro from '../../components/sign-up-store/Intro';
import StoreAddress from '../../components/sign-up-store/storeAddress';
import StoreCategory from '../../components/sign-up-store/storeCategory';
import StoreImage from '../../components/sign-up-store/storeImage';
import StoreMap from '../../components/sign-up-store/storeMap';
import StoreName from '../../components/sign-up-store/storeName';
import { useState, useReducer } from 'react';
import styles from './store.module.scss';
import { useRouter } from 'next/navigation';
import { useRegistStore } from '../../hooks/useStore';

export default function SignUpNav() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  //formData 관리
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState(''); // 지번 주소
  const [detailAddress, setDetailAddress] = useState('');

  const initialState = {
    storeName: '',
    address: '',
    latitude: 0,
    longitude: 0,
    storeRegistrationDocs: null,
    storeStatus: 'PENDING',
    userName: 'unknown',
    categories: [],
  };

  function reducer(
    state: typeof initialState,
    action: {
      type: 'UPDATE_FIELD';
      field: string;
      value: string | number | File | string[];
    },
  ) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  }

  const [formData, dispatch] = useReducer(reducer, initialState);

  // storeName 업데이트 함수
  const handleStateChange = (fieldName: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field: fieldName, value });
  };

  // category 업데이트 함수
  const handleCategoryChange = (value: string[]) => {
    dispatch({ type: 'UPDATE_FIELD', field: 'categories', value });
  };

  // file 업데이트 함수
  const handleFileChange = (file: File | null) => {
    if (file) {
      console.log('Selected file:', file.name);
      dispatch({
        type: 'UPDATE_FIELD',
        field: 'storeRegistrationDocs',
        value: file,
      });
    } else {
      console.log('No file selected');
    }
  };

  // Map업데이트 함수
  const handleMapChange = (coords: { lat: number; lng: number }) => {
    dispatch({ type: 'UPDATE_FIELD', field: 'longitude', value: coords.lng });
    dispatch({ type: 'UPDATE_FIELD', field: 'latitude', value: coords.lat });
  };

  //폼데이터 확인
  const handleAddressUpdate = () => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: 'address',
      value: roadAddress + detailAddress,
    });
  };

  const { registStoreMutate } = useRegistStore();

  const handleSubmit = () => {
    const requiredFields = {
      storeName: formData.storeName,
      address: formData.address,
      storeRegistrationDocs: formData.storeRegistrationDocs,
      categories: formData.categories,
    };

    // 비어있는 필드 확인
    const emptyFields = Object.entries(requiredFields).filter(
      ([, value]) => !value || (Array.isArray(value) && value.length === 0),
    );

    if (emptyFields.length > 0) {
      // 에러 메시지 출력
      const errorMessages = emptyFields
        .map(([key]) => `${key}을(를) 입력해주세요.`)
        .join('\n');
      alert(errorMessages); // 에러 메시지 알림
      return;
    }

    // 모든 필드가 올바른 경우
    registStoreMutate(formData);

    console.log('Form submitted successfully:', formData);
    router.push('http://localhost:3000/main');
  };

  return (
    <>
      {step === 1 && <StoreIntro number={step} onStepHandler={setStep} />}
      {step === 2 && (
        <StoreName
          number={step}
          onStepHandler={setStep}
          fieldName="storeName"
          onStateChange={handleStateChange}
        />
      )}
      {step === 3 && (
        <StoreImage
          number={step}
          onStepHandler={setStep}
          onFileChange={handleFileChange}
        />
      )}
      {step === 4 && (
        <StoreCategory
          number={step}
          onStepHandler={setStep}
          onCategoryChange={handleCategoryChange}
        />
      )}
      {step === 5 && (
        <StoreAddress
          number={step}
          onStepHandler={setStep}
          onStateChange={setRoadAddress}
          onJibunChange={setJibunAddress}
        />
      )}
      {step === 6 && (
        <StoreMap
          number={step}
          onStepHandler={setStep}
          roadAddress={roadAddress}
          jibunAddress={jibunAddress}
          onStateChange={setDetailAddress}
          onMapChange={handleMapChange}
          totalFormCheck={handleAddressUpdate}
        />
      )}
      {step === 7 && (
        <>
          <button className={styles.back_button} onClick={() => setStep(6)}>
            이전
          </button>
          <div className={styles.block}>
            <h1>이대로 등록하시겠습니까?</h1>
            <ul>
              <li>
                <span>가게 이름: </span>
                {formData.storeName ? formData.storeName : '미입력'}
              </li>
              <li>
                <span>가게 주소: </span>
                {formData.address ? formData.address : '미입력'}
              </li>

              <li>
                <span>카테고리:</span>{' '}
                {formData.categories.length > 0
                  ? formData.categories.join(', ')
                  : '미입력'}
              </li>
              <li>
                <span>사업자 등록 이미지:</span>{' '}
                {formData.storeRegistrationDocs
                  ? (formData.storeRegistrationDocs as File).name
                  : '없음'}
              </li>
            </ul>
            <button onClick={handleSubmit}>등록하기</button>
          </div>
        </>
      )}
    </>
  );
}
