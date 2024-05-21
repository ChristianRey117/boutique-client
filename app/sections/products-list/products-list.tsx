"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardProduct } from "../../components/card-product/card-product";
import { IProductList } from "@/app/interface/IProductList";
import { useRouter } from "next/navigation";

export default function ProductsList({ limit }: IProductList) {
  const [products, setProducts] = useState(Array<IProducts>);
  const _router = useRouter();
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        if (limit) {
          setProducts(data.slice(0, limit));
        } else {
          setProducts(data);
        }
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 style={{ margin: "5%" }}>Products</h2>
        {products.map((product) => {
          return (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
              <CardProduct
                id={product.id}
                title={product.title}
                text={product.description}
                image={product.image}
                price={product.quantity}
                key={product.id}
              ></CardProduct>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface IProducts {
  id: number;
  createAt: string;
  title: string;
  quantity: number;
  category: string;
  collection: string;
  image: string;
  description: string;
}
