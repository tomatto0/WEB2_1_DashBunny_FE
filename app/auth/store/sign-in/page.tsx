'use client';

import Image from 'next/image';
import styles from './sign-in.module.scss';
import { useReducer, ChangeEvent } from 'react';
import { useUserSignIn } from './hook/useSignIn';

export default function Login() {
  const initialState = {
    phone: '',
    password: '',
  };

  function reducer(
    state: typeof initialState,
    action: {
      type: 'UPDATE_FIELD';
      field: string;
      value: string | number;
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

  //입력될때마다 formdata가 업뎃되는 함수
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 11) {
      dispatch({ type: 'UPDATE_FIELD', field: 'phone', value });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  //비밀번호 시야조정
  const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 기본 동작 방지

    const passwordInput = document.getElementById(
      'user-password',
    ) as HTMLInputElement | null;
    const toggleButton = e.currentTarget; // 이벤트 타겟으로 버튼을 가져옴

    if (!passwordInput) return;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = '비밀번호 가리기';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = '비밀번호 보기';
    }
  };

  const { userSignInMutation } = useUserSignIn();
  //폼데이터 제출
  const handleSubmit = () => {
    const requiredFields = {
      storeName: formData.phone,
      address: formData.password,
    };

    // 비어있는 필드 확인
    const emptyFields = Object.entries(requiredFields).filter(
      ([, value]) => !value,
    );

    if (emptyFields.length > 0) {
      // 에러 메시지 출력
      const errorMessages = emptyFields
        .map(([key]) => `${key}을(를) 입력해주세요.`)
        .join('\n');
      alert(errorMessages); // 에러 메시지 알림
      return;
    }

    if (formData.phone.length < 11) {
      alert('아이디는 -를 제외한 11자의 휴대폰 번호입니다.');
    }

    // const passwordRegex =
    //   /^(?=(.*[a-z])|.*[A-Z]|.*[!@#$%^&*(),.?":{}|<>])(?=(.*[A-Z])|.*[!@#$%^&*(),.?":{}|<>]|.*[a-z])(?=.*\S).{8,20}$/;

    // if (!passwordRegex.test(formData.password)) {
    //   alert(
    //     '비밀번호는 8~20자리의 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.',
    //   );
    //   return; // 검증 실패 시 실행 중단
    // }

    // console.log(formData);
    userSignInMutation(formData);
  };
  return (
    <>
      <div className={styles.login_wrap}>
        <Image
          aria-hidden
          src="/logo/logo_login.svg"
          alt="storebannerImg"
          width={229}
          height={39}
        />

        <div className={styles.login_input_wrap}>
          <input
            type="text"
            placeholder="핸드폰번호(-제외)"
            className={styles.short_input_text}
            name="phone"
            maxLength={11}
            value={formData.phone}
            onChange={handleIdChange}
          />
          <input
            type="password"
            id="user-password"
            placeholder="비밀번호"
            className={styles.short_input_text}
            name="password"
            maxLength={20}
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            className={styles.password_show}
            id="toggle-password"
            type="button"
            onClick={togglePassword}
          >
            비밀번호 보기
          </button>
          <button
            className={styles.submit_button}
            type="submit"
            onClick={handleSubmit}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
}
