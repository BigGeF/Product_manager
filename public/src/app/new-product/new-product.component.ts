import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  author= {
    name:'',
    qty:null,
    price:null
  }

  errors=[];

  constructor(
    private _httpService :HttpService,
    private _router:Router,
  ) { }

  ngOnInit() {
  }
  
  submitForm(){
    this.errors=[]
    this._httpService.newOne(this.author)
    .subscribe((data:any)=>{
      if(data.hasOwnProperty('errors')) {
        for(let key in data.errors){
          this.errors.push(data.errors[key].message);
        }
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
