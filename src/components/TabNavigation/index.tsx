import { ITabs } from "../../types/ITabs";
import { Tabs } from "../../utils/constants";
import useTabNavigation from "./hooks";

export default function TabNavigation() {
  const { onSelectTab, selectedTab } = useTabNavigation();

  return (
    <div className="flex justify-start items-center px-[32px]  gap-[24px] border-b-2 border-gray100">
      {Tabs.map((item: ITabs, index) => {
        return (
          <div
            key={index}
            className={`cursor-pointer py-[10px] relative`}
            onClick={() => {
              onSelectTab(index, item.tabName);
            }}
          >
            <p
              className={`base-text ease-out duration-200 ${
                selectedTab === index ? "text-gray700 " : "text-gray400"
              } hover:text-gray700`}
            >
              {item.tabName}
            </p>
            <div
              className={`absolute w-full h-[2px] bottom-[-2px]${
                selectedTab === index ? " border-b-2 border-black" : ""
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
