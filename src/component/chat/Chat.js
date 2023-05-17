import { BorderColor } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import CustomTextfield from "../customtextfield/CustomTextfield";

const MyChat = () => {
  return (
    <div className="mt-6 w-[800px] fixed bottom-7 flex flex-col justify-end">
      {/* Chat Suggestions
    <div className="flex justify-between items-center mt-4 ">
      <div className="flex gap-x-3 ">
        <Button variant="outlined" sx={{borderColor:"#DBDBDB"}}   color="inherit" size="small">
          Write Js code for it
        </Button>
        <Button variant="outlined" sx={{borderColor:"#DBDBDB"}} color="inherit" size="small">
          Explain more
        </Button>
        <Button variant="outlined" sx={{borderColor:"#DBDBDB"}} color="inherit" size="small">
          Explain more
        </Button>
        <Button variant="outlined" sx={{borderColor:"#DBDBDB"}} color="inherit" size="small">
          Explain more
        </Button>
        </div>
        <span class="material-symbols-outlined">cancel</span>
     
      </div> */}

        <div>
            <CustomTextfield/>
            
        </div>

    </div>
  );
};

export default MyChat;
