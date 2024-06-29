import Header from "../components/Header";
import SignIn from "../components/SignIn";
import FooterDesktop from "../components/FooterDesktop";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header />
      <section className="page-body">
        <div className="sign-up">
          <SignIn />
        </div>
        <img
          className="background-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <FooterDesktop
        linkPictureApplesvg="/link--picture--applesvg1@2x.png"
        linkPictureGooglesvg="/link--picture--googlesvg1@2x.png"
      />
    </div>
  );
};

export default SignUpPage;
