import axios from "axios";
import React, { useEffect, useState } from "react";
import { getLocalStorageData } from "../module/LocalStorageApi";
import Card from "../components/Card";

function Cart() {
  const isLocal = false;
  const BackendUrl = isLocal
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_BACKEND_URL;
  const [resposnseData, setResponseData] = useState([]);

  const localstorageData = JSON.stringify(getLocalStorageData("cartData"));
  const getDataFromDatabase = async () => {
    let response = await axios.get(
      `${BackendUrl + "cartData?cartitems=" + localstorageData}`
    );
    setResponseData(response.data);
  };

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  return (
    <>
      {resposnseData.map((data) => {
        return (
          <Card
            productname={data.ProductName}
            price={data.ProductPrice}
            productid={data._id}
            imageurl={BackendUrl + data.Paths[0].path}
          />
        );
      })}
    </>
  );
}

export default Cart;
