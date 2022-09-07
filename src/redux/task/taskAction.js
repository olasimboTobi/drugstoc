import {FETCH_TASK_REQUEST} from './taskType'
import {FETCH_TASK_SUCCESS} from './taskType'
import {FETCH_TASK_FAILURE} from './taskType'
import {ADD_TASK} from './taskType'
import {db} from '../../firebase'
// import {  toast } from 'react-toastify'


const fetchTaskRequest = ()=> {
    return {
        type: FETCH_TASK_REQUEST
    }
}

const fetchSuccess = task => {
    return {
        type: FETCH_TASK_SUCCESS,
        payload: task
    }
}

const fetchFail = error => {
    return {
        type: FETCH_TASK_FAILURE,
        payload: error
    }
}

const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}



export const fetchTasks = () => {
    return (dispatch) => {
        // dispatch(fetchTaskRequest)
        // axios.get('https://jsonplaceholder.typicode.com/task')
        //     .then(response => {
        //        const tasks = response.data
        //        dispatch(fetchSuccess(task))
        //     })
        //     .catch(error=> {
        //         const errorMsg = error.message
        //         dispatch(fetchFail(errorMsg))
        //     })
        dispatch(fetchTaskRequest)
        try{
            db.collection('tasks').onSnapshot(snapshot=> {
                const tasks = snapshot.docs.map(doc => doc.data())
                console.log(tasks)
                dispatch(fetchSuccess(tasks))
                
            })
        }

        catch {
            const errorMsg = "Something went wrong"
            dispatch(fetchFail(errorMsg))
            
        }

        // .catch(error=> {
        //             const errorMsg = "Something went wrong"
        //             dispatch(fetchFail(errorMsg))
        //         })
        
        dispatch(fetchFail)

    }
}

export const addingTask = (taskData) => {
    return (dispatch) => {
        // dispatch(fetchTaskRequest)
        // axios.get('https://jsonplaceholder.typicode.com/task')
        //     .then(response => {
        //        const tasks = response.data
        //        dispatch(fetchSuccess(task))
        //     })
        //     .catch(error=> {
        //         const errorMsg = error.message
        //         dispatch(fetchFail(errorMsg))
        //     })
        dispatch(fetchTaskRequest)
        try{
            db.collection('tasks').add(
                taskData => dispatch(
                    addTask(taskData)
                )
            )

        }

        catch {
            const errorMsg = "Something went wrong"
            dispatch(fetchFail(errorMsg))
        }

        // .catch(error=> {
        //             const errorMsg = "Something went wrong"
        //             dispatch(fetchFail(errorMsg))
        //         })
        
        dispatch(fetchFail)

    }
}