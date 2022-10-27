import React from 'react';
import './chats.css';

const Chats = (props) => {
    return (
        <div className='  '>
            <div className="row py-3">
                <div className="col-sm-2  ">
                    <div className='round person1 mx-2' ></div>

                </div>
                <div className="col-sm-8">
                    <p className='name-title'>{props.chat.name}</p>
                    <p className='desc'>{props.chat.desc} </p>
                </div>
                <div className="col-sm-2">
                  <div>
                  <div>{props.chat.time}</div>
                    {props.chat.unread && <div className='round1'>{props.chat.messages}</div>}
                  </div>
                </div>
            </div>

            <div className="row line mx-4">

            </div>
        </div>
    )
}

export default Chats
