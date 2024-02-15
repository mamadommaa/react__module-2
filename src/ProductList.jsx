import { Product } from "./Product"
import "./ProductList.css";

export const ProductList = ({products}) => {
    return (
        <ul className = "product-list__ul">
            {
                products.map((ul) => {
                    return <Product
                        key={ul.id}
                        title={ul.title}
                        price={ul.price}
                        discount={ul.discount}
                        imageUrl={ul.imageUrl} >
                        </Product>
                })
            }
        </ul>
    );
}