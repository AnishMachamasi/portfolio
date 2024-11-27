import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./theme-reducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  // SAVE THEME SETTINGS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook to use our theme wherever we want in our project
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
