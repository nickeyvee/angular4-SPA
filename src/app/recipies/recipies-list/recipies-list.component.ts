import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipie[] = [
    new Recipie('Pizza', 'this is an example',
     'http://barcodedc.com/wp-content/gallery/food/pizza-junk-food-600.jpg'),
    new Recipie('Cobb Salad', 'this is an example',
     'https://kathdedon.files.wordpress.com/2010/06/cobb-salad.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
