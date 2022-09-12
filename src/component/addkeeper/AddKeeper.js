import React,{useState,useEffect} from 'react' 
import './AddKeeper.css';
import axios from 'axios';
const AddKeeper = () => {
  const [keeperObj,setKeeperObj]=useState({
    title:"",
    description:""
  })
 
  // console.log(keeperObj.title);
  const add = async() => {
   
   const addData=await axios.post('https://dead-blue-alligator-vest.cyclic.app/api/task',keeperObj)
  try{
console.log(addData.data.data);
alert("created");

  }catch(e){
    console.log(e);
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
   </>
  )
}

export default AddKeeper