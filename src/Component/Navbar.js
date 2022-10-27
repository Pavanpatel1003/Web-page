import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex'>
        //         <div className="" href="#">Chats</div>
        //         {/* <i className="fa fa-ellipsis-v" style={{color:'white'}} aria-hidden="true"></i> */}
        //         <div style={{float:'right'}}>hello</div>
        //     </div>

        // </nav>

        <nav className="navbar navbar-light bg-light justify-content-between navcss my-2 mx-2" style={{'borderRadius':'5px'}}>
            <a >Chats</a>
            <form className="form-inline">
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

                <div className='menu'></div>
            </form>
        </nav>

    )
}

export default Navbar
