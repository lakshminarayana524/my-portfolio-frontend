import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './styles/addprojects.css';

const Addprojects = () => {
    const [name, setname] = useState('');
    const [details, setdetails] = useState('');
    const [url, seturl] = useState('');
    const [img, setimg] = useState('');
    const [send,setsend]=useState(false);
    const navigate=useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const file = new FormData();
        file.append("image", img);
        file.append("name", name);
        file.append("details", details);
        file.append("url", url);
        axios.post('http://localhost:3001/addprojects', file)
            .then(res => {
                if (res.data.message === "Project added successfully") {
                    setsend(true);
                    console.log(res.data.message);
                    
                    // No need to call toast here, it will be handled in useEffect
                }
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        // This effect will run when the name, details, url, or img state changes
        if (send) {
            // If any of the state values are not empty, show the toast
            toast.success('Project added successfully');
            setsend(false);
            setTimeout(() => {
                navigate('/projects')
            }, 5000);
        }
    }, [send]); // This effect depends on the values of name, details, url, and img

    return (
        <div className='add-project'>
            <h1>Add a new project</h1>
            <div className="input-container">
                <input type="text" id="input" name="name" onChange={e => setname(e.target.value)} required="" />
                <label htmlFor="input" className="label">Name</label>
                <div className="underline"></div>
            </div>
            <div className="input-container">
                <input type="text" id="input" name="details" onChange={e => setdetails(e.target.value)} required="" />
                <label htmlFor="input" className="label">Description</label>
                <div className="underline"></div>
            </div>
            <div className="input-container">
                <input type="text" id="input" name="url" onChange={e => seturl(e.target.value)} required="" />
                <label htmlFor="input" className="label">Link</label>
                <div className="underline"></div>
            </div>
            <div className="input-container">
                <input type="file" id="input" name="image" onChange={e => setimg(e.target.files[0])} required="" />
                <div className="underline"></div>
            </div>
            <input type="submit" onClick={onSubmit} />
            <ToastContainer />
        </div>
    );
};

export default Addprojects;
