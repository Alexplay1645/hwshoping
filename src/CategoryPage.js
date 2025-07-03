import { useParams, Link } from "react-router-dom";
import { products } from './products';
import './Home.css';

export function CategoryPage() {
    const { categoryName } = useParams();
    const filtered = products.filter(p => p.category === categoryName);

    return (
        <div>
            <h1>Категория: {categoryName.toUpperCase()}</h1>
            <div className="product-list">
                {filtered.map(product => (
                    <Link to={"/product/" + product.id} className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
