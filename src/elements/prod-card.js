import "../styling/prod-card.scss";
import data from "../data";

export default function ProductCard() {
  return (
    <div className="feat-prod">
      <h1>Featured Products</h1>
      <div className="card-sec">
        {data.products.map((product) => (
          <div className="card" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="prod-info">
              <a href={`/product/${product.slug}`}>
                <h2>{product.name}</h2>
              </a>
              <p>{product.rating}</p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p>{product.countInStock} left in stock</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
