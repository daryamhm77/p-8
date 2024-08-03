;
var Product = /** @class */ (function () {
    function Product() {
        this.items = [];
    }
    ;
    Product.prototype.addProduct = function (item) {
        this.items.push(item);
    };
    ;
    Product.prototype.removeProduct = function (itemId) {
        this.items = this.items.filter(function (item) { return item.id !== itemId; });
    };
    ;
    Product.prototype.checkExistProduct = function (itemId) {
        var result = this.items.find(function (item) { return item.id === itemId; });
        if (result)
            return true;
        return false;
    };
    ;
    Product.prototype.updateProduct = function (itemId, items) {
        var result = this.items.find(function (item) { return item.id === itemId; });
        if (result) {
            this.items = items;
            console.log(items);
        }
        ;
    };
    ;
    Product.prototype.getProduct = function () {
        return this.items;
    };
    return Product;
}());
;
var cart = new Product();
var product1 = { id: "1", name: 'watch', price: 19.99, quantity: 1 };
var product2 = { id: "2", name: 'iphone', price: 999.99, quantity: 3 };
cart.addProduct(product1);
cart.addProduct(product2);
console.log('Cart items:', cart.getProduct());
