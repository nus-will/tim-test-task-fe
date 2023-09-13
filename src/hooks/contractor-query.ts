import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAPI } from "../api/contractors";
import { queryKeys } from "../utils/constants";
import { IContractors } from "../types/IContractor";
import { ApiProps } from "../types/IAPI";

export const useAPIQuery = ({sortBy ="full_name", orderBy = "asc", searchBy}: ApiProps) => {
  const response: UseQueryResult<IContractors> = useQuery(
    [queryKeys.GET_CONTRACTORS],
    async () => {
      return await getAPI({
        sortBy: sortBy,
        orderBy: orderBy,
        searchBy: searchBy,
      })
    }
  );
  return response;
}
