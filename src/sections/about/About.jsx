import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { FaDownload } from "react-icons/fa6";
import "./about.css";
import data from "./data";
import Card from "../../components/Card";

const About = () => {
  const handleDownload = () => {
    fetch(CV)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Anish_Machamasi_CV.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error("Failed to download file:", err));
  };
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
            I am a dedicated Data Engineer with a passion for optimizing data
            pipelines and improving data processes. With experience in
            technologies like Python, SQL, PySpark, and FastAPI, I focus on
            enhancing data quality, performance, and cost-efficiency. I am also
            AWS Solutions Architect Associate certified, which enables me to
            design scalable cloud-based solutions. I thrive in collaborative
            environments and enjoy solving complex data challenges.
          </p>
          <p>
            Outside of work, I am always exploring new tools and techniques in
            the data engineering space, staying up to date with industry trends,
            and continuously improving my skills. Whether it’s optimizing
            existing systems or building new solutions, I’m always excited to
            tackle the next challenge and contribute to meaningful projects.
          </p>

          <button onClick={handleDownload} className="btn primary">
            Download CV <FaDownload />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
