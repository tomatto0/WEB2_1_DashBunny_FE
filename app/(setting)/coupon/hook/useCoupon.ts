import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCoupon, deleteCoupon, getCouponList } from "../api/coupon";
import { coupon } from "@/utils/model/coupon";

//쿠폰 리스트 가져오기

export const useGetCouponList = () => {
  console.log("useGetGroupMenus groupId")
  return useQuery<coupon[]>({
    queryKey: ["Coupon"],
    queryFn: () => getCouponList(),
    staleTime: 5000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

//신규 쿠폰 추가

export const useCouponGroup = () => {
  const { mutate: addCouponMutate } = useMutation({
    mutationFn: (formData: Partial<coupon>) => addCoupon(formData), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {addCouponMutate};
};

//쿠폰 삭제

export const useDeleteCoupon = () => {
  const queryClient = useQueryClient();

  const { mutate: useDeleteCouponMutate } = useMutation({
    mutationFn: (ownerCouponId: number) => deleteCoupon(ownerCouponId), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['Coupon'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {useDeleteCouponMutate};
};
