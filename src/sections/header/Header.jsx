import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import Aos from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up">Hajia Binut</h3>
        <p data-aos="fade-up">
          A passionate web developer with a love for creating beautiful and
          functional websites. With a keen eye for detail and a dedication to
          continuous learning, I craft seamless user experiences and bring ideas
          to life through code.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk.
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
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
