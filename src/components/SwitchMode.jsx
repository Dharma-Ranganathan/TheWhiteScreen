import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SwitchThemeContext } from "../context/SwitchTheme";
const SwitchMode = () => {
  const { isDarkTheme, switchTheme } = useContext(SwitchThemeContext);

  return (
    <div className="switch-mode-container" onClick={switchTheme}>
      <span>{!isDarkTheme ? <MdDarkMode /> : <MdLightMode />}</span>
    </div>
  );
};

export default SwitchMode;
