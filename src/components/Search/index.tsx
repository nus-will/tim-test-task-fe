import searchLight from "../../assets/images/search-light.svg";
import filterItem from "../../assets/images/filter-icon.svg";
import { useCallback } from "react";

interface SearchProps {
  inputValue: (n: string) => void;
}

export default function Search({ inputValue }: SearchProps) {
  const handleSearch = useCallback(
    (e: any) => {
      if (e.key === "Enter") {
        inputValue(e.target.value);
      }
      if (e.target.value === "") inputValue("");
    },
    [inputValue]
  );

  return (
    <div className="flex gap-[16px] w-full my-[24px] px-[24px]">
      <div className="flex px-[12px] rounded-[8px] py-[14px] w-full bg-light-gray200 gap-[8px]">
        <img src={searchLight} alt="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-light-gray200 w-full color-gray400"
          onKeyUp={(e) => {
            handleSearch(e);
          }}
        />
      </div>

      <div className="flex w-[118px] px-[24px] py-[12px] bg-light-gray200 justify-center items-center gap-[12px] cursor-pointer hover:bg-gray200 rounded-[8px]">
        <p className="font-medium text-light-gray100 base-text">Filters</p>
        <img src={filterItem} alt="filter-icon" />
      </div>
    </div>
  );
}
