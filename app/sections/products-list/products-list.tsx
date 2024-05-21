"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardProduct } from "../../components/card-product/card-product";
import { IProductList } from "@/app/interface/IProductList";
import { useRouter } from "next/navigation";

export default function ProductsList({
  limit,
  collection,
  nameProductFilter,
}: any) {
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
        <h2 style={{ margin: "2%" }}>Products</h2>
        <div className="col-12">
          <h3 style={{ textAlign: "center", margin: "2%", padding: "2%" }}>
            {collection}
          </h3>
        </div>
        {products.map((product) => {
          if (collection || nameProductFilter) {
            if (
              collection == product.collection ||
              product.title.indexOf(nameProductFilter) > -1
            ) {
              console.log("Name", nameProductFilter);
              return (
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
                  <CardProduct
                    id={product.id}
                    title={product.title}
                    text={product.description}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                    key={product.id}
                  ></CardProduct>
                </div>
              );
            }
          } else {
            return (
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
                <CardProduct
                  id={product.id}
                  title={product.title}
                  text={product.description}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                  key={product.id}
                ></CardProduct>
              </div>
            );
          }
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
  price: number;
}
