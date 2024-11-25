import axios, {AxiosError} from "axios";
import { api, updateAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { operationInfo } from "@/utils/model/store";

const storeId = 1;

//가게 기본 정보 조회
export const getOperationInfo = async(): Promise<operationInfo> => {
  try{
    const response = await api.get<operationInfo>(`/store/operation-info/${storeId}`);

    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 기본 정보 조회 실패 ')
    }
    throw error
  }
}

interface updateOperationInfoData {
    openingHours: string;
    breakTime: string;
    holidayDays: string;
    holidayNotice: string;
}

//가게 기본 정보 업데이트
export const updateOperationInfo = async(formData: updateOperationInfoData) : Promise<updateOperationInfoData> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<updateOperationInfoData>(`/store/operation-info/${storeId}`, formData);
    console.log('formData:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 운영 정보 업데이트 실패 ')
    }
    throw error
}
}


interface updatePauseData {
  pauseStartTime: string;
  pauseEndTime: string;
}

//가게 일시중지 설정
export const updatePauseInfo = async(formData: updatePauseData) : Promise<updatePauseData> => {
const request = updateAxiosClient();
try{
  const response = await request.patch<updatePauseData>(`/store/operation-pause/${storeId}`, formData);
  console.log('formData:', formData)
  return response.data
}catch(error) {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiError>
    throw new Error(axiosError.response?.data?.message || '임시 휴무 정보 업데이트 실패 ')
  }
  throw error
}
}

//가게 일시중지 중지 설정
export const endPauseInfo = async() : Promise<void> => {
  
  try{
    const response = await api.patch(`/store/operation-resume/${storeId}`, {
      userInfo: storeId
    });
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '임시 중지 해제 업데이트 실패 ')
    }
    throw error
  }
  }