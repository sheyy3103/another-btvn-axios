import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddStudent() {
    const [control,setControl] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://62abf213bd0e5d29af17cac7.mockapi.io/Student',control).
            then((response) => {
                if(response.data){
                    Swal.fire({
                        position:'center',
                        icon: 'success',
                        title: 'Your data has been added successfully',
                        showConfirmButton: false,
                        timer: 3000,
                    })
                    navigate('/')
                }
            })
    };
    const inputChange = (e) => {
        setControl(control => ({...control, [e.target.name]: e.target.value}));
    };


    return ( 
        <div className="container">
            <h3 className="text-primary">Add Student</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="number" name="msv" className="w-[350px] shadow apppearance-none border-2 rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:border-purple-500 forcus:shadow-outline" placeholder="Enter MSV..." onChange={inputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="fullname" className="w-[350px] shadow apppearance-none border-2 rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:border-purple-500 forcus:shadow-outline" placeholder="Enter name..." onChange={inputChange} />
                </div>
                <div className="form-group">
                    <input type="string" name="classname" className="w-[350px] shadow apppearance-none border-2 rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:border-purple-500 forcus:shadow-outline" placeholder="Enter class..." onChange={inputChange} />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
     );
}

export default AddStudent;