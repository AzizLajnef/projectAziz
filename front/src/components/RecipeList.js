import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, deleteRecipe, showDetails, updateRecipe }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeItem key={recipe._id} recipe={recipe} deleteRecipe={deleteRecipe} showDetails={showDetails} updateRecipe={updateRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;
