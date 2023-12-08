import React, { useState } from 'react'
import "./Contact.css"
import axios from "axios"
function Contact() {
  const [email,setEmail]=useState("")
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")
  const sendemail=async()=>{
    const res=await axios.post('/product/sendemail',{email,subject,message})
    .then(res=>alert(res.data.msg))
  }
  return (
    <div>

<div className="container">
  <div className="row">
    <h1>contact us</h1>
  </div>
  <div className="row">
    <h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
  </div>
  <div className="row input-container">
    <div className="col-xs-12">
      <div className="styled-input wide">
        <input onChange={(e)=>setSubject(e.target.value)} type="text" required="" />
        <label>subject</label>
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="styled-input">
        <input  onChange={(e)=>setEmail(e.target.value)} type="text" required="" />
        <label>Email</label>
      </div>
    </div>
    
    <div className="col-xs-12">
      <div className="styled-input wide">
        <textarea  onChange={(e)=>setMessage(e.target.value)} required="" defaultValue={""} />
        <label>Message</label>
      </div>
    </div>
    <div className="col-xs-12">
      <div onClick={sendemail}className="btn-lrg submit-btn">Send Message</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact