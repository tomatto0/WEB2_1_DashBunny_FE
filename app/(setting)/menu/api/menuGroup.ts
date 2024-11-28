import axios, {AxiosError} from "axios";
import { api } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { updateGroupData } from "@/utils/model/menu";

const storeId = 'user_1';

//신규 메뉴 그룹 생성
export const addMenuGroup = async(formData: updateGroupData) : Promise<updateGroupData> => {
  try{
    const response = await api.post<updateGroupData>(`/store/group/${storeId}`, formData);
    console.log('Add MenuGroup Data:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 생성 실패 ')
    }
    throw error
}
}

interface UpdateMenuGroupInput{
groupId: number;
formData: updateGroupData;
}

//메뉴 그룹 업데이트
export const updateMenuGroup = async({groupId, formData}: UpdateMenuGroupInput) : Promise<void> => {
  try{
    const response = await api.post(`/store/group/${groupId}`, formData);
    console.log('Add MenuGroup Data:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 업데이트 실패 ')
    }
    throw error
}
} 

//메뉴 그룹 삭제
export const deleteMenuGroup = async(groupId: number) : Promise<void> => {
  try{
    const response = await api.delete(`/store/group/${groupId}`);
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 삭제 실패 ')
    }
    throw error
}
}