import "./Deposit.scss";
import DepositCards from "../../ui/cards/DepositCasrd/DepositCards";

const Deposit = () => {
  const eMoney = [
    {
      img: "master",
      title: "Mastercard",
      descr: "Commission 5%",
      label: "popular",
    },
    { img: "visa", title: "Visa", descr: "Commission 5%", label: "trusted" },
    { img: "skrill", title: "Skrill", descr: "Commission 0%", label: "" },
    {
      img: "pm",
      title: "Perfect Money, EUR",
      descr: "Commission 0%",
      label: "",
    },
    {
      img: "piastri",
      title: "Piastrix, EUR",
      descr: "Commission 0%",
      label: "",
    },
    { img: "stic", title: "SticPay", descr: "Commission 0%", label: "" },
    { img: "pin", title: "Pin", descr: "Commission 1%", label: "" },
  ];

  const coin = [
    { img: "bitcoin", title: "BTC", descr: "Commission 0%", label: "" },
    { img: "eth", title: "ETH", descr: "Commission 0%", label: "" },
    { img: "tether", title: "USDT", descr: "Commission 0%", label: "" },
  ];

  return (
    <section className="section deposit">
      <div className="section_in deposit__in">
        <h1 className="deposit__title">Make A Deposit</h1>
        <h2 className="deposit__section_title">Choose payment method</h2>
        <div className="deposit__list_title">Cards, e-money, PIN</div>
        <ul className="deposit__list">
          <DepositCards data={eMoney} />
        </ul>
        <div className="deposit__list_title">Cryptocurrency</div>
        <ul className="deposit__list">
          <DepositCards data={coin} />
        </ul>
      </div>
    </section>
  );
};

export default Deposit;
