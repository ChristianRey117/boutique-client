"use client";
import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CardUserShop, {
  IProductsUserShop,
} from "@/app/components/card-user-shop/card-user-shop";
export default function UserShop() {
  const router = useRouter();
  const [shop, setShop] = useState<Array<IShop>>();
  useEffect(() => {
    fetch("http://localhost:3000/shop?idUser=1")
      .then((res) => res.json())
      .then((data) => {
        setShop(data);
      });
  }, []);

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1>Your shopping</h1>
        </div>
      </div>

      <div className="row">
        {shop?.map((ishop) => {
          return (
            <div className="col-12 mb-4">
              <CardUserShop
                fechaCompra={ishop?.date}
                products={ishop?.products}
              ></CardUserShop>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface IShop {
  id: number;
  idUser: number;
  date: string;
  products: Array<IProductsUserShop>;
}

export interface IProductsShop {
  id: number;
  image: string;
  quantity: number;
  title: string;
}
