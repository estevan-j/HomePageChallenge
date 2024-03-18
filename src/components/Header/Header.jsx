import logo from "../../assets/alarado-icon-homepage.svg";
import "./Header.css";
import ButtonToggle from "../ButtonToggle/ButtonToggle";
import { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { useDarkMode } from "../../store/DarkMode";

const Header = () => {
  const [dots, setDots] = useState(false);

  const darkMode = useDarkMode((state) => state.activeDarkMode);
  const {changeDarkMode} = useDarkMode();
 
  const handleDarkMode = () => {
    changeDarkMode();
    console.log('ejecutnado');
  }
  console.log('renderizar')

  return (
    <header className={`${darkMode ? 'text-[#FFFFFF]': ''}`}>
      <img src={logo} alt="Alvarado" className="max-h-[50px]" />
      <div className={`navbar ${dots ? 'mobil': ''}`}>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Resource</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ButtonToggle active={darkMode} handleDarkMode={() => handleDarkMode()} />
      </div>
      <TbGridDots className={`dots cursor-pointer`} onClick={() => setDots(!dots)} />
    </header>
  );
};

export default Header;
