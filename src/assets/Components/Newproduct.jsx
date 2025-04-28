import React from "react";
import { Grid, TextField, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";

const Newproduct = () => {
  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handelchange = (e) => {
    let { name, value } = e.target;
    let fieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
        setNewProduct({
           ...newProduct,rating:{
            ...newProduct.rating,
            [fieldName]:value
           }
            
        })
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  let paperstyle = {
    width: "400px",
    margin: "50px 400px",
    padding: "10px",
  };
 
const handelSubmit = (e)=>{
    e.preventDefault()
    fetch("http://localhost:8000/products",
    {method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(newProduct)
    }
    
    ).then(() => {
        alert("Product added successfully!");
        setNewProduct(
            {
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  }
        )
    })

}
 return (
    <Paper elevation={20} style={paperstyle}>
      <Typography variant="h5" textAlign="center">
        New Product
      </Typography>
      <Grid component="form" onSubmit={handelSubmit} style={{ display: "grid", gap: "10px" }}>
        <TextField
          value={newProduct.title}
          name="title"
          label="title"
          variant="outlined"
          fullWidth
          onChange={(e) => handelchange(e)}
        />
        <TextField
          value={newProduct.category}
          onChange={(e) => handelchange(e)}
          name="category"
          label="category"
          variant="outlined"
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.rate}
              onChange={(e) => handelchange(e)}
              name="rating.rate"
              label="rating"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.count}
              onChange={(e) => handelchange(e)}
              name="rating.count"
              label="count"
              type="number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">ADD</Button>
      </Grid>
    </Paper>
  );
};

export default Newproduct;
