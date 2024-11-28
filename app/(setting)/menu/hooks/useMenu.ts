import { useQuery} from "@tanstack/react-query"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menuList, menuGroup, menu } from "@/utils/model/menu";
import { getAllMenu, getSingleMenu, getGroupMenuOnly, getGroupMenus, updateMultifleDelete, updateMultifleSoldOut, updateSingleSoldOut } from "../api/menu";

//전체 메뉴 조회
export const useGetAllMenu = () => {
  console.log("useGetAllMenu")
  return useQuery<menuList>({
    queryKey: ["MenuList"],
    queryFn: () => getAllMenu(),
    staleTime: 5000, // 5초
    gcTime: 1000 * 60 * 10, // 30분
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

// 단건 메뉴 조회
export const useGetSingleMenu = (menuId: number) => {
  console.log("useGetSingleMenu")
  return useQuery<menu>({
    queryKey: ["SingleMenu", menuId],
    queryFn: () => getSingleMenu(menuId),
    staleTime: 5000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

//특정 메뉴 그룹의 메뉴 리스트 조회
export const useGetGroupMenus = (groupId: number) => {
  console.log("useGetGroupMenus groupId" , groupId)
  return useQuery<menuList['menus']>({
    queryKey: ["GroupMenus", groupId],
    queryFn: () => getGroupMenus(groupId),
    staleTime: 5000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

//메뉴 그룹 리스트 조회
export const useGetGroupMenuOnly = () => {
  console.log("useMenu useGetGroupMenuOnly");
  return useQuery<menuGroup[]>({
    queryKey: ["MenuGroup"],
    queryFn: () => getGroupMenuOnly(),
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

// 단건 메뉴 품절 처리

interface UpdateSingleSoldOutInput{
  menuId: number;
  isSoldOut: boolean;
}

export const useSingleSoldOut = () => {
  const { mutate: updateSingleSoldOutMutate } = useMutation({
    mutationFn: ({isSoldOut, menuId}: UpdateSingleSoldOutInput) => updateSingleSoldOut({isSoldOut, menuId}), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateSingleSoldOutMutate};
};

// 다중 메뉴 품절 처리
export const useMultifleSoldOut = () => {
  const queryClient = useQueryClient();
  const { mutate: updateMultifleSoldOutMutate } = useMutation({
    
    mutationFn: (selectedIds: number[]) => updateMultifleSoldOut(selectedIds), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['AllMenus'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateMultifleSoldOutMutate};
};

//다중 메뉴 삭제처리
export const useMultifleDelete = () => {
  const queryClient = useQueryClient();
  const { mutate: updateMultifleDeleteMutate } = useMutation({
    mutationFn: (selectedIds: number[]) => updateMultifleDelete(selectedIds), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['AllMenus'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateMultifleDeleteMutate};
};
