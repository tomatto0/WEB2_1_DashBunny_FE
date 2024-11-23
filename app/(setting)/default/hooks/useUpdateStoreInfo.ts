import { useMutation } from "@tanstack/react-query";
import { updateBasicInfo } from "../api/defaultInfo";

export const useUpdateStoreInfo = () => {
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

export default useUpdateStoreInfo;