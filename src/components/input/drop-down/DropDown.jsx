import PropTypes from "prop-types";
import { Select } from "antd";

//style
import "./styles/drop-down.css";

// icon
import info from "../../../assets/icons/info.svg";

const DropDown = ({ label, handleChange, options, defaultValue }) => {
  return (
    <div className="dropdown-input-container text-input-container">
      <div className="text-input-container__label-container">
        <p>{label}</p>
        <img src={info} alt="info" />
      </div>
      <div className="text-input-container__input-container">
        <Select
          defaultValue={defaultValue}
          onChange={handleChange}
          popupClassName="dropdown-input-container__select-dropdown dropdown-input-container__select-dropdown--width"
          options={options}
        />
      </div>
    </div>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
  type: PropTypes.string,
};

export default DropDown;
