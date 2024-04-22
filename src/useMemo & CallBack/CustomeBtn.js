import React from "react";
const CustomButton = ({handler=()=>{},title='Check'})=>{
    console.log("Button Clicked",title);
    return(
        <>
        <button onClick={handler}>{title}</button>
        </>
    )
}
export default React.memo(CustomButton)