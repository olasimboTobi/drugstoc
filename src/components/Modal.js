import React,{useState} from 'react'
import styles from './Modal.module.css'
import {RiCloseLine} from "react-icons/ri"


function Modal({setIsOpen}) {
  const [formData, setFormData] = useState({
    job:"",
    kind:"",
    price:"",
    delivery: "",
    img:"",
    name:"",
    status:""
  })

  const handleChange = (event)=>{
        const {name,value} = event.target
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: "value"
          }
        })
  }
  return (
    <>
       <div className={styles.darkBG} onClick={setIsOpen} />
       <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add Task</h5>
          </div>
          <button className={styles.closeBtn} onClick={setIsOpen}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <p>Are you sure you want to add this Task ?</p>
            <form>
              <div>
                <label htmlFor="job">Job</label>
                <input id="job" value={formData.job} type="text" name="job" className="job" onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="kind">What is the type(kind) of tasks ? </label>
                <br/>
                <select 
                  id="kind"
                  value={formData.kind}
                  onChange={handleChange}
                  name="kind"
                  className="kind"
                >
                  <option value="">--Choose--</option>
                  <option value="custom task">Custom task</option>
                  <option value="Markting & Sales">Markting & Sales</option>
                  <option value="integrations">Integrations</option>
                  <option value="deployment">Deployment</option>
                  <option value="testing">Testing</option>
                </select>
              </div>

              <br/>
              <div>
                <label htmlFor="price">Price</label>
                <input id="price" type="text" value={formData.price} name="price" className="price" onChange={handleChange}/>
              </div>

              <div>
                <label htmlFor="delivery">Delivery</label>
                <input id="delivery" type="text" value={formData.delivery} name="delivery" className="delivery" onChange={handleChange}/>
              </div>

              <br/>
              <div>
                <label htmlFor="img">Image</label>
                <input id="img" value={formData.img} type="file" name="img" className="img" onChange={handleChange}/>
              </div>

              <br/>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={formData.price} name="name" className="name" onChange={handleChange}/>
              </div>
              
              <br/>
              <div>
                <label htmlFor="status">What is the the status of the tasks? </label>
                <br/>
                <select 
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  name="status"
                  className="status"
                >
                  <option value="">--Choose--</option>
                  <option value="verify">Verify</option>
                  <option value="in progress">In Progress</option>
                  <option value="in review">In review</option>
                  <option value="waiting approval">Waiting Approval</option>
                  
                </select>
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button  type="submit" className={styles.saveBtn} onClick={setIsOpen}>
                    Save
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={setIsOpen}
                  >
                    Cancel
                  </button>
                </div>
              </div> 

            </form>
          </div>
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={setIsOpen}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={setIsOpen}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Modal;