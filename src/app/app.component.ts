import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title='pr';
listecours=["c1","c2","c3"];
nombre=[8,2,3];
couleur="rouge";
voiture=[{mat:1,marque:'rang',couleur:'rouge'},{mat:10,marque:'bmw',couleur:'noir'},{mat:100,marque:'passat',couleur:'blanc'}];
}
