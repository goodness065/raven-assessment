import BuyAndSellBottom from "../../components/buy-and-sell-bottom/BuyAndSellBottom";
import BuyAndSell from "../../components/buy-and-sell/BuyAndSell";
import CandleStick from "../../components/candle-stick/CandleStick";
import History from "../../components/history/History";
import OrderRecent from "../../components/order-book-and-recent-trade/OrderRecent";
import Responsive from "../../components/responsive/Responsive";
import TradingHeader from "../../components/tradingHeader/TradingHeader";

// style
import "./styles/home.css";

const Home = () => {
  return (
    <main className="home">
      <TradingHeader />
      <div className="home__flex">
        <div className="home__flex1">
          <div>
            <CandleStick />
            <OrderRecent />
          </div>
          <History />
        </div>
        <BuyAndSell defaultActiveKey="1" />
      </div>
      <div className="home__res">
        <Responsive />
        <History />
      </div>
      <BuyAndSellBottom />
    </main>
  );
};

export default Home;
