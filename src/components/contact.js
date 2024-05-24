import React, { useEffect, useState } from 'react'
import './styles/contact.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {
  const  [name, setName] = useState('');
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState(''); 
  const [toasts,settoast]=useState();
  const changeto=useNavigate();

  axios.defaults.withCredentials=true;
  const onSubmit= async(e)=>{
    e.preventDefault();
    if(name !=='' && email!=='' && msg!== ''){
     await axios.post("https://my-prortfolio-server.onrender.com/contact",{name,email,msg})
        .then(res=>{
          if(res.data.message==="Mail Sent Successfully" ){
            settoast(true)
            // toast.success('Mail Sent');
            // setName('');
            // setEmail('');
            // setMsg('');
            // setTimeout(() => {
            //   changeto('/')
            // },3000);
          }
            console.log(res)
          })
        .catch(err=>console.log(err))
    }else{
      toast.error("please fill all the details")
    }
  }

  useEffect(()=>{
    AOS.init();
  },[])
  
  useEffect(()=>{
    if(toasts){
      toast.success("Mail sent");
      setName('');
      setEmail('');
      setMsg('');
      settoast(false);
      setTimeout(() => {
        changeto('/')
      }, 3000);
  }
  },[toasts]);
  
  return (
    <div className='contact-container' data-aos='zoom-in-up'>
      <h1>Contact Me</h1>
      <div className='contact-content'>
          <form className='contact-form'>
          <div className="contact-input-wrapper">
            <input className="contact-input-box" type="text" placeholder="Name" value={name}  onChange={(e)=>{setName(e.target.value)}} required/>
            <span className="underline"></span>
          </div>
          <div className="contact-input-wrapper">
            <input className="contact-input-box" type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <span className="underline"></span>
          </div>
          <div className="contact-input-wrapper">
            <textarea className="contact-input-box" type="text" placeholder="Message" value={msg} onChange={(e)=>{setMsg(e.target.value)}} required/>
            <span className="underline"></span>
          </div>
          <input style={{marginBottom:'45px'}} className='input-submit' type="submit" onClick={onSubmit}/>
          </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
