import { useState } from "react";
import Button from "../button/Button";
import "./style/buy-and-sell-buttom.css";
import { Drawer } from "antd";
import BuyAndSell from "../buy-and-sell/BuyAndSell";

const BuyAndSellBottom = () => {
  const [open, setOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState("1");

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="buy-and-sell-bottom-container">
      <Drawer
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
      >
        <BuyAndSell defaultActiveKey={defaultValue} />
      </Drawer>
      <Button
        buttonClassName="button--green"
        title="Buy"
        handelClick={() => {
          setOpen(true);
          setDefaultValue("1");
        }}
      />
      <Button
        buttonClassName="button--red"
        title="Sell"
        handelClick={() => {
          setOpen(true);
          setDefaultValue("2");
        }}
      />
    </div>
  );
};

export default BuyAndSellBottom;
