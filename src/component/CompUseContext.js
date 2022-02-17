import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemesContext from "../context/ThemesContext";

const { LangContext, LangProvider } = LanguageContext();

const { ThemeContext, ThemeProvider } = ThemesContext();

export const CompUseContext = () => {
  return (
    <LangProvider>
      <Language />
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </LangProvider>
  );
};
function Language() {
  const props = useContext(LangContext);
  return (
    <>
      <p>{props.id}</p>
      <select value={props.id} onChange={props.changeId}>
        <option value="id">Idn</option>
        <option value="en">Eng</option>
      </select>
    </>
  );
}
function Theme() {
  const props = useContext(ThemeContext);
  return (
    <>
      <p>{props.theme}</p>
      <select value={props.theme} onChange={props.changeTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  );
}
