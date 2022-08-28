import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import Loading from "./components/Loading";
import Listusers from './components/Listusers';

function App() {
  const [users, setUsers]=useState([])
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")

  .then((rest)=> {
   setUsers(rest.data);
 })
 .catch(errors => {
  console.error(errors);
});
 
  },[]);
  return (
    <div className="App">
    
       {users ?  <Listusers/> : <Loading/>}

    </div>
  );
}

export default App;
