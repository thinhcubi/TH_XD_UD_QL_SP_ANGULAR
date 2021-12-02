import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(
         private categoryService : CategoryService,
         private activatedRoute : ActivatedRoute,
         private route : Router
  ) { }

  ngOnInit(): void {
    let id = !this.activatedRoute.snapshot.paramMap.get('id')
    // @ts-ignore
    this.categoryService.deleteCategory(id);
    this.route.navigate(['category/list'])
  }

}
