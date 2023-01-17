import axios from "axios";
import { Link } from "react-router-dom";
import "../styling/prod-card.scss";
import logger from "use-reducer-logger"; // tracks the action.type
import React, { useEffect, useReducer } from "react";
import Rating from "./ratings";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true }; //makes a new state and keeps the values.
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false }; //action.payload holds all the data from the products json from backend - makes a new state and keeps the values as the previous state - only update the action.
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

//useReducer takes in 2 params - 1. the reducer const in line 7 and 2. the initial state for the actions (where needed).

export default function ProductCard() {
  //to use useReducer you need two params - 1. an object that lists the actions (loading, error, products) and 2. dispatch - to call and action and update the state.
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: "",
    products: [],
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    //fetchData is an async function
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      //after dispatching the action type - need to do a try catch for error handling.
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data }); // if the axios.get is successful, then dispatch the success action from reducer.
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="card-sec">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <Card key={product["slug"]}>
              <Link to={`/product/${product["slug"]}`}>
                <img src={product["image"]} alt={product["name"]} />
              </Link>
              <Card.Body>
                <div className="prod-info">
                  <Link to={`/product/${product["slug"]}`}>
                    <Card.Title>{product["name"]}</Card.Title>
                  </Link>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                  <Card.Text>
                    ${product["price"]}
                  </Card.Text>
                  <Button  variant="primary">
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
