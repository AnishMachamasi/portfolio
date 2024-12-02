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
        <h3 data-aos="fade-up">Anish Machamasi</h3>
        <p data-aos="fade-up">
          Data Engineer with 1.5+ years of experience in optimizing data
          pipelines. AWS Solutions Architect Associate certified, proficient in
          Python, SQL, PySpark, and FastAPI, focused on data quality,
          performance, and cost-efficiency.
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
