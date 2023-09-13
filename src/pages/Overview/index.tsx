import { useCallback, useEffect, useState } from "react";
import TabNavigationLayout from "../../components/Layout/TabNavigationLayout";
import Table from "../../components/Table";
import { useAPIQuery } from "../../hooks/contractor-query";
import { generateRandomColor } from "../../utils/utils";
import { OrderRequest } from "../../types/ITable";

export default function Overview() {
  const [tableData, setTableData] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [orderText, setOrderText] = useState<string>("asc");
  const [typeText, setTypeText] = useState<string>("full_name");

  const { data, refetch, isLoading } = useAPIQuery({
    sortBy: typeText,
    orderBy: orderText,
    searchBy: searchText,
  });

  const handleSort = useCallback((e: OrderRequest) => {
    setOrderText(e.order);
    setTypeText(e.type);
  }, []);

  useEffect(() => {
    if (data) {
      setTableData(
        data?.contractors?.map((value) => ({
          ...value,
          bgColor: generateRandomColor(),
        }))
      );
    }
  }, [data]);

  useEffect(() => {
    if (searchText || orderText || typeText) {
      refetch();
    } else if (searchText === "") refetch();
  }, [searchText, refetch, orderText, typeText]);

  return (
    <TabNavigationLayout>
      <div className="flex flex-col max-w-[63.194vw] ml-[18.056vw] mr-auto py-[80px] 2xl:mx-auto 2xl:max-w-[910px] ">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-gray700 text-[40px] font-semibold leading-[48px]">
            Contractors
          </h1>
          <p className="text-gray500">
            Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non
            et vel nec sit proin.
          </p>
        </div>

        <div className="flex mt-[40px] max-w-[63.194vw] w-full 2xl:max-w-[910px]">
          <Table
            tableData={tableData}
            searchData={(e) => setSearchText(e)}
            isLoading={isLoading}
            orderRequest={(e: OrderRequest) => handleSort(e)}
          />
        </div>
      </div>
    </TabNavigationLayout>
  );
}
