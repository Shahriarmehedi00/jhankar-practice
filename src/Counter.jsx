import { useState } from "react"

export default function Counter(){
    const [counter,setCounter] = useState(0);

    const addCount =()=>{
        const newCount = counter+1;
        setCounter(newCount);
    }

    const removeCount = ()=>{
        const newCount = counter-1;
        setCounter(newCount);
    }
    




    return(

        <div style={{border:'2px solid yellow'}}>
            <h1>Counter:{counter}</h1>
            <button onClick={addCount}>add count</button>
            <button onClick={removeCount}>remove Count</button>
        </div>



    )
}