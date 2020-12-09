import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Scrambled eggs", "Scramble the eggs", "http://t3.gstatic.com/images?q=tbn:ANd9GcRNiF6rn5PxDw6NRxawYt2mSmj2SsRVLxmjCvTO6JWpGkol-h_VWxVolM_JrfMpF7n2Hw2zbwCbdFZxTmmj7xE"),
    new Recipe("Scrambled eggs", "Scramble the eggs", "http://t3.gstatic.com/images?q=tbn:ANd9GcRNiF6rn5PxDw6NRxawYt2mSmj2SsRVLxmjCvTO6JWpGkol-h_VWxVolM_JrfMpF7n2Hw2zbwCbdFZxTmmj7xE")
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
