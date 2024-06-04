import {useEffect,useState, useRef} from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
import './dashboard.scss'

const Dashboard = () => {



 

  
  return (
    <div>
       <header>
        <nav>
          <h2>Dashboard</h2>
          <div className='search_bar'>
            <IoIosSearch />
          <input type='text' placeholder=' search'>
          </input>
          </div>
          <div className='headerIcons'>
         <p> <IoMdMail style={{color: 'black'}} size={20} /></p>
         <p className='notificationP'> <IoIosNotifications style={{color: 'black'}} size={20}/></p>
          </div>
          <div className='userImage-container'>
            <div className='userImage'>
              {/* admin profile picture will be rendered here  */}
            </div>
          <div className='userText'>
            <h1> PappyBoyisa</h1>
            <p> Admin </p>
          </div>
          
          </div>

        </nav>
      </header>
      <div className='FirstDiv-container'>
        <div className='studentDiv'>
          <p>Students</p> <br/>
          <p className='studentNumber'> 1200</p>
          <a href='#' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
        <div className='teachersDiv'>
          <p>Teachers</p> <br/>
          <p className='teachersNumber'> 224</p>
          <a href='#' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
        <div className='parentsDiv'>
          <p>Parents</p> <br/>
          <p className='parentsNumber'> 224</p>
        <a href='#' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>
        <div className='earningsDiv'>
          <p>Earnings</p> <br/>
          <p className='earningsNumber'> 224</p>
          <a href='./Piechart.js' target='blank'><div className='arrowIcon'><PiArrowCircleUpRightFill /> </div></a>
        </div>

      </div>
    

     
    </div>
  )
}

export default Dashboard