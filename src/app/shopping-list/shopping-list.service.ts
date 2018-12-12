import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {

  ingredients: Ingredient[] = [];
  startedEditing: boolean = false;
  editingIndex: number = -1;
  editingIngredient: Ingredient;
  slForm: NgForm;

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    this.clearForm();
  }

  setEditForm(index: number) {
    this.editingIndex = index;
    this.editingIngredient = this.ingredients[index];
    const name = this.ingredients[index].name;
    const amount = this.ingredients[index].amount;
    this.slForm.setValue({
      name: name,
      amount: amount
    });
    this.startedEditing = true;
  }

  setFormRef(form: NgForm) {
    this.slForm = form;
  }

  updateIngredient(ingredient: Ingredient) {
    this.ingredients[this.editingIndex] = ingredient;

    this.cancelEdit();
  }

  cancelEdit() {
    this.startedEditing = false;
    this.editingIndex = -1;
    this.editingIngredient = null;

    this.clearForm();
  }

  clearForm() {
    this.slForm.setValue({
      name: '',
      amount: ''
    });
  }

  deleteIngredient() {
    this.ingredients.splice(this.editingIndex, 1);
    this.cancelEdit();
  }

}