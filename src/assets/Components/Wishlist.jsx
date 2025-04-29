import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeItem } from '../store/cartSlice';

function Wishlist() { 
let cardProducts =   useSelector((state)=>{return state.cart   }  )
console.log(cardProducts);

 let dispatch = useDispatch()

let handleDelete = (reduxid)=>{
dispatch(removeItem(reduxid))
}


return (
    <div>
      <h1>Product List</h1>

      <div className="p-product-list">
<section className="Products d-flex flex-wrap gap-4 justify-content-center">
            {cardProducts.map((p) => (
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
      </div>
    </div>
  );
}

export default Wishlist