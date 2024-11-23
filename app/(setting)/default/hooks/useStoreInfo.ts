import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getbasicInfo } from "../api/defaultInfo"
import { basicInfo } from "@/utils/model/store";

export const useGetStoreBasicInfo = () => {
  return useQuery<basicInfo>({
    queryKey: ["storeBasicInfo"],
    queryFn: getbasicInfo,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: false,
  })
}