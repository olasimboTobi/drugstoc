import React from 'react'
// import { useNavigate} from 'react-router-dom';
import './Header.css'
import styles from './Header.css'
// import AddModal from "./AddModal"


function Header({toggle}) {
  // const navigate = useNavigate()
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
        <div className="logo">
          <div className="logo--drug">Drug</div>
          <div className="logo--stoc">Stoc</div>
        </div>
        {/* <div className="add--task "  onClick={navigate('/addTask')}>Add a new task + </div> */}
        {/* <div className={`add--task ${styles.primaryBtn}`}  onClick={() => setIsOpen(true)}>Add a new task + </div> */}
        <div className={`add--task ${styles.primaryBtn}`}  onClick={toggle}>Add a new task + </div>
        {/* {isOpen && <AddModal setOpen={setIsOpen}/>} */}
    </div>
  )
}

export default Header;