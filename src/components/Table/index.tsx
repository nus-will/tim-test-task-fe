import {
  IContractor,
  IContractors,
  ISpecialties,
} from "../../types/IContractor";
import Search from "../Search";
import useTable from "./hooks";
import sortIcon from "../../assets/images/sort-icon.svg";

interface Props {
  tableData: IContractor[];
  searchData: (n: string) => void;
  isLoading: boolean;
}

export default function Table({ tableData, searchData, isLoading }: Props) {
  return (
    <div className="box-shadow flex flex-col max-w-[63.194vw]  h-full w-full">
      <Search inputValue={(e) => searchData(e)} />

      <div className="flex w-full overflow-scroll">
        <table className="table-auto mb-[24px] px-[24px] min-w-[768px] w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="h-[60px]">
              <th className="w-[24px]" />
              <th
                data-priority="1"
                className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]"
              >
                <div className="flex items-center gap-[8px] cursor-pointer">
                  <input type="checkbox" className="w-[15px] h-[15px]" />
                  <div className="flex">
                    <p>FULL NAME</p>
                    <img src={sortIcon} alt="sort-icon" />
                  </div>
                </div>
              </th>
              <th className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]">
                <div className="flex cursor-pointer">
                  <p>Specialities</p>
                  <img src={sortIcon} alt="sort-icon" />
                </div>
              </th>
              <th className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]">
                <div className="flex cursor-pointer">
                  <p>Day rate</p>
                  <img src={sortIcon} alt="sort-icon" />
                </div>
              </th>
              <th
                data-priority="4"
                className="text-light-gray300 text-[12px] font-normal leading-[1.34em] text-left py-[12px]"
              >
                <div className="flex cursor-pointer">
                  <p>Availability</p>
                  <img src={sortIcon} alt="sort-icon" />
                </div>
              </th>
              <th className="w-[24px]" />
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <>
                <td className="w-[24px]" />
                <td>
                  <div className="flex items-center gap-[16px]">
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
              </>
            ) : (
              <TableBody contractors={tableData} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableBody = ({ contractors }: IContractors) => {
  const {
    handleSelectedContractor,
    selectedContractor,
    handleCheckedContractor,
  } = useTable();

  return (
    <>
      {contractors?.map((item: IContractor, contractorIndex: number) => {
        return (
          <tr
            className={`h-[60px] cursor-pointer ease-in-out duration-300 ${
              selectedContractor.includes(contractorIndex) && "bg-blue100"
            } ${
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
                    selectedContractor.includes(contractorIndex) ? true : false
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
                    selectedContractor.includes(contractorIndex)
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
                  isSelectedContractor={selectedContractor.includes(
                    contractorIndex
                  )}
                />
              )}
            </td>
            <td className="w-[120px]">
              <p
                className={
                  selectedContractor.includes(contractorIndex)
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
                  selectedContractor.includes(contractorIndex)
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
          {specialities[0].name}
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
          {specialities[1].name}
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
          +{specialities.length}
        </p>
      </div>
    </>
  );
};
