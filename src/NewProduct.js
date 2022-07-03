import React, { useContext, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';

function NewProduct() {
    let params = useParams()
    let [ product, setNewProduct ] = useState({
        id: params.productId,
        itemName: "",
        price: 0,
        description: "",
        medium: "",
        imageUrl: ""
    });

    let { getProduct, addProduct, editProduct } = useContext(ProductContext);
    let navigate = useNavigate();
    let { id, itemName, price, description, medium, imageUrl } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getProduct(id).then((product) => setNewProduct(product))
        }
        fetch()
    }, [id, getProduct])

    function handleChange(event) {
        setNewProduct((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function addOrEdit() {
        if (id === undefined) {
            return addProduct(product)
        } else {
            return editProduct(product)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        addOrEdit().then((product) => {
            navigate(`/products/${product.id}`);
        })
    }

    return (
        <Form onSubmit={handleSubmit} style={{ width: "400px", margin: "20px auto" }}>
            <Form.Group className='mb-3' >
                <Form.Label>Item Name</Form.Label>
                <Form.Control type='text' name='itemName' value={itemName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className='mb-3' >
                <Form.Label>Price</Form.Label>
                <Form.Control type='number' name='price' value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group className='mb-3' >
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' name='description' value={description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className='mb-3' >
                <Form.Label>Medium</Form.Label>
                <Form.Control type='text' name='medium' value={medium} onChange={handleChange} />
            </Form.Group>
            <Form.Group className='mb-3' >
                <Form.Label>imageUrl</Form.Label>
                <Form.Control type='text' name='imageUrl' value={imageUrl} onChange={handleChange} />
            </Form.Group>
            <Button type='submit'>Save</Button>
        </Form>
    )
}
export default NewProduct