import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { FaDownload } from "react-icons/fa6";
import "./about.css";
import data from "./data";
import Card from "../../components/Card";

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Section" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className={"about__card"}>
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I am a passionate web developer with a keen interest in creating
            dynamic, user-friendly websites. With a strong foundation in
            front-end technologies like HTML, CSS, and JavaScript, I enjoy
            building responsive layouts and working with various libraries and
            frameworks to make websites come to life. I thrive in collaborative
            environments and am always eager to learn and adapt to new
            technologies.
          </p>
          <p>
            Outside of coding, I enjoy exploring creative design, learning new
            programming languages, and staying up to date with the latest trends
            in the tech world. I believe in continuous growth and challenge
            myself to improve my skills every day. Whether it's building new
            projects, collaborating with others, or contributing to open-source,
            I am always ready to take on the next challenge.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
