import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const StoreDetail = (props) => {
    const {id} = useParams();
    const [oneStore, setOneStore] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then(res => {
                console.log(res);
                setOneStore(res.data);})
            .catch((err) => console.log(err))
            
    }, [id])


    return (
        <div className="text-left">
            <Navbar />
            
            <h2>Store Name: {oneStore.name}</h2>
            <h3>Store Number: {oneStore.number}</h3>
            <h3>{oneStore.open}</h3>
            <button className="btn btn-primary" onClick={() => navigate(`/store/edit/${id}`)}> Edit Store Details</button>
        </div>
    )
}
export default StoreDetail;