import React, { useState } from 'react';

const RecipeItem = ({ recipe, deleteRecipe, showDetails, updateRecipe }) => {
  const [updatedTitle, setUpdatedTitle] = useState(recipe.title);
  const [updatedIngredients, setUpdatedIngredients] = useState(recipe.ingredients);
  const [updatedInstructions, setUpdatedInstructions] = useState(recipe.instructions);

  const handleUpdate = () => {
    const updatedRecipe = {
      ...recipe, // takes the object to its properties 
      title: updatedTitle,
      ingredients: updatedIngredients,
      instructions: updatedInstructions
    };
    updateRecipe(updatedRecipe);
  };

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>
      <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
      <button onClick={() => showDetails(recipe)}>Details</button>
      <button onClick={handleUpdate}>Update</button> 
      <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} /> 
      <input type="text" value={updatedIngredients} onChange={(e) => setUpdatedIngredients(e.target.value)} /> 
      <input type="text" value={updatedInstructions} onChange={(e) => setUpdatedInstructions(e.target.value)} /> 
    </div>
  );
};

export default RecipeItem;



// const RecipeItem = ({ recipe, deleteRecipe, showDetails }) => {
//   return (
//     <div>
//       <h3>{recipe.title}</h3>
//       <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
//       <button onClick={() => showDetails(recipe)}>Details</button>
//     </div>
//   );
// };


