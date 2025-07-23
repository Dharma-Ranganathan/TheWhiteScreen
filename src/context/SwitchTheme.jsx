import { createContext, useState } from "react";

export const SwitchThemeContext = createContext();

export const SwitchThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  function switchTheme() {
    // console.log("clicked", isDarkTheme);
    setDarkTheme(!isDarkTheme);
  }

  return (
    <SwitchThemeContext.Provider value={{ isDarkTheme, switchTheme }}>
      {children}
    </SwitchThemeContext.Provider>
  );
};
