import React, { useContext } from "react";
import './Footer.css'
import ThemeContext from '../Contexts/ThemeContext';



const Footer = () => {
  const themeValues = useContext(ThemeContext);
  return (
    <div className="Footer">
      <h5>Developed By Delnia</h5>
      <div>
        <button onClick={() => themeValues.setActiveTheme('green')}>
          Green
          </button>
          <button onClick={() => themeValues.setActiveTheme('blue')}>
            Blue
          </button>

      </div>
    </div>
  );
};

export default Footer
