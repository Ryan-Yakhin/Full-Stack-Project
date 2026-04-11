import React from 'react';
import './App.css';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainNavigation from './components/MainNavigation';
//import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import API from './api/api';

const getAllRecipes = async () => {
  let allRecipes = []
  await API.get('/recipe').then(res => {
    allRecipes = res.data
  })
  return allRecipes;
}

const getMyRecipe = async () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let allRecipes = await getAllRecipes();
  return allRecipes.filter(item => item.createdBy === user._id);
}

const getFavRecipes = async () => {
  return JSON.parse(localStorage.getItem("fav")) ?? [];
}

const router = createBrowserRouter([
  {path:"/", element:<MainNavigation/>, children: [
    {path:"/", element:<Home/>, loader: getAllRecipes},
    {path:"/myRecipe", element:<Home/>, loader: getMyRecipe},
    {path:"/addRecipe", element:<AddFoodRecipe/>},
    {path:"/favRecipe", element:<Home/>, loader: getFavRecipes},
    {path:"/editRecipe/:id", element:<EditRecipe/>}
  ]}
])
  

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
