import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getDemoApi } from "../api/api_demo";
import { queryKeys } from "../utils/constants";
import { IDemoAPI } from "../types/IDemo";

export const useDemoQuery = () => {
  const response: UseQueryResult<IDemoAPI> = useQuery(
    [queryKeys.GET_DEMO_API],
    getDemoApi
  )
  return response
}
