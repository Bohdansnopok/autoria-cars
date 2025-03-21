import Image from "next/image"
import logo from "../../public/Logo.png"
import search from "../../public/search-normal.svg"
import filter from "../../public/filter.svg"
import heart from "../../public/heart.svg"
import notification from "../../public/notification.svg"
import settings from "../../public/setting.svg"
import avatar from "../../public/avatar.svg"

export default function Header() {
  return (
    <header className="py-10 bg-white border-b border-[#C3D4E9]">
      <div className="flex items-center custom-container">
        <div className="flex items-center w-full">
          <Image src={logo} alt="" />

          <div className="flex items-center relative ml-16 w-[500px]">
            <Image src={search} alt="" className="absolute left-[22px]" />
            <input type="text" placeholder="Search something here"
              className="w-full
            py-3 pr-5 pl-16
            rounded-[70px] 
            border border-[#C3D4E9]
            placeholder:text-[#596780]
            focus:outline-none focus:border-[#596800] "/>
            <Image src={filter} alt="" className="absolute right-[20px]" />
          </div>

          <div className="ml-auto flex items-center gap-[30px]">
            <div className="border border-[#C3D4E9] p-3 rounded-full"><Image src={heart} alt=""/></div>
            <div className="relative border border-[#C3D4E9] p-3 rounded-full z-10">
              <span className="block w-[11px] h-[11px] rounded-full absolute bottom-[35px] left-[35px] z-50 bg-[#FF4423]"></span>
              <Image src={notification} alt="" />
            </div>
            <div className="border border-[#C3D4E9] p-3 rounded-full"><Image src={settings} alt=""/></div>
            <Image src={avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}