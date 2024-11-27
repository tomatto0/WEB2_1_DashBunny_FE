import { useQuery} from "@tanstack/react-query"
import { operationInfo} from "@/utils/model/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getOperationInfo, updateOperationInfo, updatePauseInfo, endPauseInfo } from "../api/operationInfo";


export const useGetOperationInfo = () => {
  return useQuery<operationInfo>({
    queryKey: ["OperationInfo"],
    queryFn: getOperationInfo,
    staleTime: 1000, // 1초
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

export const useUpdateOperationInfo = () => {
  const queryClient = useQueryClient();
  const { mutate: updateOperationInfoMutate } = useMutation({
    
    mutationFn: updateOperationInfo,
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['OperationInfo'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return {updateOperationInfoMutate};
};

export const useUpdatePauseTime = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePauseTimeMutate } = useMutation({
    mutationFn: updatePauseInfo,
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['OperationInfo'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return { updatePauseTimeMutate };
};

export const useEndPauseTime = () => {
  const queryClient = useQueryClient();
  const { mutate: endPauseTimeMutate } = useMutation({
    mutationFn: endPauseInfo,
    onSuccess: () => {
      localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['OperationInfo'] });
    },
    onError(error) {
      console.log(error);
    },
  });
  return { endPauseTimeMutate };
};
