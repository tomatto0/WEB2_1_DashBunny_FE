import axios, {AxiosError} from "axios";
import { api } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { coupon } from "@/utils/model/coupon";

const storeId = 'user_1';

//쿠폰 리스트 가져오기

export const getCouponList = async(): Promise<coupon[]> => {
  console.log("getCouponList");
  try{
    const response = await api.get<coupon[]>(`/store/coupon/${storeId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '쿠폰 리스트 정보 조회 실패 ')
    }
    throw error
  }
}


//신규 쿠폰 생성
export const addCoupon = async(formData: Partial<coupon>) : Promise<void> => {
  try{
    const response = await api.post<void>(`/store/coupon/${storeId}`, formData);
    console.log('Add coupon Data:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '쿠폰 생성 실패 ')
    }
    throw error
}
}

//쿠폰 조기 종료
export const deleteCoupon = async(ownerCouponId: number) : Promise<void> => {
  try{
    const response = await api.patch(`/store/coupon/${ownerCouponId}`);
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '쿠폰 삭제 실패 ')
    }
    throw error
}
}