import { Button } from "@mui/material";
import Header from "../components/Header";
import FooterDesktop from "../components/FooterDesktop";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header />
      <section className="sign-in-content">
        <div className="sign-in-wrapper">
          <div className="sign-in">
            <div className="sign-in-fields">
              <div className="sign-in-title">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="input-fields">
                <div className="labels">
                  <div className="username">Username</div>
                  <img className="inputs-icon" alt="" src="/inputs.svg" />
                </div>
                <div className="labels1">
                  <div className="password">Password</div>
                  <img className="labels-child" alt="" src="/frame-153-1.svg" />
                </div>
                <Button
                  className="button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#1c1c1c",
                    fontSize: "16",
                    background: "#3e98b6",
                    borderRadius: "4px",
                    "&:hover": { background: "#3e98b6" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-buttons">
                <img
                  className="social-icons"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-icons1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-icons2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg@2x.png"
      />
    </div>
  );
};

export default SignInPage;
