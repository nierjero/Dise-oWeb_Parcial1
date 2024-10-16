import React, { useState, useEffect } from 'react';
import './RecipeList.css'; 

function RecipeList({ onViewDetails, onAddRecipe }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dishes')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error al obtener recetas:', error));
  }, []);

  return (
    <div>
      <h1>Recetas Disponibles</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.name} ({recipe.type})</h2>
            <button onClick={() => onViewDetails(recipe)}>Ver detalles</button>
            <button onClick={() => handleDelete(recipe.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <button onClick={onAddRecipe}>Agregar Nueva Receta</button>
    </div>
  );

  function handleDelete(id) {
    fetch(`http://localhost:3001/dishes/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al eliminar receta');
        }
        return response.json();
      })
      .then(() => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => alert('No se pudo eliminar la receta. Inténtalo de nuevo.'));
  }
}

export default RecipeList;

