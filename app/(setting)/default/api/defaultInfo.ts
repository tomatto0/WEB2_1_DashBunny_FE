import axios, {AxiosError} from "axios";
import { api, updateAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { basicInfo } from "@/utils/model/store";

const storeId = 1;

//가게 기본 정보 조회
export const getBasicInfo = async(): Promise<basicInfo> => {
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

interface updateInfoData {
    storePhone: string;
    storeLogo: string;
    bannerImage: string;
    storeDescription: string;
    promoShortsUrl: string;
}

//가게 기본 정보 업데이트
export const updateBasicInfo = async(formData: updateInfoData) : Promise<updateInfoData> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<updateInfoData>(`/store/basic-info/${storeId}`, formData);
    console.log('formData:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 기본 정보 업데이트 실패 ')
    }
    throw error
}
}