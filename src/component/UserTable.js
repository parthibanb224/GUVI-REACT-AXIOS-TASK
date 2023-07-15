import React from 'react'

export default function UserTable({ data }) {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.website}</td>
        </tr>
    )
}
