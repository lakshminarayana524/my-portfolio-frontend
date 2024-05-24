  import React,{useState,useEffect} from 'react'
  import axios from 'axios'
  import './styles/project.css'
  import AOS from 'aos';
  import 'aos/dist/aos.css'
  // import { useNavigate } from 'react-router-dom'

  const Projects = () => {
    const [details,setdetails]=useState([])
    // const  navigate=useNavigate()
    
    axios.defaults.withCredentials=true;
    useEffect(()=>{
      axios.get("https://my-prortfolio-server.onrender.com/getprojects")
          .then(req=>{
            console.log(req.data)
            setdetails(req.data.result);
          })
          .catch(err=>console.log(err))

          AOS.init({duration : 2500})
    },[])

   
    const Moveto = (url)=>{
      window.open(url,'_blank');
    }

    return (
      <div className="projects">
          <h1 className="title">Projects</h1>
         {/* <button onClick={()=>navigate('/addprojects')} style={{width:'52px'}}> Add</button> */}
          <div className='projects-container' >
          { details.map(det=>( 
              <div className='projects-card' data-aos='zoom-in-up' onClick={()=>Moveto(det.url)}>
                <div className="projects-card-int"key={det._id}>
                  {/* <span class="projects-card__span">Category</span> */}
                  <div ><img src={det.imageURL} className="img"/></div>
                  <div className="projects-card-data">
                  <div className="description-container">
                    <p className="title">{det.name}</p>
                    <p className='project-des'>{det.details}</p>
                  </div>
                  <div className="button-container">
                    <button className="projects-button" onClick={()=>Moveto(det.url)}>More info</button>
                  </div>
                </div>

                </div>
              </div>
        
        ))}
        </div>
      </div>
    )
  }

  export default Projects
