import React from 'react';
import { CategoryProvider } from './context/CategoryContext';
import CategoryButton from './components/CategoryButton';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const categories = ['Alimentos', 'Armaduras', 'Encantamentos', 'Decorações', 'Eventos', 'Itens', 'Locais', 'Monstros', 'Habilidades', 'Armas'];

  return (
    <CategoryProvider>
      <div className="App">
        <header className="App-header">
          <h1>Categorias</h1>
          {categories.map(category => (
            <CategoryButton key={category} category={category} />
          ))}
          <ItemList />
        </header>
      </div>
    </CategoryProvider>
  );
}

export default App;