import PropTypes from "prop-types";

// style
import "./style/single-history.css";

const SingleHistory = ({ title }) => {
  return (
    <div className="single-history-card">
      <h2>No {title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
        nullam sit imperdiet pulvinar.
      </p>
    </div>
  );
};

SingleHistory.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SingleHistory;
