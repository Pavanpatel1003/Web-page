import './App.css';
import Chats from './Component/Chats';
import Navbar from './Component/Navbar';
import Person from './Component/person';
import { useState } from 'react';
function App() {
  const [personData, setPersonData] = useState([{
    name: 'Anish M.',
    class: 'person1'
  },
  {
    name: 'Richad S.',
    class: 'person2'
  },
  {
    name: 'Anisa N.',
    class: 'person3'
  },
  ]);

  const [chatsData, setChatsData] = useState([{
    name: 'Anish Mehata',
    desc: "It's a long established fact that a",
    time:'7:56',
    messages: 2,
    unread: true
  },
  {
    name: 'Pavan Patel',
    desc: "It's a long established fact that a",
    time:'6:23',
    messages:5,
    unread: true
  },{
    name: 'Aelis Patel',
    desc: "It's a long established fact that a",
    time:'1:32',
    messages:0,
    unread: false
  },{
    name: 'Ani Patel',
    desc: "It's a long established fact that a",
    time:'3:44',
    messages:0,
    unread: false
  },
  ,{
    name: 'Aelisa Patel',
    desc: "It's a long established fact that a",
    time:'1:32',
    messages:0
  },{
    name: 'Anil Patel',
    desc: "It's a long established fact that a",
    time:'3:44',
    messages:0,
    unread: false
  },
  ]);

  return (
    <>
      <div className='max-600'>
        <Navbar></Navbar>
        {/* <person></person> */}
        <div className=' backccolor mx-2' style={{ 'borderRadius': '5px' }}>

          <div className="row justify-content-around py-3">
            <div className='text-center widthcss'>
              <div className='round '>
                <span className='plus-icon'>
                  +
                </span>
              </div>
              <div>My Story</div>
            </div>

            {
              personData.map((per, index) => {
                return <Person per={per} key={`p${index}`} ></Person>
              })
            }
            
          </div>



        </div>
        <div className="backccolor  mx-2 my-2">
          {
            chatsData.map((chat, index)=>{
              return <Chats chat ={chat} key={`c${index}`}> </Chats>
            })
          }
           {/* <Chats unread={true}></Chats> 
           <Chats unread={true}></Chats> 
           <Chats unread={false}></Chats> 
           <Chats unread={false}></Chats> 
           <Chats unread={false}></Chats> 
           <Chats unread={false}></Chats>  */}
        </div>


      </div>
    </>
  );
}

export default App;
