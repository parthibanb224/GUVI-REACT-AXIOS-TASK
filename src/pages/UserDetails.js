import React, { useEffect, useState } from 'react'
import UserTable from '../component/UserTable'
import Table from 'react-bootstrap/Table';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import { TiPlus } from "react-icons/ti";

export default function UserDetails() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios.get("/mocks/users.json")
            .then(response => setUser(response.data))
            .catch(err => console.log("Axios get Error ::", err))
    }, [])

    function addNewUser(data) {
        setUser([...user, { ...data }])
    }

    function saveData() {
        Axios.post("https://jsonplaceholder.typicode.com/users",
            {
                id: 11,
                name: "Parthiban",
                username: "parthi",
                email: "parthi@gmail.com",
                phone: 9232432522,
                website: "www.google.com",
            })
            .then(response => addNewUser(response.data))
            .catch(err => console.log("Axios Post Error ::", err))
    }

    return (
        <div>
            <div className='mt-5 d-flex justify-content-between'>
                <h3>User Details</h3>
                <Button onClick={saveData} className='button' size='sm' variant="primary"><TiPlus /> Add New</Button>{' '}
            </div>
            <Table className='mt-3' striped bordered hover size='xl'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <UserTable key={i} data={item} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}
