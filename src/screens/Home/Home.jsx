import BuyAndSell from "../../components/buy-and-sell/BuyAndSell";
import History from "../../components/history/History";
import OrderRecent from "../../components/order-book-and-recent-trade/OrderRecent";
import TradingHeader from "../../components/tradingHeader/TradingHeader";

// style
import "./styles/home.css"

const Home = () => {
  return (
    <main className="home">
      <TradingHeader />
      <History />
      <BuyAndSell />
      <OrderRecent />
    </main>
  );
};

export default Home;
