import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormEdit?: FormGroup
  constructor(private productService: ProductService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router
              ) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    let product = this.productService.findById(id);
    this.productFormEdit = this.fb.group({
      id: [product.id, [Validators.required]],
      name: [product.name],
      price: [product.price],
      description: [product.description]
    })


  }
  submit(){
    // @ts-ignore
    let index = +this.router.snapshot.paramMap.get('id');
    let data = this.productFormEdit?.value
    this.productService.updateProduct(index,data)
    this.route.navigate(['product/list'])
  }

}
