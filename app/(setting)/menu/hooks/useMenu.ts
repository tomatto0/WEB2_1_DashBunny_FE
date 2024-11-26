import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menuList } from "@/utils/model/menu";
import { getAllMenu, getGroupMenu, updateMultifleDelete, updateMultifleSoldOut } from "../api/menu";


export const useGetAllMenu = () => {
  return useQuery<menuList>({
    queryKey: ["MenuList"],
    queryFn: getAllMenu,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useGetGroupMenu = (groupId: number) => {
  return useQuery<menuList['menus']>({
    queryKey: ["MenuList", groupId],
    queryFn: () => getGroupMenu(groupId),
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

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
