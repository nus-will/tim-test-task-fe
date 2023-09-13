import {
  IContractor,
  IContractors,
  ISpecialties,
} from "../../types/IContractor";
import Search from "../Search";
import useTable from "./hooks";
import sortIcon from "../../assets/images/sort-icon.svg";
import inactiveSortIcon from "../../assets/images/inactive-sort.svg";
import { useCallback, useEffect } from "react";
import { TableProps } from "../../types/ITable";

export default function Table({
  tableData,
  searchData,
  isLoading,
  orderRequest,
}: TableProps) {
  const {
    orderFullName,
    setOrderFullName,
    orderDateRate,
    setOrderDateRate,
    orderAvail,
    setOrderAvail,
    setIsSorted,
    sortedType,
    setSortedType,
    handleCheckAll,
    isCheckedAll,
  } = useTable();

  const handleSort = useCallback(
    (type: string) => {
      setIsSorted(true);
      switch (type) {
        case "full_name":
          setOrderFullName(!orderFullName);
          setSortedType(type);
          orderRequest({
            type: type,
            order: orderFullName ? "asc" : "desc",
          });
          break;
        case "day_rate":
          setOrderDateRate(!orderDateRate);
          setSortedType(type);
          orderRequest({
            type: type,
            order: orderDateRate ? "asc" : "desc",
          });
          break;

        case "available":
          setOrderAvail(!orderAvail);
          setSortedType(type);
          orderRequest({
            type: type,
            order: orderAvail ? "asc" : "desc",
          });
          break;
        default:
          break;
      }
    },
    [
      orderAvail,
      orderDateRate,
      orderFullName,
      orderRequest,
      setIsSorted,
      setOrderAvail,
      setOrderDateRate,
      setOrderFullName,
      setSortedType,
    ]
  );

  return (
    <div className="box-shadow flex flex-col max-w-[63.194vw]  h-full w-full">
      <Search inputValue={(e) => searchData(e)} />

      <div className="flex w-full overflow-auto">
        <table className="table-auto mb-[24px] px-[24px] min-w-[768px] w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="h-[60px]">
              <th className="w-[24px]" />
              <th
                data-priority="1"
                className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]"
              >
                <div className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-[15px] h-[15px]"
                    onChange={handleCheckAll}
                    disabled={isLoading}
                  />
                  <div
                    className="flex"
                    onClick={() => {
                      handleSort("full_name");
                    }}
                  >
                    <p>FULL NAME</p>
                    <img
                      src={
                        sortedType === "full_name" ? sortIcon : inactiveSortIcon
                      }
                      alt="sort-icon"
                      className={`${orderFullName ? "rotate-180" : ""} ${
                        sortedType !== "full_name" && "ml-[4px]"
                      }`}
                    />
                  </div>
                </div>
              </th>
              <th className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]">
                <div className="flex cursor-pointer">
                  <p>SPECIALITIES</p>
                </div>
              </th>
              <th className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]">
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    handleSort("day_rate");
                  }}
                >
                  <p>Day rate</p>
                  <img
                    src={
                      sortedType === "day_rate" ? sortIcon : inactiveSortIcon
                    }
                    alt="sort-icon"
                    className={`${orderDateRate ? "rotate-180" : ""}  ${
                      sortedType !== "day_rate" && "ml-[4px]"
                    }`}
                  />
                </div>
              </th>
              <th
                data-priority="4"
                className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]"
              >
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    handleSort("available");
                  }}
                >
                  <p>AVAILABILITY</p>
                  <img
                    src={
                      sortedType === "available" ? sortIcon : inactiveSortIcon
                    }
                    alt="sort-icon"
                    className={`${orderAvail ? "rotate-180" : ""}  ${
                      sortedType !== "available" && "ml-[4px]"
                    }`}
                  />
                </div>
              </th>
              <th className="w-[24px]" />
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <>
                <tr>
                  <td className="w-[24px]" />
                  <td>
                    <div className="flex items-center gap-[16px] my-[8px]">
                      <div className="rounded-full bg-gray400 h-10 w-10"></div>
                      <div className="h-2 bg-gray400 rounded w-[6.05vw]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-[8px]">
                      <div className="h-5 bg-gray400 rounded w-[6.34vw]"></div>
                      <div className="h-5 bg-gray400 rounded w-[6.34vw]"></div>
                      <div className="h-5 bg-gray400 rounded w-[2.34vw]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="h-2 bg-gray400 rounded w-[5.3vw]"></div>
                  </td>
                  <td>
                    <div className="h-2 bg-gray400 rounded w-[5.3vw]"></div>
                  </td>
                </tr>
                <tr>
                  <td className="w-[24px]" />
                  <td>
                    <div className="flex items-center gap-[16px]  my-[8px]">
                      <div className="rounded-full bg-gray400 h-10 w-10"></div>
                      <div className="h-2 bg-gray400 rounded w-[6.05vw]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-[8px]">
                      <div className="h-5 bg-gray400 rounded w-[6.34vw]"></div>
                      <div className="h-5 bg-gray400 rounded w-[6.34vw]"></div>
                      <div className="h-5 bg-gray400 rounded w-[2.34vw]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="h-2 bg-gray400 rounded w-[5.3vw]"></div>
                  </td>
                  <td>
                    <div className="h-2 bg-gray400 rounded w-[5.3vw]"></div>
                  </td>
                </tr>
                <tr>
                  <td className="w-[24px]" />
                  <td>
                    <div className="flex items-center gap-[16px]  my-[8px]">
                      <div className="rounded-full bg-gray400 h-10 w-10"></div>
                      <div className="h-2 bg-gray400 rounded w-[6.05vw]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-[8px]">
                      <div className="h-5 bg-gray400 rounded w-[6.34vw]"></div>
                      <div className="h-5 bg-gray400 rounded w-[6.34vw]"></div>
                      <div className="h-5 bg-gray400 rounded w-[2.34vw]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="h-2 bg-gray400 rounded w-[5.3vw]"></div>
                  </td>
                  <td>
                    <div className="h-2 bg-gray400 rounded w-[5.3vw]"></div>
                  </td>
                </tr>
              </>
            ) : (
              <TableBody contractors={tableData} isCheckedAll={isCheckedAll} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableBody = ({ contractors, isCheckedAll }: IContractors) => {
  const {
    handleSelectedContractor,
    selectedContractor,
    handleCheckedContractor,
    setSelectedContractor,
  } = useTable();

  const { removeSelectItem, setRemoveSelectItem } = useTable();

  useEffect(() => {
    if (contractors) {
      setSelectedContractor([]);
      setRemoveSelectItem(false);
    }
  }, [contractors, setRemoveSelectItem, setSelectedContractor]);

  useEffect(() => {
    if (isCheckedAll) {
      setSelectedContractor([]);
      setRemoveSelectItem(false);
    }
  }, [isCheckedAll, setRemoveSelectItem, setSelectedContractor]);

  return (
    <>
      {contractors?.map((item: IContractor, contractorIndex: number) => {
        return (
          <tr
            className={`h-[60px] cursor-pointer ease-in-out duration-300 ${
              (isCheckedAll ||
                (selectedContractor.includes(contractorIndex) &&
                  !removeSelectItem)) &&
              "bg-blue100"
            } ${
              !isCheckedAll &&
              !selectedContractor.includes(contractorIndex) &&
              "hover:bg-light-gray400"
            }`}
            key={contractorIndex}
            onClick={() => {
              handleSelectedContractor(contractorIndex);
            }}
          >
            <td className="w-[24px]" />
            <td className="w-[260px]">
              <div className="flex items-center gap-[8px]">
                <input
                  checked={
                    isCheckedAll || selectedContractor.includes(contractorIndex)
                      ? removeSelectItem
                        ? false
                        : true
                      : false
                  }
                  className="w-[15px] h-[15px]"
                  type="checkbox"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleCheckedContractor(e);
                  }}
                />
                <div
                  style={{ background: item.bgColor } as React.CSSProperties}
                  className={`rounded-[8px] w-[24px] h-[24px] items-center flex justify-center`}
                >
                  <span className="text-white">{item.full_name.charAt(0)}</span>
                </div>
                <p
                  className={
                    isCheckedAll ||
                    (selectedContractor.includes(contractorIndex) &&
                      !removeSelectItem)
                      ? "text-white"
                      : ""
                  }
                >
                  {item.full_name}
                </p>
              </div>
            </td>
            <td className="w-[293px] flex gap-[4px] py-[16px]">
              {item?.specialities && (
                <SpecialItem
                  specialities={item?.specialities}
                  isSelectedContractor={
                    isCheckedAll ||
                    (selectedContractor.includes(contractorIndex) &&
                      !removeSelectItem)
                  }
                />
              )}
            </td>
            <td className="w-[120px]">
              <p
                className={
                  isCheckedAll ||
                  (selectedContractor.includes(contractorIndex) &&
                    !removeSelectItem)
                    ? "text-white"
                    : ""
                }
              >
                $ {item.day_rate},00
              </p>
            </td>
            <td className="w-[120px]">
              <p
                className={
                  isCheckedAll ||
                  (selectedContractor.includes(contractorIndex) &&
                    !removeSelectItem)
                    ? "text-white"
                    : ""
                }
              >
                {item.available ? "Yes" : "No"}
              </p>
            </td>
            <td className="w-[24px]" />
          </tr>
        );
      })}
    </>
  );
};

