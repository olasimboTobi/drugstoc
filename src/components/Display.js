import "./Display.css"
import Task from "./Task"
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
// import ChatIcon from '@material-ui/icons/Chat';

function Display() {
  return (
    <div className="display">
      <div className="display--header">
        <div className="header--content">
          <div className="active--task">Active Tasks(2)</div>
          <div className="completed--task">Completed(1)</div>
          <div className="archived--task">Archived(6)</div>
          <div className="closed">closed(0)</div>
        </div>
        <div className="page-nav">
          <div className="next--text">Next</div>
          <div className="pipe--page">|</div>
          <div className="prev--text">Prev</div>
        </div>
      </div>

      <br/>
      <div className="current--tasks">
        <p className="current--text">CURRENT <span  className="current--cirle">.</span></p>
        <Task 
          className="task task--current" 
          job="sweep the h" 
          kind="custom" 
          price="500.00"
          delivery="2days"
          img=""
          name="tobi"
          status="verify"
        /> 
      </div> 
      
      <br/>
      <div className="next--tasks">
        <p className="next--txt">NEXT</p>
        <Task className="task task--next" 
            job="sweep the h" 
            kind="custom" 
            price="500.00"
            delivery="2days"
            img=""
            name="tobi"
            status="verify"
        
        />
      </div> 
    </div>
  )
}

export default Display;