import React from "react";
import navigationConfig from "../../config/navigationConfig";
import Icon from "@mui/material/Icon";
import img from "../../assets/images/icon.png"
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  
  return (
    <div className="w-[20vw] bg-[#F9F9F9] h-[100vh] border-r-[1px] border-solid border-r-gray-200 ">
      <div className="px-5  text-lg font-bold flex items-center gap-x-3 justify-center">
      {/* <span class="material-symbols-outlined">hive</span> */}
      <img src={img} className="w-[50%]"  />

    
      </div>

      {navigationConfig.map((obj) => {
        return (
          <div onClick={()=>window.location.reload()} className="mx-[10px] hover:bg-[#EDEDED] rounded h-[45px] my-1 flex items-center gap-x-[10px] px-[15px] py-[3px]">
            <span class="material-symbols-outlined">{obj.icon}</span>
            {obj.title}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
