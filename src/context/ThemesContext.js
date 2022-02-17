import React, { createContext, useState } from "react";

function ThemesContext() {
  const ThemeContext = createContext();

  const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");

    const changeTheme = (e) => {
      setTheme(e.target.value);
    };
    const themeProvider = { theme, changeTheme };
    return (
      <ThemeContext.Provider value={themeProvider}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  return {
    ThemeProvider,
    ThemeContext,
  };
}
export default ThemesContext;
