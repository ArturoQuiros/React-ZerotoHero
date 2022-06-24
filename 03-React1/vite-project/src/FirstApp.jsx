import "./styles.css";
import PropTypes from "prop-types";

const FirstApp = ({ name2 }) => {
  const name = name2;
  return (
    <>
      <h1>{name}</h1>
      <h2>{name}</h2>
    </>
  );
};

FirstApp.propTypes = {
  name2: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name2: "no name",
};
export default FirstApp;
