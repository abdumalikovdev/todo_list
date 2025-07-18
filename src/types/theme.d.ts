import { THEMES } from "./themes";

export type ThemeName = (typeof THEMES)[number]["name"];
export type ThemeCode = (typeof THEMES)[number]["code"];
