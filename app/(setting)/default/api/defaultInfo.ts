import axios, {AxiosError} from "axios";
import { api } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { basicInfo } from "@/utils/model/store";


//가게 기본 정보 조회
export const getbasicInfo = async(): Promise<basicInfo> => {
  const storeId = 1;

  try{
    const response = await api.get<basicInfo>(`/store/basic-info/${storeId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 기본 정보 조회 실패 ')
    }
    throw error
  }
}