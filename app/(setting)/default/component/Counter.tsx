'use client';

import Image from 'next/image';
import React from 'react';
import styles from '@/styles/settings.module.scss';
import { useReducer, useEffect } from 'react';

interface Counterprops {
  number: number;
  onStateChange: (state: number) => void;
}

type Action =
  | { type: 'INCREASE' }
  | { type: 'DECREASE' }
  | { type: 'RESET'; value: number };

export default function Counter({ number, onStateChange }: Counterprops) {
  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case 'INCREASE':
        return state + 5;
      case 'DECREASE':
        return state - 5;
      case 'RESET':
        return action.value; // Reset state to a new value
    }
    throw new Error('[ERROR] unknown action type');
  };

  const [state, dispatch] = useReducer(reducer, number);

  useEffect(() => {
    dispatch({ type: 'RESET', value: number });
  }, [number]);

  useEffect(() => {
    onStateChange(state);
  }, [state, onStateChange]);

  return (
    <>
      <div className={styles.setting_count}>
        <Image
          aria-hidden
          src="/icons/count_minus.svg"
          alt="Window icon"
          width={24}
          height={24}
          onClick={() => dispatch({ type: 'DECREASE' })}
        />
        {state}분
        <Image
          aria-hidden
          src="/icons/count_plus.svg"
          alt="Window icon"
          width={24}
          height={24}
          onClick={() => {
            dispatch({ type: 'INCREASE' });
          }}
        />
      </div>
    </>
  );
}
