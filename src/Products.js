import Box from "./Box";
import ProductList from "./ProductList";

// import image1 from './Images/Watch1.png';
function getdata (data){
    return(
        <Box 
        key = {data.id}
        name = {data.name}
        image ={data.image}
        fullStar = {data.fullStar}
        halfStar = {data.halfStar}
        price = {data.price}
        cart = {data.cart}
        />
    )
}

function Products(){
    return <div className="Products" id='Products'>
        <h3 className="sub-heading">Our Products</h3>
        <h1 className="heading">Popular Products</h1>
        <div className="box-container">
            {ProductList.map(getdata)}

        </div>
    </div>
}

export default Products;