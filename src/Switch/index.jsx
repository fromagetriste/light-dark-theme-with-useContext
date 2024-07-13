import "./Styles.css";
import { useTheme } from "../ThemeContext";

// étape 7 : The Switch component can then be connected to the toggleTheme function returned from useTheme as per the code below :
const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
