import React from 'react'
import "./Task.css";
import {Avatar} from '@material-ui/core'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ChatIcon from '@material-ui/icons/Chat';
// import CircleIcon from '@material-ui/icons/Circle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Task({job, kind, price, delivery, img, name, status}) {
  return (
    <div className="task">
      <div className="icon1--cirle">
        <div className="icon1">{<LibraryBooksIcon/>}<span className="circle--small--low">.</span></div>
        
      </div>

      <div className="job--kind">
        <div className="job">{job}</div>
        <div className="kind">{kind}</div>
      </div> 

      <div className="price--delivery">
        <div className="price--txt">
           <div className="price">#{price}</div>
           <p className="price--tag">Task Price</p>
          </div>
        <div className="delivery"><span className="delivery--description">Delivery : </span>{delivery}</div>
      </div>

      <div className="avatar--img">
        <Avatar src={img} className="avatar" alt={name}/>
        <div className="name--text">
          <h4 className="name">{name}</h4>
          <p className="assignee">Assigned to</p>
        </div>
      </div>

      <div className="status--circle">
        <div className="circle--big">.</div>
        <div className="status">{status}</div>
      </div> 

      <div className="icon2--circle">
        <div className="icon2">{<ChatIcon/>}<span className="circle--small--up ">.</span> </div>
             
      </div> 
       

      {/* optional */}
      {/* <div className="dot">...</div>  */}

      <div className="crud">
        <div className="delete"><DeleteIcon/></div>
        <div className="edit"><EditIcon/></div>
      </div>

  </div>
  )
}

export default Task; 



// <Task 
//           className="task task--current" 
//           Icon1={LibraryBooksIcon} 
//           job="" 
//           kind="" 
//           price=""
//           delivery=""
//           img=""
//           name=""
//           status=""
//           Icon2={ChatIcon}
//         />
//       </div>