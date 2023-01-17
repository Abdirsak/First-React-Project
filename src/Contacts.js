import { useState } from "react";
function Contacts (){
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [message, setMessage]=useState('')
    const [email, setEmail]=useState('')
    function AddNewComment(event){
        event.preventDefault();
        CommentsList()
    }
    function CommentsList(){
        fetch("http://localhost:4900/CommentsList",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name,address,message,email})
        })
    }
    function getName(e){
        setName(e.target.value)
    }
    function getEmail(e){
        setEmail(e.target.value)
    }
    function getAddress(e){
        setAddress(e.target.value)
    }
    function getMessage(e){
        setMessage(e.target.value)
    }
    return <div className="contacts" id="Contact">
        <h3 className="sub-heading">Leave us Comment</h3>
        <h1 className="heading">Contact Us</h1>
        <form action="">
            <div className="inputBox">
                <div className="input">
                    <span>Your name</span>
                    <input type="text" placeholder="Enter your name" onChange={getName}/>
                </div>
                <div className="input">
                    <span>Your Email</span>
                    <input type="text" placeholder="Enter your Email" onChange={getEmail}/>
                </div>
            </div>

            <div className="inputBox">
                <div className="input">
                    <span>Your Address</span>
                    <textarea name="" placeholder="Enter your Address"  cols="30" rows="10" onChange={getAddress}/>
                </div>
                <div className="input">
                    <span>Your Message</span>
                    <textarea name="" placeholder="Enter your Message" cols="30" rows="10" onChange={getMessage}/>
                </div>
            </div>
            <input type='submit' value='send now' className="btn" onClick={AddNewComment}/>
        </form>
    </div>
    
}
export default Contacts