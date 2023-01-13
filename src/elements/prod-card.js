import { Link } from "react-router-dom";
import "../styling/prod-card.scss";
import data from "../data";

export default function ProductCard() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="card-sec">
        {data.products.map((product) => (
          <div className="card" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="prod-info">
              <Link to={`/product/${product.slug}`}>
                <h2>{product.name}</h2>
              </Link>
              <p>{product.rating}</p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p>{product.countInStock} left in stock</p>
              <button>
                <strong>Add to Cart</strong>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
