import { Tabs } from "antd";

import SingleHistory from "../history/single-history/SingleHistory";
import Buys from "./buy/Buys";

//style
import "./style/buy-and-sell.css";

const items = [
    {
      key: "1",
      label: <div>Buy</div>,
      children: <Buys />,
    },
    {
      key: "2",
      label: <div>Sell</div>,
      children: <SingleHistory title="Sales Available" />,
    },
  ];

const BuyAndSell = () => {
  return (
    <section className="buy-and-sell-card">
      <Tabs defaultActiveKey="1" items={items} />
    </section>
  );
};

export default BuyAndSell;
