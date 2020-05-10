import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  womenProducts,
  menProducts,
  addOrder,
} from "../../ProductReducer/store";
import Product from "./Product";
import MenProduct from "./MenProducts";
import WomenProducts from "./WomenProducts";
import Divider from "../Divider/Divider";

const AllProduct = () => {
  const dispatch = useDispatch();
  const [showActive, setShowActive] = useState({
    all: true,
    men: false,
    women: false,
  });
  const loading = useSelector(({ products }: any) => products.loading);
  const women_loading = useSelector(
    ({ products }: any) => products.women_loading
  );
  const men_loading = useSelector(({ products }: any) => products.men_loading);
  let products: any = useSelector(
    ({ products: { products } }: any) => products
  );
  let women: any = useSelector(({ products: { women } }: any) => women);
  let men: any = useSelector(({ products: { men } }: any) => men);
  React.useEffect(() => {
    fetchProducts(dispatch);
    womenProducts(dispatch);
    menProducts(dispatch);
  }, []);

  const handleCart = (order: any) => {
    addOrder(dispatch, order, "1");
  };
  const handleView = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Product
        products={products}
        loading={loading}
        showActive={showActive}
        setShowActive={setShowActive}
        dispatch={dispatch}
        handleCart={handleCart}
        handleView={handleView}
      />
      <Divider name='Men' image='./images/fashion5.jpg' />
      <MenProduct
        products={men}
        loading={men_loading}
        showActive={showActive}
        setShowActive={setShowActive}
        dispatch={dispatch}
        handleCart={handleCart}
        handleView={handleView}
      />
      <Divider name='Women' image='./images/fashion6.jpg' />
      <WomenProducts
        products={women}
        loading={women_loading}
        showActive={showActive}
        setShowActive={setShowActive}
        dispatch={dispatch}
        handleCart={handleCart}
        handleView={handleView}
      />
    </div>
  );
};

export default AllProduct;
