import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails'; 
import "../public/"
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios.get('http://localhost:8000/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => console.error(error));
  };

  const addRecipe = (newRecipe) => {
    axios.post('http://localhost:8000/api/recipes', newRecipe)
      .then(() => {
        fetchRecipes();
      })
      .catch(error => console.error(error));
  };

  const deleteRecipe = (id) => {
    axios.delete(`http://localhost:8000/api/recipes/${id}`)
      .then(() => {
        fetchRecipes();
      })
      .catch(error => console.error(error));
  };

  const updateRecipe = (updatedRecipe) => {
    axios.put(`http://localhost:8000/api/recipes/${updatedRecipe._id}`, updatedRecipe)
      .then(() => {
        fetchRecipes();
      })
      .catch(error => console.error(error));
  };


  const showDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeDetails = () => {
    setSelectedRecipe(null); 
  };

  return (
    <div>
    <h1>Zven's recipe sharing platform</h1>
    <AddRecipe addRecipe={addRecipe} />
    <RecipeList
      recipes={recipes}
      deleteRecipe={deleteRecipe}
      showDetails={showDetails}
      updateRecipe={updateRecipe} 
    />
    {selectedRecipe && <RecipeDetails recipe={selectedRecipe} closeDetails={closeDetails} />}
  </div>
);
};

export default App;
