import React, { useEffect,useState } from 'react'
import { useParams} from 'react-router-dom'
import Repos from './Repos';


const User = () => {
  const params =useParams();
  const [user, setUser] = useState(null);
     const individualUser=async (i)=>{
      const user = await fetch(`https://api.github.com/users/${params.userId}`);
      const user_data = await user.json();
      const {login}=user_data;
      const {public_repos,avatar_url,html_url}=user_data;
      const userDetails={login,public_repos,avatar_url,html_url}
      setUser(userDetails);
      // console.log(user);
  }
    
  useEffect(() => {
    individualUser();
  }, [])
  
  if(!user){
    return (
      <div>Loading...</div>
    );
  }
  
  return (
    <>
      
      <div className="container">
      <img src={user.avatar_url} alt="" />

      <button className='btn'><a href={user.html_url} target='__blank' style={{textDecoration:'none'}}>Profile</a></button>
      <h1>
      Name: {user.login}</h1>
      <h1>Repositories:{user.public_repos}</h1>
      </div>
      
      <Repos username={user.login}/>
    </>
  )
}

export default User