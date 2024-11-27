import { useQuery } from "@tanstack/react-query"
import { orderInfo } from "@/utils/model/store";
import { useMutation } from "@tanstack/react-query";
import { getOrderInfo, updateOrderInfo } from "../api/orderInfo";

export const useGetStoreOrderInfo = () => {
  return useQuery<orderInfo>({
    queryKey: ["storeOrderInfo"],
    queryFn: getOrderInfo,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useUpdateStoreOrderInfo = () => {
  const { mutate } = useMutation({
    mutationFn: updateOrderInfo,
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return { mutate };
};

export default useUpdateStoreOrderInfo;