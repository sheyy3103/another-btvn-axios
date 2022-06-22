import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditStudent = () => {
    const {id} = useParams();
    const [control,setControl] = useState({
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://62abf213bd0e5d29af17cac7.mockapi.io/Student/${id}`,control).
        then(() => { 
            Swal.fire({
                position:'center',
                icon: 'success',
                title: 'Your data has been updated successfully',
                showConfirmButton: false,
                timer: 3000,
            });
            navigate('/')
        });
            
    };

    useEffect(() => {
        axios.get(`https://62abf213bd0e5d29af17cac7.mockapi.io/Student/${id}`).
        then((response)=>{
            setControl(response.data);
        })
    },[id]);
    const inputChange = (e) => {
        setControl(control => ({...control, [e.target.name]: e.target.value}));
    };
    return ( 
        <div className="container">
            <h3 className="text-primary">Add Student</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="number" name="msv" value={control.msv} className="w-[350px] shadow apppearance-none border-2 rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:border-purple-500 forcus:shadow-outline" placeholder="Enter MSV..." onChange={inputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="fullname" value={control.fullname} className="w-[350px] shadow apppearance-none border-2 rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:border-purple-500 forcus:shadow-outline" placeholder="Enter name..." onChange={inputChange} />
                </div>
                <div className="form-group">
                    <input type="string" name="classname" value={control.classname} className="w-[350px] shadow apppearance-none border-2 rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:border-purple-500 forcus:shadow-outline" placeholder="Enter class..." onChange={inputChange} />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
     );
}

export default EditStudent