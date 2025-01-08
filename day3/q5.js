const product = {id: 101, name: 'Laptop', price: 1000, category:'Electronics'}

function change(){
    return{
        ...product,
        discount:10,
        inStock:true,
    }
}
console.log(change(product))