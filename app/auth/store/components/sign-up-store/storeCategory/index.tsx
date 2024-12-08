import React from 'react';
import styles from '../sign-up-store.module.scss';

import { useReducer, useEffect } from 'react';

interface CategoryInputProps {
  onCategoryChange: (_value: string[]) => void;
  number: number;
  onStepHandler: (_state: number) => void;
}

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

const categoryArray = [
  { englishName: 'KOREAN', koreanName: '한식' },
  { englishName: 'JAPANESE', koreanName: '일식' },
  { englishName: 'WESTERN', koreanName: '양식' },
  { englishName: 'CHINESE', koreanName: '중식' },
  { englishName: 'ASIAN', koreanName: '아시안' },
  { englishName: 'LATENIGHTFOOD', koreanName: '야식' },
  { englishName: 'KOREANSNACKS', koreanName: '분식' },
  { englishName: 'CHICKEN', koreanName: '치킨' },
  { englishName: 'PIZZA', koreanName: '피자' },
  { englishName: 'BARBECUE', koreanName: '고기' },
  { englishName: 'CAFEDESSERT', koreanName: '카페&디저트' },
  { englishName: 'FASTFOOD', koreanName: '패스트푸드' },
];

interface Category {
  englishName: string;
  koreanName: string;
}

export default function StoreCategory({
  onCategoryChange,
  number,
  onStepHandler,
}: CategoryInputProps) {
  //스텝handler
  const stepReducer = (state: number, action: Action) => {
    switch (action.type) {
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state - 1;
    }
  };

  const [state, stepDispatch] = useReducer(stepReducer, number);

  useEffect(() => {
    onStepHandler(state);
  }, [state, onStepHandler]);

  // 카테고리값 컨트롤
  const initialState = categoryArray.reduce<Record<string, boolean>>(
    (state, category) => {
      state[category.englishName] = false;
      return state;
    },
    {} as Record<string, boolean>,
  );

  // 체크박스 상태를 업데이트하는 reducer
  const reducer = (
    state: Record<string, boolean>,
    action: { type: string; englishName?: string },
  ) => {
    switch (action.type) {
      case 'TOGGLE_CHECKED':
        if (action.englishName == null) return state;
        return {
          ...state,
          [action.englishName]: !state[action.englishName],
        };
      default:
        return state;
    }
  };

  const [checkedState, dispatch] = useReducer(reducer, initialState);

  // 사이드 Handle 체크박스 토글시 checkedState에 업데이트
  const handleToggle = (englishName: string) => {
    // 이미 3개 선택된 상태에서 새로운 선택을 시도하면 막음
    const selectedCount = Object.keys(checkedState).filter(
      (name) => checkedState[name],
    ).length;

    if (!checkedState[englishName] && selectedCount >= 3) {
      alert('최대 3개까지만 선택 가능합니다.');
      return;
    }
    dispatch({ type: 'TOGGLE_CHECKED', englishName });
  };

  // 선택된 항목 계산
  const selectedItems = Object.keys(checkedState).filter(
    (name) => checkedState[name],
  );

  const firstSelectedItem = selectedItems[0]; // 첫 번째 선택된 항목

  const handleSelectedCategory = () => {
    const selectedIds = Object.keys(checkedState).filter(
      (name) => checkedState[name],
    );
    onCategoryChange(selectedIds);
  };

  return (
    <>
      {' '}
      <button
        className={styles.back_button}
        onClick={() => stepDispatch({ type: 'DECREASE' })}
      >
        이전
      </button>
      <button
        className={styles.next_button}
        onClick={() => {
          handleSelectedCategory();
          stepDispatch({ type: 'INCREASE' });
        }}
      >
        다음
      </button>
      <div className={styles.block}>
        가게 업종을 선택해주세요
        <div className={styles.category_bar_wrap}>
          <p>
            • 최초 선택 1개가 대표업종으로 선택됩니다.
            <br />• 최대 3개 선택가능합니다.
          </p>
          {categoryArray.map((category: Category) => (
            <div
              key={category.englishName}
              className={`${styles.category_bar} ${
                checkedState[category.englishName]
                  ? category.englishName === firstSelectedItem
                    ? styles.first_checked // 첫 번째 선택된 항목
                    : styles.checked // 나머지 선택된 항목
                  : ''
              }`}
              onClick={() => handleToggle(category.englishName)}
            >
              {category.koreanName}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
