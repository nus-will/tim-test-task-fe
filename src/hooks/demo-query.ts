import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getDemoApi } from "../api/api_demo";
import { queryKeys } from "../utils/constants";
import { IContractors } from "../types/IContractor";
import { ApiProps } from "../types/IAPI";

export const useDemoQuery = ({sortBy ="full_name", orderBy = "asc", searchBy}: ApiProps) => {
  const response: UseQueryResult<IContractors> = useQuery(
    [queryKeys.GET_DEMO_API],
    async () => {
      return await getDemoApi({
        sortBy: sortBy,
        orderBy: orderBy,
        searchBy: searchBy,
      })
    }
  );
  return response;
}
