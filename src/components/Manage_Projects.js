import React,{useState,useEffect} from "react";
import './styles/project.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import Check from './../../../../myapp/src/UseRef/userref';

const Manageproject=()=>{
    const [edit,setedit]=useState('');
    const [details,setdetails]=useState([])
    const [Checkdelete,setdelete] =useState();
    const sendto=useNavigate(false);
    
    axios.defaults.withCredentials=true; 
    useEffect(()=>{
      axios.get("https://my-prortfolio-server.onrender.com/getprojects")
          .then(req=>{
            console.log(req.data)
            setdetails(req.data.result);
          })
          .catch(err=>console.log(err))
    },[])
    
    useEffect(()=>{
      if(Checkdelete)
      axios.get("http://localhost:3001/getprojects")
          .then(req=>{
            console.log(req.data)
            setdetails(req.data.result);
            setdelete(false)
          })
          .catch(err=>console.log(err))
    },[Checkdelete])

   

    const handleDelete = (id, imageURL) => {
      // if (window.confirm('Are you sure to delete this project?')) { 
          axios.delete(`http://localhost:3001/deleteProject/${id}`, {
              data: { imageURL: imageURL }
          })
          .then((res) => {
              // window.alert(res.data.msg);
              window.location.reload();
              setdetails(details.filter(project => project._id !== id));
              setdelete(true);
          })
          .catch(err => console.log(err))
      // }
  }
  
    


    return (
        <div className="projects">
          <h1 className="title">Manage Projects</h1>
          <div className='projects-container' style={{marginBottom:'5px'}} >
            { details.map(det=>( 
                <div className='projects-card' key={det._id}> 
                  <div className="projects-card-int">
                    {/* <span class="projects-card__span">Category</span> */}
                    <div ><img src={det.imageURL} className="img"/></div>
                    <div className="projects-card-data">
                      <p className="title">{det.name}</p>
                      <p>{det.details}</p>
                      <button className="button"><a href={det.url}>More info</a></button>
                      <div style={{display: 'flex', justifyContent:'center',padding:'0px 15px 0px 16px', margin:'0px 16px 0px 13px'}}>
                      {/* <button style={{ width: '60px', justifyContent: 'flex-start' , margin:'5px 30px 0px 12px' }} onClick={()=>handleEdit(det._id)}>Edit</button> */}
                          <button style={{ width: '65px' }} onClick={()=>handleDelete(det._id,det.imageURL)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
          
            ))}
          </div>
        </div>
    )

}

export default Manageproject;