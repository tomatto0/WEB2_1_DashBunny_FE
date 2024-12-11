import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getAddressApi } from "../api/getAddress"
import { JusoApiResponse } from "../model/addressResponse"

export const useGetAddressListByKeyword = (
  keyword: string,
): UseQueryResult<JusoApiResponse, Error> => {
  return useQuery({
    queryKey: ["juso", keyword],
    queryFn: () => getAddressApi(keyword),
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
