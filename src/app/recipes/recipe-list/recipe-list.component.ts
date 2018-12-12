import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from '../.././auth/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(
    public recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onNewRecipe() {
    if(!this.authService.isAuthenticated()) {
      this.snackBar.open("Please login to add recipes.", "Dismiss", {
        duration: 3000,
      });
    }
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}