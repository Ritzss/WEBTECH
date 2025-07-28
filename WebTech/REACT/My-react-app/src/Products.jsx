function Products(){ 
async function fetchProducts(){
let res = await fetch("https://fakestoreapi.com/products");
let data = await res.json();
return (data.map( item =>{
    <div>
    <h1>Product Title: {item.title}</h1>
    <p>Image : {item.image}</p>
    <p>price: {item.price}</p>
    </div>
} ))} fetchProducts();} 

export {Products};