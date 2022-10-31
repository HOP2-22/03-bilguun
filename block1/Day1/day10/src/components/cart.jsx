import "../styles/cart.css";
import Star from "..//assets/svg/star.svg";
import profile from "..//assets/images/image.jpeg";

export const Cart = () => {
  return (
    <div className="cart">
      <div className="star">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>
      <div className="text">
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className="user">
        <img src={profile} alt="" width={30} />
        <p>Amy Klassen</p>
      </div>
    </div>
  );
};
