import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryEditForm?: FormGroup;
  id : number
  constructor(private categoryService : CategoryService,
              private activatedRoute : ActivatedRoute,
              private router : Router
  ) {
    // @ts-ignore
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')
    const category = this.categoryService.findById(this.id)
    this.categoryEditForm = new FormGroup({
      id: new FormControl(category.id),
      name: new FormControl(category.name
      )
    })
  }

  ngOnInit(): void {
  }
  getCategory(id: number){
    return this.categoryService.findById(id);
  }
  updateCategory(id : number){
    const category = this.categoryEditForm?.value;
    this.categoryService.updateCategory(id,category);
    alert('Cap nhat thanh cong')
  }

}
