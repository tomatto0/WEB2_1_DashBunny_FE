import axios, { AxiosError } from "axios"
import { api } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";

interface SignInRequestDto {
  phone: string
  password: string
}

interface SignInResponse {
  accessToken: string
  refreshToken: string
}

export const userSignIn = async (formData: SignInRequestDto): Promise<void> => {
  try {
    const { data } = await api.post<SignInResponse>(`/auth/login`, formData
    )
console.log('token 리퀘스트',data)
    localStorage.setItem("token", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)

  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "사장님 로그인 실패")
    }
    throw error
  }
}
