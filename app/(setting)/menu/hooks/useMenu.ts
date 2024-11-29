import { useQuery} from "@tanstack/react-query"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menuList, menuGroup, menu, menuListResponse } from "@/utils/model/menu";
import { getAllMenu, getSingleMenu, getGroupMenuOnly, getGroupMenus, updateMultifleDelete, updateMultifleSoldOut, updateSingleSoldOut, addMenu, updateMenu, deleteMenu } from "../api/menu";

// 메뉴 리스트 조회 Mutation
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


//특정 메뉴 그룹의 메뉴 리스트 조회
export const useGetGroupMenus = (groupId: number | null, enabled = false) => {
  return useQuery<menuListResponse>({
    queryKey: ["GroupMenus", groupId],
    queryFn: () => getGroupMenus(groupId!),
    staleTime: 5000, // 5초
    retry: 1,
    refetchOnWindowFocus: false,
    enabled, // 조건부 실행
  });
};

//메뉴 그룹 리스트 조회
export const useGetGroupMenuOnly = () => {
  return useQuery<menuGroup[]>({
    queryKey: ["MenuGroup"],
    queryFn: () => getGroupMenuOnly(),
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

// 메뉴 1건 조회/추가/수정/삭제 mutation


// 메뉴 1건 조회 - 수정시 사용
interface singleMenu {
  menu: menu,
  menuGroups: menuGroup[]
}

export const useGetSingleMenu = (menuId: number) => {
  console.log("useGetSingleMenu")
  return useQuery<singleMenu>({
    queryKey: ["SingleMenu", menuId],
    queryFn: () => getSingleMenu(menuId),
    staleTime: 5000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}


//신규 메뉴 등록
export const useAddMenu = () => {
  const { mutate: addMenuMutate } = useMutation({
    mutationFn: (formData: Partial<menu>) => addMenu(formData), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {addMenuMutate};
};

interface UpdateMenu {
  menuId: number,
  formData: Partial<menu>
}

//메뉴 정보 수정
export const useUpdateMenu = () => {
  const { mutate: updateMenuMutate } = useMutation({
    mutationFn: ({formData, menuId}: UpdateMenu) => updateMenu({formData, menuId}), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateMenuMutate};
};

//메뉴 1건 삭제
export const useDeleteMenu = () => {
  const { mutate: deleteMenuMutate } = useMutation({
    mutationFn: ( menuId: number) => deleteMenu(menuId), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {deleteMenuMutate};
};



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
