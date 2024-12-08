import axios, {AxiosError} from "axios";
import { tokenAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { User } from "@/utils/model/user";

// API 에러 타입
export const getUserInfo = async (): Promise<User> => {
  const request = tokenAxiosClient();
  try {
    const response = await request.get<User>(`/jwt/getCurrentUser-authorization`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "유저정보 조회 실패")
    }
    throw error
  }
}
