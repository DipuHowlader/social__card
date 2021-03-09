
import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";
import SearchBar from './SearchBar'


function App() {

  const [user, setUser] = useState([])
  const [alluser, allsetUser] = useState([])

  useEffect(() =>{

    let peapol;
    (async () =>{
      try {
        const response = await fetch ('https://randomuser.me/api/?results=12')
        const data = await response.json()
        peapol = data

      } catch (error) {
        console.log(error);
        peapol = []
      }
      setUser(peapol.results)
      allsetUser(peapol.results)

    })();
  },[])

  return(
    <div className="app">

      <SearchBar alluser = {alluser} setUser ={setUser} />
      <SocialCard  userData = {user} key={1} />

    </div>
  )
}


export default App;
