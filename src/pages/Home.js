import React, { useEffect, useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Navbar from "../component/navbar/Navbar";
import SearchHistory from "../component/searchhistory/SearchHistory";
import MyChat from "../component/chat/Chat";
import Chating from "../component/chating/Chating";

const Home = () => {
  const [chatArray, setChatArray] = useState([]);
  const [prevChat,setprevChat] = useState([]);
  const [uniqueid, setuniqueid] = useState();
  useEffect(() => {
    console.log(chatArray);
  }, [chatArray]);
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Navbar />
        <div className="flex flex-col items-center   overflow-y-scroll" id="your_div">
          <div className="">
            {chatArray.length === 0 && prevChat.length===0 ? (
              <>
                {" "}
                <h1 className="text-lg font-semibold">
                  Get answers in a seconds
                </h1>
                <p className="text-sm">
                  Create and complete tasks using boards
                </p>
                <SearchHistory setChatArray={setChatArray} setprevChat={setprevChat}  uniqueid={uniqueid} setuniqueid={setuniqueid}/>
              </>
            ) : (
              <Chating chatArray={chatArray}  prevChat={prevChat}/>
            )}
          </div>
          <MyChat setChatArray={setChatArray} uniqueid={uniqueid} setuniqueid={setuniqueid} chatArray={chatArray} prevChat={prevChat}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
