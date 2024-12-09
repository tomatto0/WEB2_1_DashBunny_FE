import axios, {AxiosError} from "axios";
import { tokenAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { User } from "@/utils/model/user";
import { Store } from "@/utils/model/user";

// 유저정보 조회
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


// 가게정보 조회
export const storeSignIn = async (): Promise<Store> => {
  const request = tokenAxiosClient();
  try {
    const { data } = await request.get<Store>(`/store/store-list`
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || "가게 정보 조회 실패")
    }
    throw error
  }
}