const express = require('express');
const { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe, upload} = require('../controller/recipe');
const router = express.Router();
const veryifyToken = require('../middleware/auth');

router.get("/",getRecipes) // Get all Recipes
router.get("/:id",getRecipe) // Get recipe by id
router.post("/",upload.single('file'), veryifyToken, addRecipe) // Create a new recipe
router.put("/:id", upload.single('file'), veryifyToken, updateRecipe) // Update a recipe by id
router.delete("/:id",deleteRecipe) // Delete a recipe by id

module.exports = router;