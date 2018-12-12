import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { DropDownDirective } from './shared/dropdown.directive';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ClickOutsideDirective } from './shared/click-outside.directive';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyAtxxH7Afnv9C2Zxc-mNLIHyFiBxkbAL38",
  authDomain: "angular-recipe-4235c.firebaseapp.com",
  databaseURL: "https://angular-recipe-4235c.firebaseio.com",
  projectId: "angular-recipe-4235c",
  storageBucket: "angular-recipe-4235c.appspot.com",
  messagingSenderId: "1044039060438"
};


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ 
    AppComponent, 
    RecipesComponent, 
    RecipeListComponent, 
    RecipeDetailComponent, 
    RecipeItemComponent, 
    ShoppingListComponent, 
    ShoppingEditComponent,
    DropDownDirective,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent,
    ClickOutsideDirective
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
