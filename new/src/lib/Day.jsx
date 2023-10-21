import PropTypes from "prop-types";

function Day({ day }) {
  return <div className="rci-day">{day}</div>;
}

export default Day;

Day.propTypes = {
  day: PropTypes.string,
};
