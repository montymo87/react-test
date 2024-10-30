import Header from "./components/Header/Header";
import Deposit from "./components/Deposit/Deposit";
import Promocode from "./components/Promocode/Promocode";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="base">
          <Deposit />
          <Promocode />
          <Transactions />
        </div>
      </div>
    </>
  );
}

export default App;
