import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");

  const colorModeHander = () => {
    setTheme((prev) => (prev === "dark" ? "white" : "dark"));
  };
  return (
    <ColorModeContext.Provider
      value={{ theme: theme, changeTheme: colorModeHander }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ThemeContext;
