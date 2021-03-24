import './App.css';
import React, { useEffect, useState } from "react";

function App() {

 const [id , setId]= useState(); 
 const [data, setData] = useState();
 const [status, setStatus] = useState(false);

 const inputHandler = (evt)=>{
//console.log(evt.target.value);
const temp = evt.target.value;
 setId(temp);
 }

 const submitHandler=()=>{
   setStatus(true);
 }
 
 const getApi = () => {
  fetch("https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=eG2WdJM0Hh4pFGjuomI696i4tnVmf25hi9gd59XO")
    .then((res) => res.json())
    .then((obj) => {
      setData(obj);
    });
};

 useEffect(()=>{
  console.log("2000433")
  getApi();

 },[setStatus]);

  return (
    <div className="App">
        {!setStatus ?
    ( 
      <>
      <label>  name </label> <p>{data.name}</p>
   
      <label>  nasa_jpl_url</label>

      <label>  is_potentially_hazardous_asteroid </label> 
      
      </>
    ) :
      (  
      <>
      <input type='text' placeholder="Enter Asteroid ID" onChange={inputHandler}></input> 
     <button id='mybtn' type='submit' onClick={submitHandler}>Submit</button>
     <button id='mybtn' type='button' >RandomAteroid</button> 
     </>
      )}
    
    </div>
  );
}

export default App;
