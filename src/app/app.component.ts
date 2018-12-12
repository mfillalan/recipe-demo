import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';
  isCollapsed = true;

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onSaveData() {
     this.dataStorageService.storeRecipes();
  }

  onLoadData() {
    this.dataStorageService.loadRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  onClickOutside(event: Object) {
    console.log("Directive clickOuside ran.");
    this.isCollapsed = true;
  }

}
