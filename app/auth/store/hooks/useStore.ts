import { useMutation } from "@tanstack/react-query";
import { registStore } from '../api/store';
import { storeRegist } from "@/utils/model/register";


//가게 등록

export const useRegistStore = () => {
  const { mutate: registStoreMutate } = useMutation({
    mutationFn: (formData: storeRegist) => registStore(formData), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
    },
    onError(error) {
      console.log(error);
    },
  });
  return {registStoreMutate};
};

