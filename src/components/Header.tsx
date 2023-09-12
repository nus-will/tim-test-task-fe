import logo from "../assets/images/logo.svg";
import userLogo from "../assets/images/user.svg";
import chevronSelector from "../assets/images/chevron-selector-vertical.svg";

export default function Header() {
  return (
    <div className="flex justify-between px-[32px] py-[16px] items-center border-b-2 border-gray100">
      <div className="flex gap-[16px] items-center">
        <a href="/">
          <img src={logo} alt="logo" className="w-[24px] h-[24px]" />
        </a>
        <div className="h-[40px] w-[2px] bg-gray100"></div>
        <div className="flex items-center gap-[8px]">
          <img src={userLogo} alt="user-logo" className="w-[24px] h-[24px]" />

          <div className="flex cursor-pointer gap-[8px] hover:bg-gray200 rounded-[8px] p-[12px] hover:box-shadow ease-in-out duration-300">
            <p className="text-gray700 base-text"></p>
            Teqqed
            <img src={chevronSelector} alt="chevron-selector-vertical" />
          </div>
        </div>
      </div>

      <img src={userLogo} alt="user-logo" className="w-[32px] h-[32px]" />
    </div>
  );
}
