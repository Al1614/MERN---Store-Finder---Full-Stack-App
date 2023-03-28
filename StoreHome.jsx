import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";


const StoreHome = (props) => {
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/store/")
            .then(res => {console.log(res.data);
                setStores(res.data);})
            .catch((err) => console.log(err))
            
    }, [])

    const deleteStore = (id) => {
        axios.delete("http://localhost:8000/api/store/" + id)
            .then(res => {
                console.log(res);
                const filteredStores = stores.filter(store => store._id !== id);
                setStores(filteredStores);
            });
    }
    return (
        <div>
            <h1>Store Finder </h1>
            <h3>Find stores in your area!</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <th>Store</th>
                    <th>Store Number</th>
                    <th>Open?</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {stores.map((store, index) => {
                        return (
                            <tr key={index}>
                                <td onClick={()=> navigate(`/store/${store._id}`)}><u>{store.name}</u></td>
                                <td>{store.number}</td>
                                <td>{store.open}</td>
                                <td><button className="btn btn-danger" onClick={(e)=>deleteStore(store._id)}>Delete</button></td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
            <button className=""><Link to={"/store/create"}>Can't find your store?</Link></button>
        </div>
    )
}
export default StoreHome;