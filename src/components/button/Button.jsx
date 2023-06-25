import PropTypes from "prop-types";

// styles
import "./style/button.css";

const Button = ({ buttonClassName, title, handelClick, type }) => {
  return (
    <button
      className={`button ${buttonClassName}`}
      onClick={handelClick}
      type={type ? type : "button"}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
 buttonClassName: PropTypes.string,
 type: PropTypes.string,
 title: PropTypes.string,
 handelClick: PropTypes.func,
};

export default Button;
