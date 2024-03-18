import Img from "../../assets/hero-image-simple-homepage.png";
import { useDarkMode } from "../../store/DarkMode";
import Done from "../Icons/Done";
import "./Main.css";

const Main = () => {
  const darkMode = useDarkMode((state) => state.activeDarkMode);

  return (
    <section className={`${darkMode ? 'bg-[#111729] ': ''}`}>
      <div className="left-side">
        <h2>😎 Simple way to communicate</h2>
        <h1>Actions for Accessibility in Design</h1>
        <p>
          The fastest way to build and deploy websites with resusable
          components.
        </p>
        <div className="btns">
          <button className="btn-1">GET STARTED</button>
          <button className="btn-2">Get live demo</button>
        </div>
        <div className="container-done">
          <span>
            <Done />
            No credit card required
          </span>
          <span>
            <Done />
            No software to install
          </span>
        </div>
      </div>
      <div className="right-main">
        <img className="image" src={Img} alt="Foto" />
      </div>
    </section>
  );
};

export default Main;
