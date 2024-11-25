import axios, {AxiosError} from "axios";
import { api, updateAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { orderInfo } from "@/utils/model/store";

const storeId = 1;

//가게 주문 정보 조회
export const getOrderInfo = async(): Promise<orderInfo> => {
  try{
    const response = await api.get<orderInfo>(`/store/order-info/${storeId}`);

    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 주문정보 조회 실패 ')
    }
    throw error
  }
}


//가게 주문 정보 업데이트
export const updateOrderInfo = async(formData: orderInfo) : Promise<orderInfo> => {
  const request = updateAxiosClient();
  try{
    const response = await request.put<orderInfo>(`/store/order-info/${storeId}`, formData);
    console.log('formData:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 주문정보 업데이트 실패 ')
    }
    throw error
}
}