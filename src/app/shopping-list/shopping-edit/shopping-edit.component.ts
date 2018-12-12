import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  @ViewChild('ingName') nameInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.setFormRef(this.slForm);
  }

  onAddItem() {
    //Add
    if(!this.shoppingListService.startedEditing) {
      const value = this.slForm.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngredient(newIngredient);
    }
    //Update
    else {
      const value = this.slForm.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.updateIngredient(newIngredient);
    }
    this.nameInput.nativeElement.focus();
  }

  onCancel() {
    //Clear
    if(!this.shoppingListService.startedEditing) {
      this.shoppingListService.clearForm();
    }
    //Cancel
    else {
      this.shoppingListService.clearForm();
      this.shoppingListService.cancelEdit();
    }

    this.nameInput.nativeElement.focus();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient();

    this.nameInput.nativeElement.focus();
  }

}