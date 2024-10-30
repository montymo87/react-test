import { useState } from "react";
import "./Transactions.scss";

const Transactions = () => {
  const list = [
    {
      img: "stic",
      title: "by SticPay, USD",
      number: "142354",
      time: "02.01 at 12:34PM",
      price: "23.05$",
      state: "processing",
    },
    {
      img: "stic",
      title: "by SticPay, USD",
      number: "142354",
      time: "05.12 at 3:40PM",
      price: "123.27$",
      state: "active",
    },
    {
      img: "master",
      title: "by Mastercard, USD",
      number: "23561",
      time: "24.11 at 4:20AM",
      price: "80.00$",
      state: "performed",
    },
    {
      img: "bitcoin",
      title: "by bitcoin, USD",
      number: "23561",
      time: "24.11 at 4:20AM",
      price: "180.00$",
      state: "active",
    },
    {
      img: "tether",
      title: "by tether, USD",
      number: "26561",
      time: "24.11 at 4:20AM",
      price: "10.00$",
      state: "performed",
    },
    {
      img: "eth",
      title: "by eth, USD",
      number: "22561",
      time: "24.11 at 4:20AM",
      price: "130.00$",
      state: "performed",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [sortKey, setSortKey] = useState("number");
  const [isAscending, setIsAscending] = useState(true);

  const showMoreHandler = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const handleSort = (key) => {
    setSortKey(key);
    setIsAscending((prev) => !prev);
  };

  const sortedList = [...list].sort((a, b) => {
    let aValue = sortKey === "price" ? parseFloat(a.price) : a.number;
    let bValue = sortKey === "price" ? parseFloat(b.price) : b.number;

    if (aValue < bValue) {
      return isAscending ? -1 : 1;
    }
    if (aValue > bValue) {
      return isAscending ? 1 : -1;
    }
    return 0;
  });

  const currentList = showMore ? sortedList : sortedList.slice(0, 3);

  return (
    <section className="section transactions">
      <div className="section_in transactions__in">
        <div className="transactions__heding">
          <h2 className="transactions__title">Last Transactions</h2>
          <div className="transactions__filter">
            <button
              className="transactions__filter_btn"
              type="button"
              aria-label="filter button"
            >
              <img src="/images/icons/filter.svg" alt="filter icon" />
            </button>
            <div className="transactions__fiter_body">
              <div
                className="transactions__fiter_item"
                onClick={() => handleSort("number")}
              >
                number
              </div>
              <div
                className="transactions__fiter_item"
                onClick={() => handleSort("price")}
              >
                amount
              </div>
            </div>
          </div>
        </div>
        <ul className="transactions__list">
          {currentList.map((item, index) => (
            <li key={item.title + index} className="transactions__list_row">
              <div className="transactions__list_col transactions__list_col--img">
                <img
                  className="transactions__list_item_img"
                  src={`/images/deposit/${item.img}.png`}
                  alt="icon"
                />
              </div>
              <div className="transactions__list_col transactions__list_col--info">
                <div className="transactions__sublist">
                  <div className="transactions__sublist_item">
                    <div className="transactions__sublist_item_title">
                      {item.title}
                    </div>
                    <div className="transactions__list_item_descr">
                      Withdraw
                    </div>
                  </div>
                  <div className="transactions__sublist_item">
                    <div className="transactions__sublist_item_title">
                      {item.number}
                    </div>
                    <div className="transactions__list_item_descr">
                      Transaction Number
                    </div>
                  </div>
                  <div className="transactions__sublist_item">
                    <div className="transactions__sublist_item_title">
                      {item.time}
                    </div>
                    <div className="transactions__list_item_descr">
                      Payment Date
                    </div>
                  </div>
                  <div className="transactions__sublist_item">
                    <div className="transactions__sublist_item_title">
                      {item.price}
                    </div>
                    <div className="transactions__list_item_descr">
                      Amount Paid
                    </div>
                  </div>
                </div>
              </div>
              <div className="transactions__list_col transactions__list_col--state">
                <div
                  className={`transactions__list_item_state transactions__list_item_state--${item.state}`}
                >
                  {item.state}
                </div>
                <div className="transactions__list_item_descr">
                  Operation Status
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="transactions__btn_w">
          <button
            onClick={showMoreHandler}
            className="btn_base"
            type="button"
            aria-label="show more"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
