import { useState } from "react";
import { Select } from "antd";

import Button from "../../../button/Button";
import TextInput from "../../../input/Text-input/TextInput";
import DropDown from "../../../input/drop-down/DropDown";
import { currency, typeOption } from "../../../../utils/data.utils";

// style
import "../limit/style/limit.css";

const initialFormData = {
  limitPrice: '',
  triggerPrice: '',
  amount: '',
};


const StopLimit = () => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <form className="limit-form">
      <TextInput
        label="Trigger price"
        placeHolder="0.00"
        type="number"
        value={formData.triggerPrice}
        onChange={(e) =>
          setFormData({
            ...formData,
            triggerPrice: e.currentTarget.value,
          })
        }
      />
      <TextInput
        label="Limit price"
        placeHolder="0.00"
        type="number"
        value={formData.limitPrice}
        onChange={(e) =>
          setFormData({
            ...formData,
            limitPrice: e.currentTarget.value,
          })
        }
      />
      <TextInput
        label="Amount"
        placeHolder="0.00"
        value={formData.amount}
        type="number"
        onChange={(e) =>
          setFormData({
            ...formData,
            amount: e.currentTarget.value,
          })
        }
      />
      <DropDown
        label="Type"
        options={typeOption}
        defaultValue="Good till cancelled"
      />
      <div className="limit-form__total-container limit-form__total-container--space">
        <p>Total</p>
        <p>{formData.amount || formData.limitPrice || formData.triggerPrice ? +formData.limitPrice + +formData.amount + +formData.triggerPrice : "0.00"}</p>
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

export default StopLimit;
