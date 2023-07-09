import { useContext } from "react";
import LanguageContext from "../../Contexts/LanguageContext";
import SpanishText from "./Texts/SpanishText";
import EnglishText from "./Texts/EnglishText";

function MainText () {

    const language = useContext(LanguageContext);

    if(language === "es"){
        return <SpanishText />;
    } else {
        return <EnglishText />;
    }
}

export default MainText;