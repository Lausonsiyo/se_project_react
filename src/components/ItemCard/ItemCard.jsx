function ItemCard({ item }) {
  return (
    <div>
      <h2 className="card__name">{item.name}</h2>
      <img src={item.link} alt={item.name} />
    </div>
  );
}

export default ItemCard;
