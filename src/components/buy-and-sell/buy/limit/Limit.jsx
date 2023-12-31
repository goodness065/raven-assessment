import { useState } from "react";
import { Checkbox, Select } from "antd";

import Button from "../../../button/Button";
import TextInput from "../../../input/Text-input/TextInput";
import DropDown from "../../../input/drop-down/DropDown";
import { currency, typeOption } from "../../../../utils/data.utils";

// style
import "./style/limit.css";

// icon
import info from "../../../../assets/icons/info.svg";

const initialFormData = {
  limitPrice: '',
  amount: '',
};


const Limit = () => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <form className="limit-form">
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
      <div className="limit-form__checkbox-container">
        <Checkbox defaultChecked={true} />
        <p>Post Only</p>
        <img src={info} alt="info" />
      </div>
      <div className="limit-form__total-container limit-form__total-container--space">
        <p>Total</p>
        <p>{formData.amount || formData.limitPrice ? +formData.limitPrice + +formData.amount : "0.00"}</p>
      </div>
      <Button buttonClassName="button--gradient" title="Buy BTC" />

      <div className="limit-form__total-container limit-form__total-container--border">
        <p>Total account value</p>
        <Select
          defaultValue="NGN"
          popupClassName="dropdown-input-container__select-dropdown dropdown-input-container__select-dropdown--width2"
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

export default Limit;
