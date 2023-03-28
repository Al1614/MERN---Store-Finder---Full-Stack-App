import React, {useState, useEffect}  from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import Navbar from "./Navbar";

const EditStore = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [open, setOpen] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then(res => {
                setName(res.data.name);
                setNumber(res.data.number);
                setOpen(res.data.open);
            })
    }, [id])

    const formValidator = () => {
        let isValid = true;
        if(name.length < 3){
            return false
        }
        if(number.length < 0){
            return false
        }
        return isValid
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formValidator()){
        axios.put(`http://localhost:8000/api/store/${id}` ,{
            name,
            number,
            open
        })
            .then(res=>{
                console.log(res);
                setName("")
                setNumber("")
                setOpen("")
                navigate("/");})
            .catch (err => console.log(err))
        }
        else{
            setErrors({
                name: "Name must be at least 3 characters long",
                number: "Number must be at least 1 character long"
            })
        }
    }

    return (
        <div>
            <Navbar />
            <h3>Edit a store!</h3>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="form-group">
                    <label> Store Name: </label><br/>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} name="name" value={name}/>
                    { errors.name ? 
                        <p className=".text-danger">{errors.name}</p>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label> Store Number: </label><br/>
                    <input type="number" className="form-control" onChange={(e)=>setNumber(e.target.value)} name="number" value={number}/>
                    { errors.number ? 
                        <p className=".text-danger">{errors.number.message}</p>
                        : null
                    }
                </div>
                <div>
                <p>Open? <input className="form-check-input" type="checkbox" onChange={(e) => setOpen(e.target.value)} value="Open" name="open"/></p> 
                </div>
                <input className="btn btn-primary" type="submit" value="Edit store details"/>
            </form>
        </div>
    )
}
export default EditStore;