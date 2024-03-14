const express = require('express');
const router = express.Router();
const {getAllRecipes,createRecipe,getRecipeById,updateRecipe,deleteRecipe} = require('../controllers/recipeController');

router.get('/',getAllRecipes);
router.post('/',createRecipe);
router.get('/:id',getRecipeById);
router.put('/:id',updateRecipe);
router.delete('/:id',deleteRecipe);

module.exports = router