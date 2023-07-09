import { useContext } from "react";
import LanguageContext from "../Contexts/LanguageContext";
import { Language } from "../Contexts/LanguageContext";


export default function LanguageButton({ setLanguage } : { setLanguage: React.Dispatch<React.SetStateAction<Language>> }) {

    const language = useContext(LanguageContext);

    function onClickHandler() {
        setLanguage(language === "es" ? "en" : "es");
    }

    return (
        <button onClick={onClickHandler}>{language === "es" ? "Cambiar idioma" : "Change language"}</button>
    );
}