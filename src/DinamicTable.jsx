import React, { useEffect, useState } from 'react'

const DinamicTable = () => {
    const [users, setUsers] = useState([])
    const [columns, setColumns] = useState([])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                //setUsers(Object.keys(data.user[0]))
                //setUsers(Object.keys(data.user[0]))
                //setRecords(data.users)
                if (data.length > 0) {
                    setColumns(Object.keys(data[0]))
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [])

    const handleCreateUser = async (newUser) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            const data = await response.json();

            setUsers([data, ...users])

        } catch (error) { console.log(error) }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateUser({ name, email, username });
        setName('');
        setEmail('');
        setUsername('');
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Add User</button>
            </form>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                        {/* <th>ID</th>
                    <th>Name</th>
                    <th>userName</th>
                    <th>Email</th> */}

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, id) => (
                        <tr key={id}>
                            {columns.map((column, index) => (
                                <td key={index}>

                                    {typeof user[column] === "object"
                                        ? JSON.stringify(user[column])
                                        : user[column]}
                                </td>
                            ))}

                            {/* <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default DinamicTable