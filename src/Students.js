import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Students() {
    const [lists, setLists] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios.get('https://62abf213bd0e5d29af17cac7.mockapi.io/Student').
            then((response) => {
                setLists(response.data);
                setUsers(response.data);
            })
    };
    const onDelete = (id) => {
        axios.delete(`https://62abf213bd0e5d29af17cac7.mockapi.io/Student/${id}`).
            then(() => {
                getData();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your data has been deleted successfully',
                    showConfirmButton: false,
                    timer: 3000,
                });
            })
    }
    const onSearch = (e) => {
        let keysearch = e.target.value;
        let datasearch = users.filter((item) => {
            return item.fullname.toLowerCase().includes(keysearch.toLowerCase());
        });
        setLists(datasearch);
    }
    return (
        <div className="container">
            <h2 className="text-primary">Students List</h2>
            <div className="py-3">
                <input className="px-3 py-2" placeholder="Search for students..." onChange={(e) => {onSearch(e)}} />
            </div>
            <table className="py-3 table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MSV</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td scope="row">{item.id}</td>
                                    <td>{item.msv}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.classname}</td>
                                    <td>
                                        <Link to={`/editstudent/${item.id}`} className="btn btn-primary" style={({ color: 'azure' })}>Edit</Link>
                                        <a className="btn btn-danger" style={({ color: 'azure' })} onClick={() => onDelete(item.id)}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/addstudent" ><p className="btn btn-success">Add a new student</p></Link>
        </div>
    );
}

export default Students;