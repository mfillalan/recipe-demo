import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from '.././models/recipe.model';
import { RecipeService } from '.././recipes/recipe.service';
import { AuthService } from '.././auth/auth.service';
import { MatSnackBar } from '@angular/material';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataStorageService { 
  constructor(
    private recipeService: RecipeService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    public db: AngularFireDatabase) {
  }

  storeRecipes(){
    const token = this.authService.getToken();

    this.db.object('/recipes').update(this.recipeService.getRecipes())
      .then(
        res => {
          this.snackBar.open("Recipes saved.", "Dismiss", {
            duration: 3000,
          });
        }
      );

    /*
    return this.http.put('https://angular-recipe-4235c.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    */
  }

  loadRecipes() {

    const token = this.authService.getToken();

    this.db.list('/recipes').valueChanges()
      .pipe(
        map(res => {
          const recipes: Recipe[] = res as Recipe[];
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe(
        (recipes: Recipe[]) => {
          console.log(recipes);
          
          this.recipeService.setRecipes(recipes);
          this.snackBar.open("Recipes Loaded.", "Dismiss", {
            duration: 3000,
          });
        }
      )

  }
}