import React from 'react';
import './RecipeDetails.css';

function RecipeDetails({ recipe, onEdit }) {
  if (!recipe) {
    return <div>No se encontró la receta.</div>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.name}</h1>
      <h2>Tipo: {recipe.type}</h2>
      <p><strong>Descripción:</strong> {recipe.description}</p>
      <p><strong>Preparación:</strong> {recipe.preparation}</p>
      <button onClick={() => onEdit(recipe)}>Editar</button> 
    </div>
  );
}

export default RecipeDetails;

