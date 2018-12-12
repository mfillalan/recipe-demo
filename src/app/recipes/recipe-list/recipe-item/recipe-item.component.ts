import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../recipe.service';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  flipCard: boolean;

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
  }

  navigate(index: number) {
    this.router.navigate([index], { relativeTo: this.route });
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEditRecipe() {
    //this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate([this.index, 'edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }

}