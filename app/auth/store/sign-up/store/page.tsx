'use client';

import StoreIntro from '../../components/sign-up-store/Intro';
import StoreAddress from '../../components/sign-up-store/storeAddress';
import StoreCategory from '../../components/sign-up-store/storeCategory';
import StoreImage from '../../components/sign-up-store/storeImage';
import StoreMap from '../../components/sign-up-store/storeMap';
import StoreName from '../../components/sign-up-store/storeName';
import { useState, useReducer } from 'react';
import styles from './store.module.scss';
import { useRegistStore } from '../../hooks/useStore';

export default function SignUpNav() {
  const [step, setStep] = useState(1);

  //jsonData 관리
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState(''); // 지번 주소
  const [detailAddress, setDetailAddress] = useState('');

  //file관리

  const [registerFile, setRegisterFile] = useState<File | null>(null);

  //formData 만들기
  const initialState = {
    storeName: '',
    address: '',
    latitude: 0,
    longitude: 0,
    storeRegistrationDocs: null,
    categories: [],
  };

  function reducer(
    state: typeof initialState,
    action: {
      type: 'UPDATE_FIELD';
      field: string;
      value: string | number | string[];
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

  const [jsonData, dispatch] = useReducer(reducer, initialState);

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
      setRegisterFile(file);
    } else {
      console.log('No file selected');
    }
  };

  // Map업데이트 함수
  const handleMapChange = (coords: { lat: number; lng: number }) => {
    dispatch({ type: 'UPDATE_FIELD', field: 'longitude', value: coords.lng });
    dispatch({ type: 'UPDATE_FIELD', field: 'latitude', value: coords.lat });
  };

  // 주소 업데이트
  const handleAddressUpdate = () => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: 'address',
      value: roadAddress + detailAddress,
    });
  };

  const { registStoreMutate } = useRegistStore();

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append('request', JSON.stringify(jsonData));
    // 파일 추가

    if (registerFile) {
      formData.append('docsImageFile', registerFile); // file이 null이 아닌 경우에만 추가
    } else {
      console.error('File is null. Please select a valid file.');
    }

    const requiredFields = {
      storeName: jsonData.storeName,
      address: jsonData.address,
      docsImageFile: registerFile,
      categories: jsonData.categories,
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
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    // 모든 필드가 올바른 경우
    registStoreMutate(formData);
    console.log('Form submitted successfully:', formData);
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
                {jsonData.storeName ? jsonData.storeName : '미입력'}
              </li>
              <li>
                <span>가게 주소: </span>
                {jsonData.address ? jsonData.address : '미입력'}
              </li>

              <li>
                <span>카테고리:</span>{' '}
                {jsonData.categories.length > 0
                  ? jsonData.categories.join(', ')
                  : '미입력'}
              </li>
              <li>
                <span>사업자 등록 이미지:</span>{' '}
                {registerFile ? (registerFile as File).name : '없음'}
              </li>
            </ul>
            <button onClick={handleSubmit}>등록하기</button>
          </div>
        </>
      )}
    </>
  );
}
