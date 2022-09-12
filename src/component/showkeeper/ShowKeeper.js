import React,{useState,useEffect} from 'react'

import './ShowKeeper.css';
import axios from 'axios';
const ShowKeeper = () => {
  const [getdata,setGetData]=useState([]);
  const getData=async()=>{
    const showdata=await axios.get('https://dead-blue-alligator-vest.cyclic.app/api/gettask');
   setGetData(showdata?.data.data);
    console.log(showdata);
  }
  
useEffect(() =>{
  getData();
},[]);
const deletebtn=async(id)=>{
  const deltask=await axios.delete(`https://dead-blue-alligator-vest.cyclic.app/api/deltask/${id}`)
  if(deltask){
    getData();
  }

}

// const deletebtn=(id)=>{
//   id.preventDefault();
// alert("delete");
// }
  return (
   <>
  <div className="showkeeper">
   
   {
    getdata?.map((item)=>(
      <div className="keepercard" key={item._id} >
   <div className="headerCard">
       <h1 className="title">{item.title} </h1>
       <span><i className="deleteicon fa fa-trash" onClick={()=>deletebtn(item._id)}></i></span>
       </div>
       <textarea className="descriptionBox">{item.description}</textarea>
   </div>
    ))
   }
    
 </div>
   </>
  )
}

export default ShowKeeper