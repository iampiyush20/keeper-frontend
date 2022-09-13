import React,{useState,useEffect} from 'react' 
import './AddKeeper.css';
import axios from 'axios';

const AddKeeper = () => {


const [getdata,setGetData]=useState([]);

  const [keeperObj,setKeeperObj]=useState({
    title:"",
    description:""
  })
 
  // console.log(keeperObj.title);
  const add = async() => {
   
   const addData=await axios.post('https://dead-blue-alligator-vest.cyclic.app/api/task',keeperObj)
  try{
console.log(addData.data.data);
// alert("created");
getData();
  }catch(e){
    console.log(e);
  }
  }
 
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

  return (
   <>
 <div className="addkeeper">
  <input type="text"
   className="inputBox titleInput" 
  //  autoComplete="off"
    name="title"
     placeholder="add title" 
     onChange={(e)=>setKeeperObj({...keeperObj,title:e.target.value})}
      value={keeperObj.title}
       />

<textarea className="inputBox description" 
name="description"
placeholder="add description here" 
onChange={(e)=>setKeeperObj({...keeperObj,description:e.target.value})}
value={keeperObj.description}

/>
<div className="addButton" onClick={add}>add</div>
 </div>
 
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

export default AddKeeper