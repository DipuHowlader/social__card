import React from 'react'
import './SearchBar.css'




export default function SearchBar({alluser,setUser}) {

    const filterName = (event,alluser,setUser) =>{
        const value =( event.target.value).toLowerCase();
        const filter = alluser.filter((user) =>(`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)))
        setUser(filter)
    }

    return (
        <div>
            <input onChange = {(event) => filterName(event,alluser,setUser) } type="text" placeholder='search perosn name ...' />
        </div>
    )
}
