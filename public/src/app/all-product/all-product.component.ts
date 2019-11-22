import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  authors = [];

  constructor(
    private _httpService:HttpService,
    private _router:Router
    ) { }

  ngOnInit() {
    this._httpService.getAll()
    .subscribe((data:any)=> this.authors = data.authors);       
  }

  showUpdate(id){
    this._router.navigate(['/edit/'+id]);
  }
  showOneDetial(id){
    this._router.navigate(['/detial/'+id]);
  }
  deleteOne(id){
    this._httpService.deleteAuthor(id)
    .subscribe(()=>{
      this.authors=this.authors.filter(author=>author._id !=id);
    })
  }
}
