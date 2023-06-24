import PropTypes from "prop-types";

//style
import "./style/text-input.css";

// icon
import info from "../../../assets/icons/info.svg";

const TextInput = ({ label, placeHolder, id, name, value, onChange, type }) => {
  return (
    <div className="text-input-container">
      <div className="text-input-container__label-container">
        <p>{label}</p>
        <img src={info} alt="info" />
      </div>
      <div className="text-input-container__input-container">
        <input
          required
          placeholder={placeHolder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={type || "text"}
        />
        <p>USD</p>
      </div>
    </div>
  );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
    type: PropTypes.string,
  };

export default TextInput;
