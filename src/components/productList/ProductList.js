import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData} from "../../redux/slices/ProductSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import './ProductList.css';
import { Spin } from 'antd';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector(state => state.productReducer.status);
  
  useEffect(() => {
    dispatch(fetchData())
  }, []);

  if(status === 'loading'){
    return <Spin className='loading'/>
  }

  if(status === 'failed'){
    return <h2 className="loading">Oh! no Something Went Wrong...</h2>
  }

  return (
    <div className="singleProduct">
      {products.map((item) => {
        return <SingleProduct product={item}/>
      })}
    </div>
  );
}
export default ProductList;
