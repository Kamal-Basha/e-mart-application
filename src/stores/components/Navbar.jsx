

import React from "react";
import { Link } from "react-router-dom";

const Navbar =() => {
     return (
        <>
        <div className="navSection">
            <div className="title">
                <h2>E-Mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="user">
                <div className="user-details">
                    SignIn/SignUp
                </div>
                <div className="cart">
                    Cart
                </div>
                
            </div>
            
        </div>
        <div className="subMenu">
            <ul>
               <Link to='/mobiles'>
                   <li>Mobiles</li>
               </Link>

                <Link to='/AcPage'>
                    <li>Ac</li>
                </Link>

                <Link to='/Bookspage'>
                    <li>Books</li>
                </Link>
                
                <Link to='/FridgePage'>
                    <li>Fridge</li>
                </Link>

                <Link to='/ComputerPage'>
                   <li>Computers</li>
                </Link>

                <Link to='/FurniturePage'>
                    <li>furniture</li>
                </Link>

                <Link to='/KitchenPage'>
                 <li>Kitchen</li>
                </Link>

                <Link to='/MenPage'>
                    <li>Men</li>
                </Link>

                <Link to='/SpeakerPage'>
                     <li>Speaker</li>
                </Link>

                <Link to='/WatchPage'>
                    <li>Watch</li>
                </Link>

                <Link to='/WomenPage'>
                   <li>Women</li>
                </Link>                         
                        
            </ul>
        </div>
        </>
     )
}

export default Navbar