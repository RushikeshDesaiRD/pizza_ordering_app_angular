export class Pizza{
  id:number;
  name:string;
  category:string;
  price:number;
  des:string;
  imageUrl:string;
  constructor(id, name, category, price=0, des, imageUrl){
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.des = des;
    this.imageUrl = imageUrl;
  }
}
