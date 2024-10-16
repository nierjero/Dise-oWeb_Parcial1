import React, { useState } from 'react';
import Homepage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddRecipe from './components/AddRecipe';
import './styles.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [darkMode, setDarkMode] = useState(false); 

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage('details');
  };

  const handleAddRecipe = () => {
    setCurrentPage('add');
    setSelectedRecipe(null); 
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedRecipe(null);
  };

  const handleEditRecipe = (recipe) => {
    console.log('Editar receta:', recipe);
    setSelectedRecipe(recipe); 
    setCurrentPage('add'); 
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); 
  };

  return (
    <div>
      <button onClick={toggleDarkMode} style={{ margin: '10px' }}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      {currentPage === 'home' && (
        <Homepage onViewDetails={handleViewDetails} onAddRecipe={handleAddRecipe} />
      )}
      {currentPage === 'details' && selectedRecipe && (
        <DetailPage 
          recipe={selectedRecipe} 
          onBack={handleBack} 
          onEdit={handleEditRecipe} 
        />
      )}
      {currentPage === 'add' && (
        <AddRecipe 
          onBack={handleBack} 
          recipeToEdit={selectedRecipe} 
        />
      )}
    </div>
  );
}

export default App;
