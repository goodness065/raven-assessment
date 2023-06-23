import { Tabs } from "antd";

import SingleHistory from "./single-history/SingleHistory";

// style
import "./styles/history.css";

const items = [
  {
    key: "1",
    label: <div>Open Orders</div>,
    children: <SingleHistory title="Open Orders" />,
  },
  {
    key: "2",
    label: <div>Positions</div>,
    children: <SingleHistory title="Position" />,
  },
  {
    key: "3",
    label: <div>Order History</div>,
    children: <SingleHistory title="Order History" />,
  },
  {
    key: "4",
    label: <div>Trade Historys</div>,
    children: <SingleHistory title="Trade History"/>,
  },
];

const History = () => {
  return (
    <section className="history-card">
      <Tabs defaultActiveKey="1" items={items} />
    </section>
  );
};

export default History;
