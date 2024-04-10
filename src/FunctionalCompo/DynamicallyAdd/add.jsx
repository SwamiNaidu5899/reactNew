import {useRef} from 'react'

const AddDynamically = ()=>{

    const textRef = useRef('')

    const addData = (e)=>{
        e.preventDefault()
        const inputText = textRef.current.value;
        alert(inputText)
    }

    return(
        <div className="divMain">
        
        <form onSubmit={addData}>
            <input type="text" name="" id="" placeholder='add' ref={textRef}/>
        </form>

        </div>
    )
}
export default AddDynamically