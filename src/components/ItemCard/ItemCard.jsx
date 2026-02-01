function ItemCard({ item, onCardClick }) {
  //handler functions
  const handlerCardClick = () => {
    onCardClick(item);
  };

  return (
    <div>
      <h2 className="card__name">{item.name}</h2>
      <img onClick={handlerCardClick} src={item.link} alt={item.name} />
    </div>
  );
}

export default ItemCard;
