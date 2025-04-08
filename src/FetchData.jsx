import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const getData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlePost = async (e) => {
        e.preventDefault(); // ✅ previne reload
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // ✅ corect
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1
                })
            });
            const newPost = await response.json();
            console.log("New post:", newPost);

            setData([newPost, ...data]);
            setTitle('');
            setBody('');
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };
    // const handleEdit = async () => {
    //     try {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {

    //         })
    //     } catch () { }


    // }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <form>
                <h4>New Post</h4>
                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <textarea
                    placeholder='Body'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <br />
                <button onClick={handlePost}>Send Post</button>
            </form>

            <h2>Postări existente</h2>
            {data.length > 0 ? (
                data.map((curVal) => (
                    <>
                        <div key={curVal.id}>
                            <p>ID: {curVal.id}</p>
                            <h3>{curVal.title}</h3>
                            <p>{curVal.body}</p>
                        </div>
                        <button >Change</button>
                    </>

                ))
            ) : (
                <p>Data not found</p>
            )}
        </div>
    );
};

export default FetchData;
