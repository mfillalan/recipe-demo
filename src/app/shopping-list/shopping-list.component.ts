import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onEditItem(index: number) {
    console.log("Editing item: " + index);

    this.shoppingListService.setEditForm(index);
  }

}