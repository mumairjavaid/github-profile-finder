import React, { useState } from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import User from './User'

const Homepage = () => {
  const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    
    console.log(data);


    const userDetails=async (input)=>{
        const api = await fetch(`https://api.github.com/search/users?q=${input}`);
        const api_data = await api.json()
        setData(api_data.items);
    }
    
 


  return (
        <>
    <div className="upper-container">

    <h1>GitHub Profile Finder</h1>
    
    <input className='search-bar' type="text" placeholder='Enter Username......' value={input} onChange={(e)=>{setInput(e.target.value)}} />
    <button className='btn' onClick={()=>userDetails(input)}>Search</button>
    </div>
    <div className="container">
        {
            data.map((curr,id)=>{
                return (
            <div className='container-item' key={id}>
            
            <img src={curr.avatar_url} alt="" />
            <div className="nested-container">
            <p>Name: {curr.login}</p>
            
            <Link to={`/user/${curr.login}`}>Profile</Link>
            
            </div>
            </div>
            
 );
            })
        } 
    </div>
    </>
  )
}

export default Homepage