import "./floating-nav.css";
import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-400}
        className="scrollspy"
        items={["header", "about", "services", "portfolio", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item}></Nav>
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
