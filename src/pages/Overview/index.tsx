import { useEffect, useState } from "react";
import TabNavigationLayout from "../../components/Layout/TabNavigationLayout";
import Table from "../../components/Table";
import { useDemoQuery } from "../../hooks/demo-query";
import { generateRandomColor } from "../../utils/utils";

export default function Overview() {
  const [tableData, setTableData] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>("");

  const { data, refetch, isLoading } = useDemoQuery({
    searchBy: searchText,
  });

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
    if (searchText) {
      refetch();
    } else if (searchText === "") refetch();
  }, [searchText, refetch]);

  return (
    <TabNavigationLayout>
      <div className="flex flex-col max-w-[63.194vw] ml-[18.056vw] mr-auto py-[80px]">
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
          />
        </div>
      </div>
    </TabNavigationLayout>
  );
}
