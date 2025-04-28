import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Paper, Typography } from "@mui/material";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import axios from "axios";

export const Update = () => {
  const [updateProduct, setUpdateProduct] = useState(null);
  const { id } = useParams();
 let navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then(response => setUpdateProduct(response.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({ ...updateProduct, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/products/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateProduct),
    }).then(() => {
alert("Product updated successfully!");
navigate('/products')
      nav
    });
  };

  const paperStyle = {
    width: "400px",
    margin: "50px auto",
    padding: "10px",
  };

  if (!updateProduct) {
    return <h1>Loading...🌍</h1>;
  }

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign="center">
        Update Product
      </Typography>
      <Grid
        component="form"
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "10px" }}
      >
        <TextField
          value={updateProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={updateProduct.category}
          onChange={handleChange}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              value={updateProduct.rating.rate}
              onChange={handleChange}
              name="rating.rate"
              label="Rating"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={updateProduct.rating.count}
              onChange={handleChange}
              name="rating.count"
              label="Count"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="success">
          Update
        </Button>
      </Grid>
    </Paper>
  );
};
