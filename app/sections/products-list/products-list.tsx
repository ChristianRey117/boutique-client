"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardProduct } from "../../components/card-product/card-product";

export default function ProductsList() {
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    fetch("https://662a68c267df268010a3d00f.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product: any) => {
          return (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
              <CardProduct
                title={product.name}
                text={product.text}
                image={product.image}
                price={product.price}
                key={product.id}
              ></CardProduct>
            </div>
          );
        })}
      </div>
    </div>
  );
}