const SpecialItem = ({
  specialities,
  isSelectedContractor,
}: {
  specialities: ISpecialties[];
  isSelectedContractor: boolean;
}) => {
  return (
    <>
      <div
        className={`px-[8px] py-[6px] rounded-[8px] ${
          isSelectedContractor ? "bg-blue200" : "bg-gray"
        }`}
      >
        <p
          className={`text-[12px] base-text leading-[16px] ${
            isSelectedContractor ? "text-white" : "text-gray600"
          }`}
        >
          {specialities[0]?.name}
        </p>
      </div>
      <div
        className={`px-[8px] py-[6px] rounded-[8px] ${
          isSelectedContractor ? "bg-blue200" : "bg-gray"
        }`}
      >
        <p
          className={`text-[12px] base-text leading-[16px] ${
            isSelectedContractor ? "text-white" : "text-gray600"
          }`}
        >
          {specialities[1]?.name}
        </p>
      </div>
      {specialities.length - 2 > 0 && (
        <div
          className={`px-[8px] py-[6px] rounded-[8px] relative group ${
            isSelectedContractor ? "bg-blue200" : "bg-gray"
          }`}
        >
          <p
            className={`text-[12px] base-text leading-[16px] ${
              isSelectedContractor ? "text-white" : "text-gray600"
            }`}
          >
            +{specialities.length - 2}
          </p>
          <div className="group-hover:visible invisible absolute w-auto top-[-40px] px-[8px] py-[6px] rounded-[8px] bg-gray">
            <div className="flex">
              {specialities.map(
                (specialItem: ISpecialties, specialItemIndex: number) => {
                  return (
                    <>
                      {specialItemIndex > 1 && (
                        <div
                          className="flex items-center"
                          key={specialItemIndex}
                        >
                          <span className="text-[12px] pr-[5px]">
                            {specialItem.name}
                            <span>
                              {specialities.length - 1 > specialItemIndex &&
                                ", "}
                            </span>
                          </span>
                        </div>
                      )}
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
