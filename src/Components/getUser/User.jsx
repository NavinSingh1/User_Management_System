import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './user.css';
import toast from 'react-hot-toast';

const User = () => {

    const [user, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/api/getall");
            setUsers(response.data);
        }
        fetchData();
    }, [])

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/delete/${userId}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
            toast.success(response.data.msg, { position: 'top-right' });
        } catch (error) {
            console.log("Error deleting user:", error);
        }
    };

    return (
        <div className="userTable">
            <Link to={"/add"} className='addButton'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.fname} {user.lname}</td>
                                    <td>{user.email}</td>
                                    <td className='actionButtons'>
                                        <button onClick={() => deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                        <Link to={`/edit/` + user._id}><i className="fas fa-pen-square"></i></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User