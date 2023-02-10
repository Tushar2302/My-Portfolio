import "./form.css";
import emailjs from 'emailjs-com';
import React from 'react'

const Form = () => {
 
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_su6m73p','template_f0l7ahs',e.target,'PGK6It7Z4YepJpQiS').
    then(res=>{
      console.log(res);
      console.log("Sent Successfully")
    }).catch(res=>console.log(Error));
    e.target.reset()
  }
  return (
    <div className="form">
        <form  onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="name"  required></input>
            <label>Email</label>
            <input type="email" name="user_email"  required></input>
            <label>Subject</label>
            <input type="text"  required></input>
            <label>Message</label>
            <textarea name="message"  placeholder="Type your message here" required></textarea>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
