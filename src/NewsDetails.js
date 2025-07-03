import { useParams } from "react-router-dom";
import { news } from './news';

export function NewsDetails() {
  const { newsId } = useParams();
  const current = news.find(n => n.id === newsId);

  return (
    <div>
      <h1>{current.title}</h1>
      <p>{current.text}</p>
    </div>
  );
}
