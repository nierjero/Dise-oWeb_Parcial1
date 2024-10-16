import React, { useState, useEffect } from 'react';

function AddRecipe({ onBack, recipeToEdit }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [preparation, setPreparation] = useState('');

  useEffect(() => {
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setType(recipeToEdit.type);
      setDescription(recipeToEdit.description);
      setPreparation(recipeToEdit.preparation);
    } else {
      setName('');
      setType('');
      setDescription('');
      setPreparation('');
    }
  }, [recipeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { name, type, description, preparation };

    if (recipeToEdit) {
      fetch(`http://localhost:3001/dishes/${recipeToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      })
        .then((response) => response.json())
        .then(() => {
          onBack(); 
        })
        .catch((error) => console.error('Error al editar la receta:', error));
    } else {
      fetch('http://localhost:3001/dishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      })
        .then((response) => response.json())
        .then(() => {
          onBack();
        })
        .catch((error) => console.error('Error al agregar la receta:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{recipeToEdit ? 'Editar Receta' : 'Agregar Receta'}</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <textarea
        placeholder="Preparación"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        required
      />
      <button type="submit">{recipeToEdit ? 'Actualizar' : 'Agregar'}</button>
      <button type="button" onClick={onBack}>Cancelar</button>
    </form>
  );
}

export default AddRecipe;
