import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://my-prortfolio-server.onrender.com/pro_edit/${id}`)
        .then(res => {
            console.log(res);
            setData(res.data);
        })
        .catch(err => console.log(err));
    }, [id]); // Add id as dependency to trigger useEffect when id changes

    return (
        <div>
            <img src={data.imageURL} alt={data.name} />
            <input type="text" value={data.name || ""} readOnly />
            <input type='url' value={data.url || ""} readOnly />
        </div>
    );
};

export default Edit;
