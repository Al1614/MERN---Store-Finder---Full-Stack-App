import React, {useState} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

const StoreForm = (props) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [open, setOpen] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/store', {
            name,
            number,
            open
        })
            .then(res=>{
                console.log(res);
                setName("")
                setNumber("")
                setOpen("")
                navigate("/");

            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Navbar />
            <h3>Add a new store!</h3>
            <form className="form-row" onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="form-group">
                    <label> Store Name: </label><br/>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} name="name" value={name}/>
                    { errors.name ? 
                        <p className=".text-danger">{errors.name.message}</p>
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
                <input className="btn btn-primary" type="submit" value="Add a new store"/>
            </form>
        </div>
    )
}
export default StoreForm;