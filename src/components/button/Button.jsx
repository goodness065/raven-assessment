import PropTypes from "prop-types";

// styles
import "./style/button.css";

const Button = ({ buttonClassName, title }) => {
  return (
    <button
      className={`button ${buttonClassName}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
 buttonClassName: PropTypes.string,
 title: PropTypes.string,
};

export default Button;
