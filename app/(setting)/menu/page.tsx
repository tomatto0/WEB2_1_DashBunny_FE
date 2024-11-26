'use client';

import styles from '@/styles/menu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  FormEvent,
  ChangeEvent,
  useReducer,
  useEffect,
  useState,
} from 'react';
import {
  useGetAllMenu,
  useGetGroupMenu,
  useMultifleDelete,
  useMultifleSoldOut,
} from './hooks/useMenu';
import { menu, menuGroup } from '@/utils/model/menu';

export default function menuSetting() {
  const { data, isLoading } = useGetAllMenu();

  //menu array를 setState를 통해서 관리
  const menuArray = data?.menus || [];
  const menuGroupArray = data?.menuGroups || [];
  const [menuArrayState, setMenuArrayState] = useState(menuArray);
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null); // 활성화된 그룹 ID

  useEffect(() => {
    if (menuArray) {
      setMenuArrayState(menuArray);
    }
  }, [menuArray]);

  //그룹리스트 불러오기
  const handleGroupList = (groupId: number) => {
    const { data, isError, error, isLoading } = useGetGroupMenu(groupId);

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

  //개별 품절 처리
  //체크를 할때마다 체크값이 새로 업데이트된 menuArray가 새로 State에 저장됨
  const handleSoldOutToggle = (menuId: number) => {
    setMenuArrayState((prevMenuArray) =>
      prevMenuArray.map((menu) =>
        menu.menuId === menuId ? { ...menu, isSoldOut: !menu.isSoldOut } : menu,
      ),
    );
  };

  // 전체 그룹 선택
  const handleAllGroupClick = () => {
    setMenuArrayState(menuArray); // 전체 메뉴 상태로 복원
    setActiveGroupId(null); // 활성화된 그룹 ID 초기화
  };

  // menuArray를 받아서 기본 initialstate를 만드는 reduce함수
  const createInitialState = (menuArray: menu[]) =>
    menuArray.reduce((state, menu) => {
      state[menu.menuId] = false; // 초기값: 모두 체크되지 않은 상태
      return state;
    }, {} as Record<number, boolean>);

  const initialState = createInitialState(menuArray);

  // Reducer function to toggle checkbox state
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

  useEffect(() => {
    setMenuArrayState(menuArray); // 데이터가 바뀌면 상태 초기화
    dispatch({ type: 'RESET_CHECKED' });
  }, [menuArray]);

  // 사이드 Handle 체크박스 토글시 checkedState에 업데이트
  const handleCheckboxToggle = (menuId: number) => {
    dispatch({ type: 'TOGGLE_CHECKED', menuId });
  };

  const { updateMultifleSoldOutMutate } = useMultifleSoldOut();

  // 체크된 다중 핸들 품절 api처리
  const handleSoldOutAction = () => {
    const selectedIds = Object.keys(checkedState)
      .filter((id) => checkedState[Number(id)])
      .map(Number);

    // API call with selected IDs
    console.log('Selected Menu IDs for Sold Out:', selectedIds);

    updateMultifleSoldOutMutate(selectedIds);
  };

  const { updateMultifleDeleteMutate } = useMultifleDelete();

  // 체크된 다중 핸들 삭제 api처리
  const handleDeleteAction = () => {
    const selectedIds = Object.keys(checkedState)
      .filter((id) => checkedState[Number(id)])
      .map(Number);

    // API call with selected IDs
    console.log('Selected Menu IDs for Delete:', selectedIds);

    // TODO: Implement API call here
    updateMultifleDeleteMutate(selectedIds);
  };

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
              메뉴 추가
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
