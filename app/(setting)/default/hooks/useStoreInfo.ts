import { useQuery} from "@tanstack/react-query"
import { getBasicInfo } from "../api/defaultInfo"
import { basicInfo } from "@/utils/model/store";
import { useMutation } from "@tanstack/react-query";
import { updateBasicInfo } from "../api/defaultInfo";

export const useGetStoreBasicInfo = () => {
  return useQuery<basicInfo>({
    queryKey: ["storeBasicInfo"],
    queryFn: getBasicInfo,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useUpdateStoreBasicInfo = () => {
  const { mutate } = useMutation({
    mutationFn: updateBasicInfo,
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return { mutate };
};

export default useUpdateStoreBasicInfo;