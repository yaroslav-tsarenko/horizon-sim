import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`connect-content-wrapper ${className}`}>
      <div className="connect-content">
        <div className="easier-connection">
          <div className="easier-description">
            <div className="easier">Easier</div>
            <h1 className="heading-27">Quick Connectivity:</h1>
            <div className="connect-to-horizon">
              Connect to Horizon Sim in just a few taps. Our streamlined process
              ensures that you're up and running in no time. Simply open the
              Horizon Sim app, follow the prompts, and within moments, you'll be
              connected to our global network.
            </div>
          </div>
          <img
            className="image-icon"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
        <div className="faster-connection">
          <img className="image-icon1" alt="" src="/image-1@2x.png" />
          <div className="faster-description">
            <div className="faster">Faster</div>
            <h1 className="heading-28">Skip the Line:</h1>
            <div className="why-wait-when">
              Why wait when you can connect instantly? Horizon Sim offers a
              seamless activation process that puts you in control. Simply
              download our app, follow the quick setup instructions, and within
              moments,.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
