import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-get-one-product',
  templateUrl: './get-one-product.component.html',
  styleUrls: ['./get-one-product.component.css']
})
export class GetOneProductComponent implements OnInit {
  thisauthor =  [];


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
  }
  EtGoHome(){
    this._router.navigate(['']);
  }
  deleteOne(id){
    this._httpService.deleteAuthor(id)
    .subscribe(()=>{
      this.thisauthor=this.thisauthor.filter(author=>author._id !=id);
    })
    
    this._router.navigate(['/'])
  }
}
