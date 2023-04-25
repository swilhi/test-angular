import { Component, OnInit } from '@angular/core';
import { Ameni } from '../ameni';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
name="bonjour 4ARCTIC 7"
prop:boolean=false
message:string=''
prop1="bonjour"
prixMax:number=0;
listAmeni:Ameni[]=[]

product!: Product;
list!: Product[] ;

  constructor() { }

  // ngOnInit(): void {
  //   this.listAmeni=[
  //     {id: 1, title: "T-shirt 1", nbr_hour:3},
  //     {id: 2, title: "T-shirt 2", nbr_hour:2},
  //     {id: 3, title: "T-shirt 3", nbr_hour:1}, ]

  // }
  ngOnInit(): void {
    this.product=new Product();
    this.list=[]
  }

  add(){
    this.list.push(this.product)
    console.log(JSON.stringify(this.list))
  }

}

class Product{
  id:any;
  title:any;
  price:any;
  nbr_hour:any ;
  like:any;

 /* constructor(id?:number,title?:string,price?:number,quantity?:number ,like?:number){
      this.id = id|| 0;
      this.title = title||'';
      this.price = price||0;
      this.quantity=quantity||0;
      this.like=like||0
  }*/

}