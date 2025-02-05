const Product =({product}) =>{
    const {image,title,price,rating} = product;
    return(
      <div className="product">
        <img className="product-img" src={image} />
        <h3>{title}</h3>
        <p>{rating.rate}: Ratings</p>
        <p>price:{price}</p>
      </div>
    );
  };
  export default Product;