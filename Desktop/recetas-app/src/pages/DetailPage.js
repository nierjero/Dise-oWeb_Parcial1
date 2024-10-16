import React from 'react';
import RecipeDetails from '../components/RecipeDetails';

function DetailPage({ recipe, onBack, onEdit }) {
    return (
        <div>
            <button onClick={onBack}>Volver</button>
            <RecipeDetails recipe={recipe} onEdit={onEdit} /> 
        </div>
    );
}

export default DetailPage;

