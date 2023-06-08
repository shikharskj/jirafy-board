import { useQuery } from "react-query";
import { Task } from "../model/task";
import { getApi } from "../utils/apiCalls";

const getTasks = async (): Promise<Task[]> => {
  const res = await getApi<Task[]>("http://localhost:8000/tasks");
  return res;
};

export const useGetTasks = (config = {}): any => {
  return useQuery("core/api/v1/tasks", () => getTasks(), {
    staleTime: 1800000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 0,
    ...config,
    // select: selectUserDetailData,
    onError: (error: any) => {
        // handleErrorCode(error)
        console.log(new Error(error))
    }
  });
};
