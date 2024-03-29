/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children, localTheme }) => {
  const [theme, setToggleTheme] = useState(
    "Light" === localTheme ? "Dark" : "Light",
  );

  const changeToggleThemeValue = () => {
    if (theme === "Light") {
      setToggleTheme("Dark");
    } else {
      setToggleTheme("Light");
    }

    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeToggleThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, changeToggleThemeValue } = useContext(ThemeContext);

  return { theme, changeToggleThemeValue };
};
