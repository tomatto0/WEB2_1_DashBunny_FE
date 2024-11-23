import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getBasicInfo } from "../api/defaultInfo"
import { basicInfo } from "@/utils/model/store";

export const useGetStoreBasicInfo = () => {
  return useQuery<basicInfo>({
    queryKey: ["storeBasicInfo"],
    queryFn: getBasicInfo,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}