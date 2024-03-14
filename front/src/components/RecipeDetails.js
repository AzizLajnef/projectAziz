import React from 'react';

const RecipeDetails = ({ recipe, closeDetails }) => {
  console.log('Image URL:', recipe.imageUrl)
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
      <p> <img src={recipe.imageUrl} alt="" /> </p>
      <button onClick={closeDetails}>Close</button>
    </div>
  );
};

export default RecipeDetails;
