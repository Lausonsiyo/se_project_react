/* REACT DEPENDENCIES IMPORTS */
import { useContext } from "react";

/* STYLES SHEETS IMPORTS */
import "./ItemCard.css";

/* IMAGES IMPORTS */
import likeIcon from "../../assets/likeicon.svg";
import likedIcon from "../../assets/blacklikeicon.svg";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser._id);

  function handleLike() {
    onCardLike({
      id: item.id,
      isLiked: isLiked,
      currentUser: currentUser,
    });
  }

  return (
    <li className="card">
      <div className="card__title_frame">
        <h2 className="card__title">{item.name}</h2>
        {isLoggedIn ? (
          <button
            className="card__like-button"
            onClick={() => handleLike(item._id, isLiked)}
          >
            <img
              src={isLiked ? likedIcon : likeIcon}
              alt="like button"
              className="card__like-button_img"
            />
          </button>
        ) : (
          ""
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
