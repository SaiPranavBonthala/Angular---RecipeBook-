import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Mango Lassi', 
            'A super tasty Mango Lassi -- just superb!!', 
            'https://www.whiskaffair.com/wp-content/uploads/2019/05/Mango-Lassi-1-3.jpg', 
            [ new Ingredient('mangoes', 2), new Ingredient('youghurt', 1)]
        ),

        new Recipe(
            'Palak Paneer', 
            'A simply superb combination of Palak and Paneer', 
            'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/05/palak-paneer-easy.jpg', 
            [ new Ingredient('paneer', 20), new Ingredient('palak', 5)]
        )
      ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}