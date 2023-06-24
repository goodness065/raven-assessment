import { useState } from "react";
import { Select } from "antd";

import Button from "../../../button/Button";
import TextInput from "../../../input/Text-input/TextInput";
import { currency } from "../../../../utils/data.utils";

// style
import "../limit/style/limit.css";

const Market = () => {
  const [amount, setAmount] = useState();

  return (
    <form className="limit-form">
      <TextInput
        label="Amount"
        placeHolder="0.00"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <div className="limit-form__total-container limit-form__total-container--space">
        <p>Total</p>
        <p>{amount ? amount : "0.00"}</p>
      </div>
      <Button buttonClassName="button--gradient" title="Buy BTC" />

      <div className="limit-form__total-container limit-form__total-container--border">
        <p>Total account value</p>
        <Select
          defaultValue="NGN"
          popupClassName="dropdown-input-container__select-dropdown"
          options={currency}
        />
      </div>
      <h3>0.00</h3>
      <div className="limit-form__total-container limit-form__total-container--space">
        <div>
          <p>Open Orders</p>
          <h3>0.00</h3>
        </div>
        <div>
          <p>Available</p>
          <h3>0.00</h3>
        </div>
      </div>
      <div className="limit-form__btn-container">
        <Button buttonClassName="button--blue" title="Deposit" />
      </div>
    </form>
  );
};

export default Market;
