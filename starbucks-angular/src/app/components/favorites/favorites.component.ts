import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  active = 1; 
  constructor() { }

  ngOnInit(): void {
  }

}
