import './Footer.css';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import profile from '../images/seteemio.jpeg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img src={linkedin} alt="LinkedIn" />
        <img src={twitter} alt="Twitter" />
        <img src={github} alt="Github" />
      </div>
      <div className="legal">
        <p>
          This website is intended for adults over 21 and of legal drinking age.
          We encourage responsible drinking only. All content on this website is
          for informational and educational purposes only.
        </p>
      </div>
      <div className="copyright">
        <img src={profile} alt="the author" />
      </div>
    </div>
  );
}
