//style
import "./style/text-input.css";

// icon
import info from "../../assets/icons/info.svg";

const TextInput = () => {
  return (
    <div className="text-input-container">
      <div className="text-input-container__label-container">
        <p>Amount</p>
        <img src={info} alt="info" />
      </div>
      <div className="text-input-container__input-container">
        <input />
        <p>USD</p>
      </div>
    </div>
  );
};

export default TextInput;
