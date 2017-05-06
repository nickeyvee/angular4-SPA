import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipie[] = [
    new Recipie('A test recipie', 'this is an example',
     'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg'),
    new Recipie('A test recipie', 'this is an example',
     'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
