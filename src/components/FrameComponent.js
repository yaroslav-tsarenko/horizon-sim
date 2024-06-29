import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  activateYourESIM,
  unlockThePowerOfSeamlessC,
  image,
}) => {
  return (
    <section className={`productdescriptionpage-inner ${className}`}>
      <div className="frame-parent1">
        <div className="activate-your-esim-parent">
          <h1 className="activate-your-esim">{activateYourESIM}</h1>
          <div className="unlock-the-power">{unlockThePowerOfSeamlessC}</div>
        </div>
        <img className="image-icon4" alt="" src={image} />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  activateYourESIM: PropTypes.string,
  unlockThePowerOfSeamlessC: PropTypes.string,
  image: PropTypes.string,
};

export default FrameComponent;
