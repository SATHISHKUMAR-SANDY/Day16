import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import Swal from "sweetalert2";
import {addItem}from "../store/cartSlice";
import { useDispatch } from "react-redux";


const ProductList = () => {
  let { product, err, loading, setProduct } = useFetch("http://localhost:8000/products");
  let navigate = useNavigate();


const dispatch = useDispatch()
const addcartItems = (Product)=>{
dispatch(addItem(Product))
}

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8000/products/${id}`).then(() => {
          let newProduct = product.filter(p => p.id !== id);
          setProduct(newProduct);
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        });
      }
    });
  };

  return (
    <div>
      <h1>Product List</h1>

      <div className="p-product-list">
        {loading && <h1 className="text-center">Loading... 🌍</h1>}
        {err && <h2 className="text-danger text-center">{err}</h2>}

        {!loading && !err && (
          <section className="Products d-flex flex-wrap gap-4 justify-content-center">
            {product.map((p) => (
              <Card key={p.id} style={{ width: "18rem" }}>
                <center>
                  <Card.Img
                    variant="top"
                    src={p.image}
                    style={{ width: "6rem", height: "12rem" }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>${p.price}</Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button variant="primary" onClick={()=>addcartItems(p)} >Add to Cart</Button>
                  <Button variant="secondary" onClick={() => navigate(`/update/${p.id}`)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(p.id)}>Delete</Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductList;
