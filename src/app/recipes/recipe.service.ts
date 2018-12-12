import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';


export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      'Beet Kvass', 
      'Fermented beet juice like kombucha.',
      'https://media.mercola.com/assets/images/foodfacts/beets-nutrition-facts.jpg',
      [
        new Ingredient('Beet', 2),
        new Ingredient('Salt', 1),
        new Ingredient('Water', 1)
      ]
    ),
    new Recipe(
      'Green Detox Smoothie',
      'Powerful smoothie for detoxing.',
      'https://www.twopeasandtheirpod.com/wp-content/uploads/2012/01/green-smoothie1.jpg',
      [
        new Ingredient('Kale', 3),
        new Ingredient('Ginger', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Lemon', 1),
        new Ingredient('Pineapple', 1),
        new Ingredient('Mango', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //copy of recipes array.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }

}