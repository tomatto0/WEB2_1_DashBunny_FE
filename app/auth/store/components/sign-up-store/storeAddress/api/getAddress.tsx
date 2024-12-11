import { api } from '@/utils/axios/axiosInstance';
import axios, { AxiosError } from 'axios';
import { JusoApiResponse } from '../model/addressResponse';

// 도로명 주소 apiKey
const apiKey: string | undefined = process.env.NEXT_PUBLIC_JUSO_API_KEY;

// API 에러 타입
interface ApiError {
  message: string;
  code: string;
}

export const getAddressApi = async (
  keyword: string,
): Promise<JusoApiResponse> => {
  try {
    const response = await api.get<JusoApiResponse>(
      `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${apiKey}&currentPage=1&countPerPage=50&keyword=${keyword}&resultType=json`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(axiosError.response?.data?.message || '주소 조회 실패');
    }
    throw error;
  }
};
