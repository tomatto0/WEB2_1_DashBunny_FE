'use client';

import styles from '@/styles/menu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, { useReducer, useEffect, useState, useMemo } from 'react';
import {
  useGetAllMenu,
  useGetGroupMenus,
  useMultifleDelete,
  useMultifleSoldOut,
  useSingleSoldOut,
} from './hooks/useMenu';
import { menu, menuGroup } from '@/utils/model/menu';

export default function menuSetting() {
  const { data, isError, isLoading } = useGetAllMenu();

  //menu array를 setState를 통해서 관리
  const menuArray = useMemo(() => data?.menus || [], [data?.menus]);
  const menuGroupArray = useMemo(
    () => data?.menuGroups || [],
    [data?.menuGroups],
  );
  const [menuArrayState, setMenuArrayState] = useState(menuArray);
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null); // 활성화된 그룹 ID

  useEffect(() => {
    if (menuArray.length > 0) {
      setMenuArrayState(menuArray);
      dispatch({ type: 'RESET_CHECKED' });
      console.log('menuArray: 랜더링');
    }
  }, [menuArray]);

  //그룹리스트 불러오기
  const handleGroupList = (groupId: number) => {
    const { data, isError, error, isLoading } = useGetGroupMenus(groupId);

    if (isError) {
      console.error('Error fetching group menus:', error); // 에러 로그 출력
      alert('그룹 메뉴를 가져오는 중 오류가 발생했습니다.'); // 사용자에게 알림
      return;
    }

    if (!isLoading && data) {
      setMenuArrayState(data); // 데이터를 상태에 저장
      setActiveGroupId(groupId); // 활성화된 그룹 ID 업데이트
    }
  };

  const { updateSingleSoldOutMutate } = useSingleSoldOut();

  //개별 품절 처리 함수
  //체크를 할때마다 체크값이 새로 업데이트된 menuArray가 새로 State에 저장됨
  const handleSoldOutToggle = (menuId: number) => {
    setMenuArrayState((prevMenuArray) =>
      prevMenuArray.map((menu) =>
        menu.menuId === menuId ? { ...menu, isSoldOut: !menu.isSoldOut } : menu,
      ),
    );

    // 업데이트된 메뉴의 품절 상태를 찾음
    const updatedMenu = menuArrayState.find((menu) => menu.menuId === menuId);

    //값이 undefined인지 확인
    if (updatedMenu) {
      const isSoldOut = !updatedMenu.isSoldOut;

      updateSingleSoldOutMutate({ menuId, isSoldOut });
    }
  };

  // 전체 그룹 선택
  const handleAllGroupClick = () => {
    setMenuArrayState(menuArray); // 전체 메뉴 상태로 복원
    setActiveGroupId(null); // 활성화된 그룹 ID 초기화
  };

  // 다중 삭제/품절을 요청하기 위한 내용
  // menuArray를 받아서 기본 initialstate를 만드는 reduce함수
  const createInitialState = (menuArray: menu[]) =>
    menuArray.reduce(
      (state, menu) => {
        state[menu.menuId] = false; // 초기값: 모두 체크되지 않은 상태
        return state;
      },
      {} as Record<number, boolean>,
    );

  const initialState = createInitialState(menuArray);

  // 체크박스 상태를 업데이트하는 reducer
  const reducer = (
    state: Record<number, boolean>,
    action: { type: string; menuId?: number },
  ) => {
    switch (action.type) {
      case 'TOGGLE_CHECKED':
        if (action.menuId == null) return state;
        return {
          ...state,
          [action.menuId]: !state[action.menuId],
        };
      case 'RESET_CHECKED':
        return createInitialState(menuArray); // 상태 초기화
      default:
        return state;
    }
  };

  const [checkedState, dispatch] = useReducer(reducer, initialState);

  // 사이드 Handle 체크박스 토글시 checkedState에 업데이트
  const handleCheckboxToggle = (menuId: number) => {
    dispatch({ type: 'TOGGLE_CHECKED', menuId });
  };

  // 체크된 다중 핸들 품절 api처리
  const { updateMultifleSoldOutMutate } = useMultifleSoldOut();

  const handleSoldOutAction = () => {
    const selectedIds = Object.keys(checkedState)
      .filter((id) => checkedState[Number(id)])
      .map(Number);

    updateMultifleSoldOutMutate(selectedIds);
  };

  // 체크된 다중 핸들 삭제 api처리
  const { updateMultifleDeleteMutate } = useMultifleDelete();

  const handleDeleteAction = () => {
    const selectedIds = Object.keys(checkedState)
      .filter((id) => checkedState[Number(id)])
      .map(Number);

    updateMultifleDeleteMutate(selectedIds);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.page_title}>
          메뉴
          <Link href="/menu/add">
            <div className={styles.add_menu_button}>
              <Image
                aria-hidden
                src="/icons/add_white.svg"
                alt="add_menu_plus_icon"
                width={14}
                height={14}
              />
              메뉴 등록
            </div>
          </Link>
        </div>
        <div className={styles.groups}>
          <div
            className={`${styles.group} ${
              activeGroupId === null ? styles.active : ''
            }`}
            onClick={handleAllGroupClick}
          >
            전체
          </div>
          {menuGroupArray?.map((menuGroup: menuGroup) => (
            <div
              key={menuGroup?.groupId}
              className={`${styles.group} ${
                activeGroupId === menuGroup.groupId ? styles.active : ''
              }`}
              onClick={() => handleGroupList(menuGroup.groupId)}
            >
              {menuGroup.groupName}
            </div>
          ))}
        </div>

        <div className={styles.menu_list}>
          <div className={styles.button_wrap}>
            <button
              className={styles.delete_button}
              type="button"
              onClick={handleDeleteAction}
            >
              삭제
            </button>
            <button
              className={styles.soldout_button}
              type="button"
              onClick={handleSoldOutAction}
            >
              품절
            </button>
          </div>

          <div className={styles.list_bar_wrap}>
            상품
            <div className={styles.list_bar_right}>
              <div>재고수량</div>

              <div className={styles.soldout_name}>
                품절표시
                <Image
                  aria-hidden
                  src="/icons/menu_filter.svg"
                  alt="add_menu_plus_icon"
                  width={15}
                  height={15}
                />
              </div>

              <label className={`${styles.inline_flex}`} htmlFor="전체체크">
                <input
                  type="checkbox"
                  className={`${styles.checkbox}`}
                  // onChange={storehandleChange}
                  id="전체체크"
                  name="전체체크"
                />
              </label>
            </div>
          </div>
          {menuArrayState?.map((menu: menu) => (
            <div key={menu?.menuId} className={styles.menu}>
              <div className={styles.menu_left}>
                <div className={styles.add_image}>
                  {menu.menuImage ? (
                    <Image
                      aria-hidden
                      src={menu.menuImage}
                      alt="menuImage"
                      width={72}
                      height={72}
                    />
                  ) : (
                    <Image
                      aria-hidden
                      src="/icons/setting_menu_img_placeholder.jpg"
                      alt="placeholder_img"
                      width={72}
                      height={72}
                    />
                  )}
                </div>

                <div className={styles.menu_title}>
                  <p>{menu?.menuName}</p>
                  <p>{menu?.price}</p>
                </div>
              </div>

              <div className={styles.menu_right}>
                {menu.stockAvailable ? (
                  <div className={styles.left_count}>{menu.menuStock}</div>
                ) : (
                  ''
                )}

                <label
                  className={`${styles.inline_flex}`}
                  htmlFor={`품절여부-${menu.menuId}`}
                >
                  <input
                    type="checkbox"
                    className={`${styles.peer}`}
                    checked={menu?.isSoldOut}
                    onChange={() => handleSoldOutToggle(menu?.menuId)}
                    id={`품절여부-${menu?.menuId}`}
                  />
                </label>

                <label className={`${styles.inline_flex}`} htmlFor="배열추가용">
                  <input
                    type="checkbox"
                    className={`${styles.checkbox}`}
                    checked={checkedState[menu.menuId] || false}
                    onChange={() => handleCheckboxToggle(menu.menuId)}
                    id="배열추가용"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
