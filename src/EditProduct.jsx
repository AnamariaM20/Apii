import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";

const EditProduct = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setProduct(product)
        console.log("Product saved", product);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Product: {product.title}</h1>
            <img src={product.image} alt={product.title} width={200} />
            
            <label>Price</label>
            <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
            />

            <label>Category</label>
            <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
            />

            <label>Description</label>
            <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleChange}
            />

            <button onClick={handleSave}>SAVE CHANGES</button>
        </div>
    );
};

export default EditProduct;
