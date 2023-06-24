import { Tabs } from "antd";

import SingleHistory from "../history/single-history/SingleHistory";

// style
import "./style/order-recent.css"
import OrderBook from "./order-book/OrderBook";

const items = [
    {
      key: "1",
      label: <div>Order Book</div>,
      children: <OrderBook />,
    },
    {
      key: "2",
      label: <div>Recent Trade</div>,
      children: <SingleHistory title="Recent Trade" />,
    },
  ];

const OrderRecent = () => {
    return (
        <section className="order-and-recent-card">
          <Tabs defaultActiveKey="1" items={items} />
        </section>
      );
}

export default OrderRecent