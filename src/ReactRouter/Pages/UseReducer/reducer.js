import {useReducer} from 'react'

    const reducerFunction = (state,action)=>{

        switch(action.type){
           case 'Increment_count' :
            return {...state,count:state.count+1}
           case 'Decrement_count' :
            return {...state,count:state.count-1}
           case 'Increment_age' :
            return {...state,age:state.age+1}
           case 'Decrement_age' :
            return {...state,age:state.age-1}
            case 'Change_name' : 
            return {...state,name:'Naidu'}
            default : 
        }

    }

    const initialState = {
        name : 'swami',
        count : 1,
        age : 22,
        salary : 55000,
        sub : [1,2,3,4]
    }

const UseReducerExample = ()=>{


    const[currentValue,dispatchFunction] = useReducer(reducerFunction,initialState)

    const IncrementCount = ()=>{
        const action = {
            type : 'Increment_count'
        }
        dispatchFunction(action)
    }

    const DecrementCount = ()=>{
        const action = {
            type : 'Decrement_count'
        }
        dispatchFunction(action)
    }

    const ChangeName = ()=>{
        const action = {
            type : 'Change_name'
        }
        dispatchFunction(action)
    }

    


    return(
        <>
        <h1>{currentValue.name}</h1>
        <h1>{currentValue.count}</h1>
        <button onClick={IncrementCount}>IncrementCount</button>
        <button onClick={DecrementCount}>DecrementCount</button>
        <button onClick={ChangeName}>ChangeName</button>
        <button>DecrementAge</button>
        </>
    )
}
export default UseReducerExample