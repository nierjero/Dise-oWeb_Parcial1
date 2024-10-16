import React from 'react';
import RecipeList from '../components/RecipeList';

function Homepage({ onViewDetails, onAddRecipe }) {
  return (
    <div>
      <h1>Bienvenido al Libro de Recetas</h1>
      <RecipeList onViewDetails={onViewDetails} onAddRecipe={onAddRecipe} />
    </div>
  );
}

export default Homepage;
