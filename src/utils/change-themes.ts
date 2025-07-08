import { THEMES } from "@/themes/themes";

export const changeTheme = (themeName: keyof typeof THEMES) => {
  const theme = THEMES[themeName];
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
    root.style.setProperty(key, value);
  }
};
