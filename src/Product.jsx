import "./Product.css"

export const Product = ({ id, title, price, discount, imageUrl }) => {
    return (
        <li  className = "product__li" >
            <img className = "product__img" src={imageUrl} alt="" />
            {discount ?
                <div className = "product__price">
                    <span className="product__new-price">{price - (price * discount)}</span>
                    <span>   </span>
                    <span className="product__old-price">{price}</span>
                </div>
                :
                <div><span>{price}</span></div>
            }
            <h2 className = "product__h2">{title}</h2>
        </li>
    );
}