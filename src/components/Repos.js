import React,{useEffect,useState }  from 'react'



const Repos = (props) => {
        // const params=useParams();
        const [user, setUser] = useState([]);
        const userRepos=async (i)=>{
        const user = await fetch(`https://api.github.com/users/${props.username}/repos`);
        const user_data = await user.json();
        setUser(user_data);
        // console.log(user_data);/
    }
      
    useEffect(() => {
      userRepos();
    }, [])

if(user.length === 0){
    return (
        <div>Loading...</div>
    );
}

  return (
    <>
        <h2>Repositries</h2>
        {user.map((element,id)=>{
            return(
                <>
                <div className="repos">

                <a className='repo-link' href={element.html_url} key={id} target="__blank">{element.name}</a><br/>
                </div>
                </>
            )

        })}
    </>
  )
}

export default Repos