import { useState } from "react";
import Popup from "../../../components/Popup/Popup";
import "./DepositCards.scss";

const DepositCards = ({ data }) => {
  const [popupState, setPopupState] = useState(false);

  const DepositLabel = ({ label }) => {
    if (!label) return null;
    return (
      <div className={`deposit_card__label deposit_card__label--${label}`}>
        {label}
      </div>
    );
  };

  const handleCardClick = () => {
    setPopupState(true);
  };

  const closePopup = () => {
    setPopupState(false);
  };

  return (
    <>
      {data.map((item) => (
        <li
          key={item.title}
          className="deposit_card"
          onClick={() => handleCardClick(item)}
        >
          <a className="deposit_card__link" href="#">
            <DepositLabel label={item.label} />
            <div className="deposit_card__img_w">
              <img
                className="deposit_card__img"
                src={`/images/deposit/${item.img}.png`}
                alt="image"
              />
            </div>
            <h3 className="deposit_card__title">{item.title}</h3>
            <div className="deposit_card__descr">{item.descr}</div>
          </a>
        </li>
      ))}
      {popupState && <Popup onClose={closePopup} />}
    </>
  );
};

export default DepositCards;
