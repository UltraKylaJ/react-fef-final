import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [ products, setProducts ] = useState([]);
    const baseUrl = "http://localhost:3001/products";

    useEffect(() => {
        async function fetchData() {
            await getProducts();
        }
        fetchData()
    }, []);

    function getProducts() {
        return axios.get(baseUrl).then(response => setProducts(response.data));
    }

    function getProduct(id) {
        return products.find(p => p.id === id);
    }

    function addProduct(product) {
        return axios.post(baseUrl, product).then(response => {
            getProducts();
            return new Promise(resolve => resolve(response.data));
        })
    }

    function editProduct(product) {
        let url = baseUrl + product.id
        return axios.put(url, product).then(response => {
            getProducts();
            return new Promise(resolve => resolve(response.data));
        })
    }
    
    function deleteProduct(id) {
        let url = baseUrl + id
        return axios.delete(url).then(() => getProducts());
    }

    return (
        <ProductContext.Provider value={{
            products,
            getProduct,
            addProduct,
            editProduct,
            deleteProduct
        }}>
            { props.children }
        </ProductContext.Provider>
    )
}