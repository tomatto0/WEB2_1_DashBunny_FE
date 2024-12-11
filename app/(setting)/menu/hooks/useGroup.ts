import { useMutation } from "@tanstack/react-query";
import { updateGroupData } from "@/utils/model/menu";
import { addMenuGroup, deleteMenuGroup, updateMenuGroup } from "../api/menuGroup";


//메뉴 그룹 추가

export const useAddMenuGroup = () => {
  const { mutate: addMenuGroupMutate } = useMutation({
    mutationFn: (formData: updateGroupData) => addMenuGroup(formData), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {addMenuGroupMutate};
};



//메뉴 그룹 업데이트

interface UpdateMenuGroupInput{
  groupId: number;
  formData: updateGroupData;
  }

export const useUpdateMenuGroup = () => {
  const { mutate: updateMenuGroupMutate } = useMutation({
    mutationFn: ({groupId, formData}: UpdateMenuGroupInput) => updateMenuGroup({groupId, formData}), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateMenuGroupMutate};
};


//메뉴 그룹 삭제

export const useDeleteMenuGroup = () => {

  const { mutate: useDeleteMenuGroupMutate } = useMutation({
    mutationFn: (menugroupId: number) => deleteMenuGroup(menugroupId), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {useDeleteMenuGroupMutate};
};
