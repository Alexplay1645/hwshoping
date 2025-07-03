import { useParams } from "react-router-dom";
import { products } from './products';
import './ProductDetails.css';

export function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
