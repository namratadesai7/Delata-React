import {useState} from "react";

export default function Counter(){
   //let [stateVariable, setStateVariable]= useState(0);
   let [count,setCount]= useState(0);
   console.log("component is rendered");
   console.log(`count= ${count}`);
   let incCount=()=>{
    setCount(count+1);
    console.log(count);
   };

    //the below function does not increase the count variable value in the component
    // let count =0;

    // function inCount(){
    //     count +=1;
    //     console.log(count);
    // }
    return (
        <div>
            
            {/* <h3>Count={count}</h3>
            <button onClick={inCount}>Increase Count</button> */}
            <h3>Count={count} </h3>
            <button onClick={incCount} >Increase Count</button>
        </div>
    )
}