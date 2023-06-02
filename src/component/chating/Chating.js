import React, { useEffect, useState } from "react";
import img from "../../assets/images/icon2.jpg";
import img2 from "../../assets/images/Ellipse 47.svg";
import { useScrollTrigger } from "@mui/material";
import "./chating.css"
const Chating = ({ chatArray ,prevChat }) => {
  const [xarray, setxarray] = useState([]);
  useEffect(() => {
    // console.log(chatArray);
    setxarray(chatArray);
     type();
  }, [chatArray]);
  console.log("chatarry::", chatArray)

 
  let text = 'What follows is Lorem ipsum translated to English: But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences...';
  let textLength = 0;
  const  type =()=> {
  
  
    if(chatArray.length>0)
    {
      let textChar = chatArray[chatArray.length-1].answer.charAt(textLength++);
      let paragraph = document.getElementById(chatArray.length-1);
      let charElement = document.createTextNode(textChar);
  
      paragraph.appendChild(charElement);
      if(textLength < chatArray[chatArray.length-1].answer.length+1) {
          setTimeout(() => {
            type()
          }, 10);
          
      } else {
          if(textLength>3)
          {  var element = document.getElementById(chatArray.length-1);
            element.classList.remove("typed");
          }
      
        
          var objDiv = document.getElementById("your_div");
          objDiv.scrollTop = objDiv.scrollHeight;
        chatArray[chatArray.length-1].answer = '';
      }
    }else{


    }
    
  }
  

  console.log(prevChat)



  return (
    <div className="w-[70vw] h-[75vh] ">
      {prevChat.filter((obj)=>obj[0]!="id").map((obj, i) => {
        
        return (
          <div >
            <div className="flex justify-end my-5 ">
              <h2 className="bg-[#EDEDED] p-3 rounded-md flex items-center gap-x-3 font-semibold">
                {obj[0]} <img src={img2} className="h-[25px]" />
              </h2>
            </div>

            <div className="border border-gray-200 rounded-md ">
              <div className="flex justify-between p-4 items-center">
                <img src={img} className="h-[35px]" />
                <div>
                  <span class="material-symbols-outlined mr-3">thumb_up</span>
                  <span class="material-symbols-outlined">thumb_down</span>
                </div>
              </div>
              <div className="px-5 pb-1">
                <pre className="inline-table w-full  whitespace-break-spaces"  >
                {obj[1]}
                </pre>
                {/* <p>{obj?.answer}</p> */}
              </div>
            </div>
          </div>
        );
      })}


      



      {chatArray.map((obj, i) => {
        console.log("obj::>", obj)
        return (
          <div key={i}>
            <div className="flex justify-end my-5 ">
              <h2 className="bg-[#EDEDED] p-3 rounded-md flex items-center gap-x-3 font-semibold">
                {obj.question} <img src={img2} className="h-[25px]" />
              </h2>
            </div>

            <div className="border border-gray-200 rounded-md ">
              <div className="flex justify-between p-4 items-center">
                <img src={img} className="h-[35px]" />
                <div>
                  <span class="material-symbols-outlined mr-3">thumb_up</span>
                  <span class="material-symbols-outlined">thumb_down</span>
                </div>
              </div>
              <div className="px-5 pb-1">
                <pre className="inline-table w-full typed whitespace-break-spaces" id={i} >
                </pre>
                {/* <p>{obj?.answer}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chating;
