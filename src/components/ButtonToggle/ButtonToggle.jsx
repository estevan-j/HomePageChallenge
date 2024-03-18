import "./ButtonToggle.css";
import Sun from "../../assets/Sun_fill.svg";
import Moon from '../../assets/Moon_fill_light.svg';
import MoonDark from '../../assets/Moon_fill.svg';


const ButtonToggle = ({active, handleDarkMode}) => {
  return (
    <>
      <button className="btn-bg" onClick={handleDarkMode}>
        <img src={active ? MoonDark: Moon} className={active ? 'active': ''} />:
        <img src={Sun} className={!active ? 'active': ''} />
      </button>
    </>
  );
};

export default ButtonToggle;
