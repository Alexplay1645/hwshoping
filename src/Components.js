import { Link } from "react-router-dom";
import { products } from './products';
import './Home.css';
import { news } from './news';

export function Home() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div>
      <h1>Home component</h1>
      <p>Добро пожаловать в магазин крафтовых товаров!</p>

      <h2>Категории:</h2>
      <div className="category-list">
        {categories.map(category => (
          <Link to={"/category/" + category} className="category-link" key={category}>
            {category.toUpperCase()}
          </Link>
        ))}
      </div>

      <h2>Новости:</h2>
      <div className="news-list">
        {news.map(item => (
          <Link to={"/news/" + item.id} className="news-item" key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>

      <h2>Все товары:</h2>
      <div className="product-list">
        {products.map(product => (
          <Link to={"/product/" + product.id} className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function About()
{
    return <div>
        <h1>About component</h1>
        <p>В этов интернет-магазине, продоём ручные изделие, посуды, декорации, электроника и т.д.</p>
    </div>
}

export function Contacts()
{
    return <div>
        <h1>Contacts component</h1>
        <p>Email: teastyman@gmail.com</p>
        <p>Phone: +380849392849384</p>    
    </div>
}

export function NotFound()
{
    return <div>
        <h1>!!! 404 !!!</h1>   
    </div>
}