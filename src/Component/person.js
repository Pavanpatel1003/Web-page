import React from 'react';
import './person.css';

const Person = (props) => {
    const imageStyle = `round ${props.per.class}`;
    return (
        <>
        {
            console.log(JSON.stringify(props))
        }

            <div className='text-center widthcss'>
                <div  className='round person4'></div>
                <div>{props.per.name}</div>
            </div>

        </>

    )
}

export default Person
