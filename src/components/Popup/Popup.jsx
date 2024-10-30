import { useEffect, useRef } from "react";
import "./Popup.scss";

const Popup = ({ onClose }) => {
  const popupRef = useRef(null);

  const price = ["$ 21", "+ $10", "+ $20", "+ $30", "+ $50", "+ $100"];
  useEffect(() => {
    document.body.classList.add("body--popup_open");

    return () => document.body.classList.remove("body--popup_open");
  }, []);

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="popup">
      <div className="popup__in" ref={popupRef}>
        <form className="popup__form" action="POST">
          <div className="popup__back" onClick={onClose}>
            <img
              className="popup__back_arrow"
              src="/images/icons/arrow-left.svg"
              alt="arrow back"
              aria-hidden="true"
            />
            <div className="popup__back_title">Back to Payment Method</div>
            <img
              className="popup__back_close"
              src="/images/icons/cross.svg"
              alt="close icon"
            />
          </div>

          <div className="popup__balance">
            <div className="popup__balance_info">
              Current Balance: <strong> $ 0.00</strong>
            </div>
          </div>

          <div className="popup__method">
            <img
              className="popup__method_img"
              src="/images/deposit/master.png"
              alt="method logo"
            />
            <div className="popup__method_info">
              <div className="popup__method_title">
                Mastercard, USD Commission 3%
              </div>
              <div className="popup__method_descr">
                Please notice that you will send money in USD
              </div>
            </div>
            <img
              className="popup__method_arrow"
              src="/images/icons/arrow-left.svg"
              alt="arrow open"
            />
          </div>

          <div className="popup__amount">
            <h3 className="popup__amount_title">Amount</h3>
            <ul className="popup__amount_list">
              {price.map((item, index) => (
                <li key={item} className="popup__amount_list_item">
                  <label htmlFor={item + index}>{item}</label>
                  <input id={item + index} type="radio" name="popup_amount" />
                </li>
              ))}
            </ul>
            <div className="popup__amount_time">
              From 21.00 to 906.00 USD at a time
            </div>
          </div>

          <div className="popup__code">
            <div className="popup__code_field">
              <label
                className="popup__code_field_label"
                htmlFor="popup__codeinput_text"
              >
                Promo Code
              </label>
              <input
                className="popup__code_field_input"
                placeholder="Enter promo code here"
                id="popup__codeinput_text"
                type="text"
              />
            </div>

            <div className="popup__code_btn_w">
              <input className="btn_base" type="button" value="Apply" />
            </div>
          </div>

          <input
            className="popup__code_submit btn_base"
            type="submit"
            value="Deposit"
          />
        </form>
      </div>
    </section>
  );
};

export default Popup;
