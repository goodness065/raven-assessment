import { Tabs } from "antd";
import CandleStick from "../candle-stick/CandleStick";
import SingleHistory from "../history/single-history/SingleHistory";
import OrderBook from "../order-book-and-recent-trade/order-book/OrderBook";
import "./style/responsive.css";

const items = [
  {
    key: "1",
    label: <div>Charts</div>,
    children: <CandleStick />,
  },
  {
    key: "2",
    label: <div>Orders</div>,
    children: <OrderBook />,
  },
  {
    key: "3",
    label: <div>Recent Trade</div>,
    children: <SingleHistory title="Recent Trade" />,
  },
];

const Responsive = () => {
  return (
    <section className="responsive-card order-and-recent-card">
      <Tabs defaultActiveKey="1" items={items} />
    </section>
  );
};

export default Responsive;
