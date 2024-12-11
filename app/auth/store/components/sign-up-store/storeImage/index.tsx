import React, { ChangeEvent, useState, useReducer, useEffect } from 'react';
import styles from '../sign-up-store.module.scss';
import Image from 'next/image';

interface FileInputProps {
  onFileChange: (_file: File | null) => void;
  number: number;
  onStepHandler: (_state: number) => void;
}

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

export default function StoreImage({
  onFileChange,
  number,
  onStepHandler,
}: FileInputProps) {
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

  //파일핸들러
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  return (
    <>
      {' '}
      <button
        className={styles.back_button}
        onClick={() => dispatch({ type: 'DECREASE' })}
      >
        이전
      </button>
      <button
        className={styles.next_button}
        onClick={() => {
          dispatch({ type: 'INCREASE' });
        }}
      >
        다음
      </button>
      <div className={styles.block}>
        사업자 등록증 이미지를
        <br />
        업로드해주세요
        <label htmlFor="file-input" className={styles.image_label}>
          {file ? (
            <Image
              src={URL.createObjectURL(file)}
              alt="선택된 이미지 미리보기"
              className={styles.thumbnail}
              width={102}
              height={102}
            />
          ) : (
            <div className={styles.image_input}>
              <Image
                aria-hidden
                src="/icons/register_camera.svg"
                alt="placeholderImg"
                width={29}
                height={29}
              />
              이미지
              <br />
              추가하기
            </div>
          )}
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*" // 이미지 파일만 허용
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {file && <p className={styles.file_name}>선택된 파일: {file.name}</p>}
      </div>
    </>
  );
}
