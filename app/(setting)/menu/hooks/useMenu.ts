import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menuList } from "@/utils/model/menu";
import { getAllMenu, getGroupMenuOnly, getGroupMenus, updateMultifleDelete, updateMultifleSoldOut, updateSingleSoldOut } from "../api/menu";


export const useGetAllMenu = () => {
  return useQuery<menuList>({
    queryKey: ["MenuList"],
    queryFn: getAllMenu,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useGetGroupMenus = (groupId: number) => {
  return useQuery<menuList['menus']>({
    queryKey: ["MenuList", groupId],
    queryFn: () => getGroupMenus(groupId),
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useGetGroupMenuOnly = () => {
  return useQuery<menuList['menuGroups']>({
    queryKey: ["MenuList"],
    queryFn: () => getGroupMenuOnly(),
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

interface UpdateSingleSoldOutInput{
  menuId: number;
  isSoldOut: boolean;
}

export const useSingleSoldOut = () => {
  const queryClient = useQueryClient();
  const { mutate: updateSingleSoldOutMutate } = useMutation({
    
    mutationFn: ({isSoldOut, menuId}: UpdateSingleSoldOutInput) => updateSingleSoldOut({isSoldOut, menuId}), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['MenuList'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateSingleSoldOutMutate};
};


export const useMultifleSoldOut = () => {
  const queryClient = useQueryClient();
  const { mutate: updateMultifleSoldOutMutate } = useMutation({
    
    mutationFn: (selectedIds: number[]) => updateMultifleSoldOut(selectedIds), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['MenuList'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateMultifleSoldOutMutate};
};

export const useMultifleDelete = () => {
  const queryClient = useQueryClient();
  const { mutate: updateMultifleDeleteMutate } = useMutation({
    mutationFn: (selectedIds: number[]) => updateMultifleDelete(selectedIds), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['MenuList'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateMultifleDeleteMutate};
};
