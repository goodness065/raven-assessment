import PropTypes from "prop-types";

// styles
import "./style/button.css";

const Button = ({ buttonClassName, title, handelClick }) => {
  return (
    <button
      className={`button ${buttonClassName}`}
      onClick={handelClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
 buttonClassName: PropTypes.string,
 title: PropTypes.string,
 handelClick: PropTypes.func,
};

export default Button;
