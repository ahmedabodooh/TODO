import React,{useState, useEffect} from "react";
 function Counterf() {
     const [count , setCount] = useState (0) ;
     useEffect(()=>{
        document.title = `you clicked ${count} times`
     })
     return (
        <div>
            <p>You Click 
                {count} times
            </p>
            <button onClick={() => setCount(count + 1)}>
                Click meeeee
            </button>
        </div>
     )
 }
export default Counterf ;