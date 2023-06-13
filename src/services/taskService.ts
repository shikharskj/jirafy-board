import { useMutation, useQuery, useQueryClient } from "react-query";
import { Task } from "../model/task";
import { deleteApi, getApi, patchApi, postApi } from "../utils/apiCalls";

const getTasks = async (): Promise<Task[]> => {
  const res = await getApi<Task[]>("http://localhost:8000/tasks");
  return res;
};

const createTask = async (data: Task, params = {}): Promise<Task> => {
  const res = await postApi<Task>("http://localhost:8000/tasks", data, params);
  return res;
}

const updateTask = async ( data: Task, params = {}): Promise<Task> => {
  const res = await patchApi<Task>("http://localhost:8000/tasks/"+ data.id, data, params);
  return res;
}

const deleteTask = async ( data: Task, params = {}): Promise<Task> => {
  const res = await deleteApi<Task>("http://localhost:8000/tasks/"+ data.id, params);
  return res;
}

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

export const useCreateTask = (config = {}): any => {
  const queryClient = useQueryClient();
  return useMutation(createTask, {
    ...config,
    onSuccess: () => {
      queryClient.invalidateQueries(
        ["core/api/v1/tasks"], 
        { exact: true, refetchInactive: true }
      );
    },
    onError: (error: any) => {
      // handleErrorCode(error)
      console.log(new Error(error))
    }
  })
}

export const useEditTask = (config = {}): any => {
  const queryClient = useQueryClient();
  return useMutation(updateTask, {
    ...config,
    onSuccess: () => {
      queryClient.invalidateQueries(
        ["core/api/v1/tasks"], 
        { exact: true, refetchInactive: true }
      );
    },
    onError: (error: any) => {
      // handleErrorCode(error)
      console.log(new Error(error))
    }
  })
}

export const useDeleteTask = (config = {}): any => {
  const queryClient = useQueryClient();
  return useMutation(deleteTask, {
    ...config,
    onSuccess: () => {
      queryClient.invalidateQueries(
        ["core/api/v1/tasks"], 
        { exact: true, refetchInactive: true }
      );
    },
    onError: (error: any) => {
      // handleErrorCode(error)
      console.log(new Error(error))
    }
  })
}
