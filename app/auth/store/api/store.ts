import axios, {AxiosError} from "axios";
import { updateStoreAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { storeRegist } from "@/utils/model/register";

// const storeId = 1;

//가게 등록
export const registStore = async(formData: storeRegist) : Promise<void> => {
  const request = updateStoreAxiosClient();
  try{
    const response = await request.post(`/store/create`, formData);
    console.log('formData:', formData)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '가게 등록 실패 ')
    }
    throw error
}
}