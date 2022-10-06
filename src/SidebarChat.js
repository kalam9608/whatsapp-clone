import { Avatar } from '@mui/material'
import React, { useEffect ,useState} from 'react'
import "./sidebarChat.css"

const SidebarChat = ({addNewChat}) => {

    const [name, setName] = useState();

    // console.log(!addNewChat)


    useEffect(() => {

        let n=Math.floor(Math.random()*100);

        setName(n)
  
    }, []);

    let createChat=()=>{
      let name=prompt();
      if(name){
        console.log(name)
      }
    };
    
  return !addNewChat?(
    <div className='sidebarchat'>
{/* <Avatar src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"/> */}
    <Avatar src={`https://avatars.dicebear.com/api/male/${name}.svg`}/>
    <div className="sidevar_chatInfo">
        <h4>Name</h4>
        <p>last seen....</p>
    </div>

  

    </div>
  ):(<div onClick={createChat} className="sidebarchat">
    <h2>Add new Chat</h2>
  </div>);
}

export default SidebarChat
