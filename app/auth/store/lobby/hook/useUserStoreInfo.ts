import { useQuery, UseQueryResult } from "@tanstack/react-query"

import { User } from "@/utils/model/user"
import { getUserInfo } from "../api/storeInfo"

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

// export const useCurrentUser = (): UseQueryResult<User, Error> => {
//   return useQuery({
//     queryKey: ["useInfo"],
//     queryFn: getCurrentUser,
//     staleTime: 1000 * 60 * 5, // 5분
//     gcTime: 1000 * 60 * 30, // 30분
//     retry: 1,
//     refetchOnWindowFocus: true,
//   })
// }
