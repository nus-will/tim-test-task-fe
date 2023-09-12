import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getDemoApi } from "../api/api_demo";
import { queryKeys } from "../utils/constants";
import { IContractors } from "../types/IContractor";

export const useDemoQuery = () => {
  const response: UseQueryResult<IContractors> = useQuery(
    [queryKeys.GET_DEMO_API],
    getDemoApi
  )
  return response
}
