import { useState } from 'react'
import './App.css'
import LanguageButton from './Components/LanguageButton'
import LanguageContext from './Contexts/LanguageContext';
import { Language } from './Contexts/LanguageContext';
import MainText from './Components/Main Text/MainText';

function App() {

  const [language, setLanguage] = useState<Language>("es");

  return (
    <>
      <LanguageContext.Provider value={language}>
        <MainText />
        
        <LanguageButton setLanguage={setLanguage}/>
      </LanguageContext.Provider>
    </>
  )
}

export default App
