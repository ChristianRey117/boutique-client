"use client";
import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CardUserShop from "@/app/components/card-user-shop/card-user-shop";
export default function UserShop() {
  const router = useRouter();

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1>Your shopping</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <CardUserShop
            fechaCompra="2024-05-15"
            products={[
              {
                image: "/images/camisa-real.jpg",
                title: "Title Mens Real Madrid 2023/24 Third Jersey",
                quantity: 4,
              },

              {
                image: "/images/camisa-real.jpg",
                title: "Title Mens Real Madrid 2023/24 Third Jersey",
                quantity: 4,
              },
            ]}
          ></CardUserShop>
        </div>
      </div>
    </div>
  );
}
