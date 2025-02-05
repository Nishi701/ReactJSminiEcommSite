//naved export
import { ProductList } from "../utils/constant";
import Product from "./Product";
export const ProductCard = () =>{
    return(
      <div className='productCard' >
        {
          ProductList.map((product)=>{
            return (
              <Product key={product.id} product={product}/>
            )
          })
        }
      </div>
    );
  };