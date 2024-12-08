import React from 'react';
import styles from '../sign-up-store.module.scss';
import { useEffect, ChangeEvent, useState, useReducer } from 'react';

interface TextInputprops {
  fieldName: string; // 필드 이름을 props로 추가
  onStateChange: (_fieldName: string, _value: string) => void; // 필드 이름과 값을 함께 전달
  number: number;
  onStepHandler: (_state: number) => void;
}

type Action = { type: 'INCREASE' };

export default function StoreName({
  fieldName,
  onStateChange,
  number,
  onStepHandler,
}: TextInputprops) {
  //스텝handler
  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case 'INCREASE':
        return state + 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, number);

  useEffect(() => {
    onStepHandler(state);
  }, [state, onStepHandler]);

  //이름입력 컨트롤
  const [name, setName] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nameText = e.currentTarget.value;
    setName(nameText);
  };

  useEffect(() => {
    onStateChange(fieldName, name);
  }, [name]);

  return (
    <>
      <div className={styles.block}>
        매장명을 알려주세요
        <input
          type="text"
          placeholder="매장이름 입력"
          className={styles.short_input_text}
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <button
        className={styles.next_button}
        onClick={() => {
          dispatch({ type: 'INCREASE' });
        }}
      >
        다음
      </button>
    </>
  );
}
