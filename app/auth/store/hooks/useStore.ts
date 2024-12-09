import { useMutation } from "@tanstack/react-query";
import { registStore } from '../api/store';
import { useRouter } from "next/navigation";



//가게 등록

export const useRegistStore = () => {
  const router = useRouter();
  const { mutate: registStoreMutate } = useMutation({
    mutationFn: (formData: FormData) => registStore(formData), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      router.push('http://localhost:3000/main');
    },
    onError(error) {
      console.log(error);
    },
  });
  return {registStoreMutate};
};

