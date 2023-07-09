import { createContext } from "react";

export type Language = "es" | "en";

const LanguageContext = createContext<Language>('es');

export default LanguageContext;