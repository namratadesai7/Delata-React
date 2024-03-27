import { useState } from "react";
export default function Form(){
    let [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:""

    })

    // let handleNameChange= (event)=>{
    //     setFUllName(event.target.value);
    // }
    
    let handleInputChange =(event) => {
        let fieldName =event.target.name;
        let newValue=event.target.value;
        
        setFormData( (currData) =>{
            //currData[fieldName]=newValue;  //computed property value
            return {...currData, [fieldName]: newValue}; //spreading and sending currData obj
        });
    }
    let handleSubmit =(event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"",
            password:""

        })
    }
    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname</label>
        <input  placeholder="Enter your name" id="fullname" type="text"  value={formData.fullName} 
        onChange={handleInputChange} name="fullName" />
       
        <br />
        <br />
        <label htmlFor="username">Username</label>
        <input  placeholder="Enter your name" id="username" type="text"  value={formData.username} 
        onChange={handleInputChange} name="username" />
        <br />
        <br />

       
        <label htmlFor="password">Password</label>
        <input  placeholder="Enter your password" id="password" type="text"  value={formData.password} 
        onChange={handleInputChange} name="password" />
        <br />
        <button>Submit</button>


    </form>)

}