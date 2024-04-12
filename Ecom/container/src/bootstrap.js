import { mount as productsmount } from 'productsApp/ProductsIndex';
import { mount as cartsmount } from 'cartsApp/CartShow'

console.log("Container");

productsmount(document.querySelector('#my-products-app'));
cartsmount(document.querySelector('#my-carts-app'));