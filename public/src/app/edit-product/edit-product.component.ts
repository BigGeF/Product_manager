import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  thisauthor :  []
  //原来这里只有null，所以前端就会显示：ERROR TypeError: Cannot read property 'name' of null，改成【null]就好了
  errors=[];

  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this._route.params
    .subscribe((params:Params)=>{
      this._httpService.getOnebyId(params.id)
        .subscribe((data:any)=>this.thisauthor=data.author);
    })
  }//从数据库拿到id,所有在下面就直接写 thisauthor._id就好
  submitForm(){
    console.log(this.thisauthor);
    this.errors=[]
    this._httpService.updateOne(this.thisauthor._id,{
      name:this.thisauthor.name,qty:this.thisauthor.qty,price:this.thisauthor.price
    })
    .subscribe((data:any)=>{
      if(data.hasOwnProperty("errors")){
        for(let key in data.errors){
          this.errors.push(data.errors[key].message);
        }      }
      else{
        this._router.navigate(['/'])
      }
    })
  }

}
