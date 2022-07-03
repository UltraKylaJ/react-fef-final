import React from "react";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { Card, ListGroup } from "react-bootstrap";

function ProductList(props) {
  function productList(products) {
    if (products === null) return
    return products.map((product) =>
      <Card key={product.id} className="w-75" >
        <Card.Img src={`${product.imageUrl}`}/>
        <Card.Title>{product.itemName}</Card.Title>
        <Card.Subtitle>${product.price}</Card.Subtitle>
        <Link to={`/products/${product.id}`} key={product.id} >
          More Info!
        </Link>
    </Card>
    )
  }

  return (
    <>
      <h1>Products</h1>
      <Stack direction="horizontal" gap={3}>
          <ProductContext.Consumer>
            {({products}) => (
              productList(products)
            )}
          </ProductContext.Consumer>
        <Outlet />
      </Stack>
    </>
  )
}

export default ProductList