import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Hajia Binut</h3>
        <p>
          A passionate web developer with a love for creating beautiful and
          functional websites. With a keen eye for detail and a dedication to
          continuous learning, I craft seamless user experiences and bring ideas
          to life through code.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's Talk.</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
