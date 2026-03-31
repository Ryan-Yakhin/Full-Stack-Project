const Recipes = require("../models/recipe")

const getRecipes = async (req,res)=>{
    const recipes = await Recipes.find()
    res.json(recipes)
}

const getRecipe = async (req,res)=>{
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req,res)=>{
    const {title,ingredients,instructions} = req.body

    if(!title || !ingredients || !instructions){
        return res.status(400).json({message:"Please fill all the fields"})
    }

    const newRecipe = await Recipes.create({
        title,
        ingredients,
        instructions
    })
    return res.status(201).json(newRecipe)
}

const updateRecipe = async (req,res)=>{
    const {title,ingredients,instructions} = req.body
    let recipe = Recipes.findById(req.params.id)

    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({title,ingredients,instructions})
        } 
    } catch (err) {
        return res.status(404).json({message:"Error"})
    }
    
}

const deleteRecipe = (req,res)=>{
    res.json({message:"Hello"})
}


module.exports = {
    getRecipes,
    getRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe
}