import React from 'react';
import './App.css';
import Title from './Components/Title';
import Text from './Components/Text';
import List from './Components/List';
import ListItem from './Components/ListItem';
import Link from './Components/Link';
import Loading from './Components/Loading';

function App() {
  return (
    <div>
      <Loading show={true}>
        <Title text="Necesito partir en componentes todo esto" />
        <Text text="Para ello puedo usar React que me permitirá reutilizar todos esos componentes. Para ello tengo que:" />
        <List>
          <ListItem text="Observar el HTML"></ListItem>
          <ListItem text="Pensar en cómo puedo extraer cada parte en componentes"></ListItem>
          <ListItem text="Usarlos, o mejor dicho, reusarlos en React"></ListItem>
        </List>

        <Link href="https://react.dev/" openInNewTab={true}>React Docs</Link>
      </Loading>

    </div>
  );
}

export default App;
