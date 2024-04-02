import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="card">
      <div className="card__title_frame">
        <h2 className="card__title">{item.name}</h2>
      </div>
      <img className="card__image" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;
