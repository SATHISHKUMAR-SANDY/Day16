import Home from "./assets/Components/Home";
import TodoApp from "./assets/Components/TodoApp";
import Login from "./assets/Components/Login";
import Products from "./assets/Components/Products";
import SignUp from "./assets/components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./assets/Components/ProductDetails";
import ProductList from "./assets/Components/ProductList";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./assets/Components/NavBar";
import NotFound from "./assets/Components/NotFound";
import Newproduct from "./assets/Components/Newproduct";
import { Update } from "./assets/Components/Update";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="*" element={<NotFound></NotFound>} ></Route>
          <Route path="/newProduct" element={<Newproduct></Newproduct>} ></Route>
          <Route path="/update/:id" element={<Update></Update>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
