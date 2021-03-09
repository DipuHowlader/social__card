import React from 'react'
import './Information.css'

export default function Information({email,phone,cell,adress}) {

    const {city,country,state} = adress
    return (
        <div>
            <div className="email__adress">
                <label >Email :</label>
                <span className="email">{email}</span>
            </div>

            <div className="Phone">
                <label >Phone :</label>
                <span className="email">{phone}</span>

                <label className='cell'>Cell :</label>
                <span className="email">+{cell}</span>
            </div>

            <div className="address">
                <label >adress :</label>
                <span className="email">{city}, {state} {country},`</span>
            </div>
            
        </div>
    )
}
