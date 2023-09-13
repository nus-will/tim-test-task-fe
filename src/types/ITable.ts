import { IContractor } from "./IContractor";

export interface TableProps {
  tableData: IContractor[];
  searchData: (n: string) => void;
  isLoading: boolean;
  orderRequest: (n: OrderRequest) => void;
}

export interface OrderRequest {
  type: string;
  order: string;
}
