import React from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';

function Product() {
    let params = useParams();
    let id = parseInt(params.productId);

    return (
        <ProductContext.Consumer>
            {
                function({ getProduct }) {
                    let product = getProduct(id);
                    return (
                        <>
                            {
                                product ?
                                (
                                    <Card style={{ width: '32 rem' }}>
                                        <Card.Img variant='top' src={product.imgUrl} />
                                        <Card.Body>
                                            <Card.Title>{product.itemName}</Card.Title>
                                            <Card.Text>
                                                {product.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                                :
                                (<p>Product not found.</p>)
                            }
                        </>
                    )
                }
            }
        </ProductContext.Consumer>
    )
}

export default Product;