import { useState } from 'react'
import './App.css'
import { ABInput } from './Components/ABInput'
import { Desmontador } from './Components/Desmontable'
import { NewProps } from './Components/NewProps'
import { ToDos } from './Components/ToDos'
import { Posts } from './Components/callAPIHook/Posts'
import { JsonButton } from './Components/JsonButton'

function App() {

  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <>
      <ABInput />
      <hr />
      <Desmontador />
      <hr />
      <NewProps count={count} />
      <button onClick={onClickHandler}>Cambiar props</button>
      <hr />
      <JsonButton>
        <ToDos />
      </JsonButton>
      <hr />
      <JsonButton>
        <Posts />
      </JsonButton>
    </>
  )
}

export default App
