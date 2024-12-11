import { useQuery, UseQueryResult } from "@tanstack/react-query"

import { Store, User } from "@/utils/model/user"
import { getUserInfo, storeSignIn } from "../api/storeInfo"

export const useUserStoreInfo = (): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: ["useInfo"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: true,
  })
}

export const useStoreSignIn = () => {
  return useQuery<Store>({
    queryKey: ["userStoreInfo"],
    queryFn: storeSignIn,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}