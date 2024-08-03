interface Items {
  id : string,
  name : string,
  price : number,
  quantity : number,
};

class Product {
  private items : Items [] = [];
  constructor(){

  };
  addProduct(item: Items) : void{
    this.items.push(item);
  };
  removeProduct(itemId: string): void{
    this.items = this.items.filter((item)=> item.id !== itemId);
  };
  checkExistProduct(itemId: string):Boolean{
    const result = this.items.find((item)=> item.id === itemId)!;
    if(result) return true;
    return false;
  };
  updateProduct(itemId: string, items:Items[]): void{
    const result = this.items.find((item)=> item.id === itemId);
    if(result){
       this.items = items;
       console.log(items);
    };
    

  };
  getProduct(): Items[]{
    return this.items;
  }
 
};
const cart = new Product();

const product1: Items = { id: "1", name: 'watch', price: 19.99, quantity:1 };
const product2: Items = { id: "2", name: 'iphone', price: 999.99, quantity:3 };

cart.addProduct(product1);
cart.addProduct(product2);

console.log('Cart items:', cart.getProduct());

