import { Injectable } from '@angular/core';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];
  constructor() { }

  getAll(){
    return this.categories;
  }
  saveCategory(category : Category){
    this.categories.push(category)
  }
  findById(id: number){
     return this.categories[id];
  }
  updateCategory(id:number,category: Category){
    return this.categories[id] = category
  }
  deleteCategory(id: number){
    this.categories.splice(id,1)
  }

}
