import React, { useState } from "react";
import './Navbar.css'

import { Icon } from "@iconify/react";

export default function Navbar({showbox,setShowbox,showbox2,setShowbox2,showbox3,setShowbox3 }) {

  const [sidebar, setsidebar] = useState(false);

  const clickthetoogle = () => {
    setsidebar(!sidebar);
  };

    const showbox1 = ()=>{
      setShowbox(!showbox);
    }

    const showboxe2 = ()=>{
      setShowbox2(!showbox2);
    }

    const showboxe3 = ()=>{
      setShowbox3(!showbox3);
    }

  return (
    <>
      <div className="maindiv">
        
        <div className="logo">
          <h2>Oyster</h2>
        </div>

        <div className={`uflex ${sidebar ? "uflex" : "newuflex"}`}>
          <ul >
            <li onClick={showbox1} >
              Product
              {showbox ? <><Icon icon="uil:angle-up" /></>:<><Icon icon="uil:angle-down" /></>}
            </li>
            <li>
              Country Coverage
            </li>
            <li>
              Pricing
            </li>
            <li onClick={showboxe2}>
              About Oyster
              {showbox2 ? <><Icon icon="uil:angle-up" /></>:<><Icon icon="uil:angle-down" /></>}
            </li>
            <li onClick={showboxe3}>
              Resources
              {showbox3 ? <><Icon icon="uil:angle-up" /></>:<><Icon icon="uil:angle-down" /></>}
            </li>
            <li>
              Login
            </li>
          </ul>


          <div id="navbarbtndiv">
            <button className="navbarbtn">Speak to an Expert</button>
            <button className="navbarloginbtn">Sign</button>
          </div>

        </div>



        <div onClick={clickthetoogle} id="menubar">
          <Icon icon="material-symbols:menu" />
        </div>

      </div>
    </>
  )
}
