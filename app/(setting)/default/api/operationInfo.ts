import axios, {AxiosError} from "axios";
import { api } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { operationInfo, pauseTimeInfo } from "@/utils/model/store";


//가게 운영 정보 조회
export const getOperationInfo = async(): Promise<operationInfo> => {
  const storeId = localStorage.getItem("storeId");
  try{
    const response = await api.get<operationInfo>(`/store/operation-info/${storeId}`);
 console.log('운영정보 전체', response.data)
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 기본 정보 조회 실패 ')
    }
    throw error
  }
}

//가게 운영 정보 업데이트
export const updateOperationInfo = async(formData: Partial<operationInfo>) : Promise<void> => {
  const storeId = localStorage.getItem("storeId");
  try{
    const response = await api.post<void>(`/store/operation-info/${storeId}`, formData);
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 운영 정보 업데이트 실패 ')
    }
    throw error
}
}

//가게 영업 일시중지 설정
export const updatePauseInfo = async(formData: pauseTimeInfo) : Promise<pauseTimeInfo> => {
  const storeId = localStorage.getItem("storeId");
try{
  const response = await api.patch<pauseTimeInfo>(`/store/operation-pause/${storeId}`, formData);
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

//가게 영업 일시중지 해제 설정
export const endPauseInfo = async() : Promise<void> => {
  const storeId = localStorage.getItem("storeId");
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