import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then(res =>setData(res.data))
        .catch(err => console.log(err))
    }, [])
    const navigate = useNavigate();
    const deleteFunction = (productToDelete) => {
        const deleteProduct = data.filter(product => product !== productToDelete);
        setData(deleteProduct);
    };
    const handleEdit = (id) => {
        navigate(`/update/${id}`);
      };
    
  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'></div>
        <h1>List of products</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className="d-flex justify-content-end">
                <Link to="/create" className="btn btn-success">Add + </Link></div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Imagine</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product, id) => (
                            <tr key={id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.image}</td>
                                <td>

                                


                                    <button className="btn btn-sm btn-info me-2">Read</button>
                                    <button className="btn btn-sm btn-primary me-2"
                                    onClick={() => handleEdit(product.id)} >Edit</button>
                                    <button className="btn btn-sm btn-danger"
                                    onClick={() => deleteFunction(product)}>Delete</button>
                                </td>
                            
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
   
   
    </div>
  )
}

export default Home