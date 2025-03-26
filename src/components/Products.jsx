import { useEffect, useState } from "react"
import "./products.css"

const Products = () => {

    const [prod, seProd] = useState([])
    const newProd = {
        "id": 21,
        "title": "csgdgg",
        "price": 0.1,
        "description": "csgdgg",
        "category": "csgdgg",
        "image": "http://example.com"
    }


    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newProd)
        })
            .then((res) => res.json())
            .then((prod) => seProd(prod))
    }, [])



    // const [result, setResult]= useState([])
    // useEffect(() =>{
    //     async function getProducts() {
    //         const response = await fetch(URL);
    //         const data= await response.json()
    //         setResult(data)
    //     }
    //     getProducts()
    // }.[])
    return (
        <div className="products">
            <ul>
                {prod.map((post) => (
                    <li key={post.id}> <span>title: {post.title}</span> <span>Price: {post.price} </span><span>Description: {post.description}</span>
                        <span>title: {post.category}</span> </li>
                ))}
            </ul>
        </div>

    )
}

export default Products