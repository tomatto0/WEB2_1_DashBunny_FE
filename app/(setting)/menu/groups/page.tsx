'use client';

import styles from '@/styles/menu_group.module.scss';
import Image from 'next/image';
import { useGetGroupMenuOnly } from '../hooks/useMenu';
import { useDeleteMenuGroup } from '../hooks/useGroup';
import { menuGroup } from '@/utils/model/menu';
import AddMenuGroupModal from '../component/addMenuGroup';
import { useState } from 'react';
import UpdateMenuGroupModal from '../component/UpdateMenuGroup';

export default function groups() {
  const { data, isLoading, isError } = useGetGroupMenuOnly();
  const menuGroups = data || [];

  //메뉴 그룹 추가 모달 온오프
  const [showAddModal, setAddModal] = useState(false);
  const clickAddModal = () => setAddModal(!showAddModal);

  //메뉴 업데이트 모달 온오프
  const [showUpdateModal, setUpdateModal] = useState(false);
  const clickUpdateModal = () => setUpdateModal(!showUpdateModal);

  const [updategroupId, setUpdateGroupId] = useState(0);
  const [updategroupName, setUpdateGroupName] = useState('');
  const [updateisMainGroup, setUpdateisMainGroup] = useState(false);

  const { useDeleteMenuGroupMutate } = useDeleteMenuGroup();

  const handleUpdateGroup = (group: menuGroup) => {
    setUpdateGroupId(group.groupId);
    setUpdateGroupName(group.groupName);
    setUpdateisMainGroup(group.isMainGroup);
    clickUpdateModal();
  };

  const handleDeleteGroup = (group: menuGroup) => {
    const menugroupId = group.groupId;
    useDeleteMenuGroupMutate(menugroupId);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <div className={styles.contents_wrap}>
        <div className={styles.page_title}>
          메뉴 그룹 설정
          <div className={styles.add_menu_button} onClick={clickAddModal}>
            <Image
              aria-hidden
              src="/icons/add_white.svg"
              alt="add_menu_plus_icon"
              width={14}
              height={14}
            />
            그룹 추가
          </div>
        </div>
        <div className={styles.menu_list}>
          카테고리명
          <hr className={styles.margin_top} />
          {menuGroups?.map((group) => (
            <div className={styles.button_wrap} key={group.groupId}>
              {group.groupName}
              <div>
                <button
                  className={styles.soldout_button}
                  type="button"
                  onClick={() => {
                    handleUpdateGroup(group);
                  }}
                >
                  수정
                </button>

                <button
                  className={styles.delete_button}
                  type="button"
                  onClick={() => {
                    handleDeleteGroup(group);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
        {showAddModal && <AddMenuGroupModal clickAddModal={clickAddModal} />}
        {showUpdateModal && (
          <UpdateMenuGroupModal
            clickUpdateModal={clickUpdateModal}
            groupId={updategroupId}
            groupName={updategroupName}
            isMainGroup={updateisMainGroup}
          />
        )}
      </div>
    </>
  );
}
