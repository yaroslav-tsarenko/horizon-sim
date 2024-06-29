import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`origin-container-wrapper ${className}`}>
      <div className="origin-container">
        <div className="buttons-and-image">
          <div className="verticalborder">
            <div className="button-who-owns-saily-parent">
              <div className="button-who">Ownership of Horizonsim</div>
              <div className="horizonsim-the-innovative">
                Horizonsim, the innovative eSIM service redefining connectivity,
                is owned and operated by Nexus Tech Solutions, a trailblazing
                company at the forefront of technological advancement.
              </div>
            </div>
          </div>
          <div className="verticalborder1">
            <div className="button-whats">What’s the origin of Horizonsim?</div>
          </div>
          <div className="verticalborder2">
            <div className="button-how">How did Horizonsim start?</div>
          </div>
        </div>
        <img className="picture-image1" alt="" src="/picture--image-2@2x.png" />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
