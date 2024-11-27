import { useQuery} from "@tanstack/react-query"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { menuList, menuGroup } from "@/utils/model/menu";
import { getAllMenu, getGroupMenuOnly, getGroupMenus, updateMultifleDelete, updateMultifleSoldOut, updateSingleSoldOut } from "../api/menu";


export const useGetAllMenu = () => {
  console.log("useGetAllMenu")
  return useQuery<menuList>({
    queryKey: ["MenuList"],
    queryFn: () => getAllMenu(),
    staleTime: 5000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

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
