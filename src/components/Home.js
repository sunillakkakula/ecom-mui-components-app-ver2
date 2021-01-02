import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Message from "./Message";
import Loader from "./Loader";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((prd) => (
            <Col key={prd._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={prd} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
