import BuyAndSell from "../../components/buy-and-sell/BuyAndSell";
import History from "../../components/history/History";

// style
import "./styles/home.css"

const Home = () => {
  return (
    <main className="home">
      <History />
      <BuyAndSell />
    </main>
  );
};

export default Home;
