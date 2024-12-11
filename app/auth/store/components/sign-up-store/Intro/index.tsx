import React from 'react';
import styles from '../sign-up-store.module.scss';
import { useReducer, useEffect } from 'react';

interface Counterprops {
  number: number;
  onStepHandler: (_state: number) => void;
}

type Action = { type: 'INCREASE' };

export default function StoreIntro({ number, onStepHandler }: Counterprops) {
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

  return (
    <>
      <div className={styles.block}>
        안녕하세요! <br />
        가게 등록을 시작할게요
        <br />
        <button
          onClick={() => {
            dispatch({ type: 'INCREASE' });
          }}
        >
          로그인
        </button>
      </div>
    </>
  );
}
