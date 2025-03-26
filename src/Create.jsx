import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [values, setValues] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://fakestoreapi.com/products`, values)
        .then(res =>{
            console.log(res);
            navigate("/")
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'> 
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a user</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='name'>Title:</label>
                    <input type='text' name='title' className='form-control' placeholder='Enter a Title'
                    onChange={e => setValues({...values, title: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='number'>Price:</label>
                    <input type='number' name='price' className='form-control' placeholder='Enter a price'
                    onChange={e => setValues({...values, price: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='description'>Description:</label>
                    <input type='text' name='description' className='form-control' placeholder='Enter description'
                    onChange={e => setValues({...values, description: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='category'>Category:</label>
                    <input type='text' name='category' className='form-control' placeholder='Enter category'
                    onChange={e => setValues({...values, category: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='image'>Image:</label>
                    <input type='url' name='image' className='form-control' placeholder='Enter image'
                    onChange={e => setValues({...values, image: e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className='btn btn-primary ms-3'>Back</Link>

            </form>
        </div>
    </div>
  )
}

export default Create