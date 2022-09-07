import {FETCH_TASK_REQUEST} from './taskType'
import {FETCH_TASK_SUCCESS} from './taskType'
import {FETCH_TASK_FAILURE} from './taskType'
import {ADD_TASK} from './taskType'

const initialState = {
    loading: false,
    tasks: [],
    error: ''
}


const taskReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_TASK_REQUEST:  
            return {
               loading:true,
               ...state,
            }
        case FETCH_TASK_SUCCESS:  
            return {
                loading: false,
                tasks: action.payload,
                error:'',
            }
        case FETCH_TASK_FAILURE:  
            return {
                loading: false,
                tasks: [],
                error: "Something went wrong"
            }
        case ADD_TASK:  
        return {
            loading: false,
            tasks: [...state.tasks, action.payload],
            error: ''
        }
        default: return state
     
    }

}

export default taskReducer