import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/slices/ProductSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(loadProducts(data));
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
