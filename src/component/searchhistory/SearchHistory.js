import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { Button } from '@mui/material'
import ChatButton from './ChatButton'

import { collection, addDoc, getDocs, set ,updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { setCurrentScreen } from 'firebase/analytics';





const SearchHistory = ({setChatArray ,setprevChat,uniqueid,setuniqueid}) => {


  const [todos,setTodos] = useState([]);
  useEffect(()=>{

    const fetchPost = async () => {
       
      await getDocs(collection(db, "todos"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setTodos(newData);                
              console.log(todos, newData);
          })
     
  }
 fetchPost()


  },[])


const deleteallhistory  = () =>{

  {

    todos.forEach((obj)=>{
      
      
      const docRef = doc(db, "todos", obj.id);
      deleteDoc(docRef) .then(() => { console.log("Entire Document has been deleted successfully.");
      setTodos([])
     }) 

    })
  }



}

const oldChat = (obj) =>{
  setuniqueid(obj.id);

    
  setprevChat(Object.entries(obj))

}
  return (
    <div className='w-[800px] border-[1px] border-solid border-b-gray-200 p-[15px] mt-[20px] rounded'>
      <h2 className='font-semibold'>Search History</h2>

      {todos.length>0&&todos.map((obj)=>{
         
        return(
          <div className='flex justify-between my-5'>
          <Heading   data={obj}/>
        <div onClick={()=>oldChat(obj)}>
        <ChatButton />
        </div>
          </div>

        )


      })




      }

  
      
  
      

        <div className='flex justify-center border-t-[1px] border-t-gray-200 pt-4 mb-1 mt-8'>
        <button onClick={deleteallhistory} className='border-[1px] bg-[#EDEDED] rounded-3xl text-[#737679] h-fit px-[10px] py-[3px]'>
       Clear Chat History
    </button>
        </div>

        </div>
  )
}

export default SearchHistory