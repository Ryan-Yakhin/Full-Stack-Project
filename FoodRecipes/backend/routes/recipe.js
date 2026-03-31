const express = require('express');
const { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe } = require('../controller/recipe');
const router = express.Router();

router.get("/",getRecipes) // Get all Recipes
router.get("/:id",getRecipe) // Get recipe by id
router.post("/",addRecipe) // Create a new recipe
router.put("/:id",updateRecipe) // Update a recipe by id
router.delete("/:id",deleteRecipe) // Delete a recipe by id

module.exports = router;