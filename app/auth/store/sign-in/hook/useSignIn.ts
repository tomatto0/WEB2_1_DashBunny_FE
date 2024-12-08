
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { userSignIn } from "../api/signIn";


export interface SignInRequestDto {
  phone: string
  password: string
}

export const useUserSignIn = () => {
  const router = useRouter();
  const { mutate: userSignInMutation } = useMutation({
    mutationFn: (formData: SignInRequestDto) => userSignIn(formData), 
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      router.push('http://localhost:3000/auth/store/lobby');
    },
    onError(error) {
      alert('로그인 실패')
      console.log(error);
    },
  });
  return {userSignInMutation};
};