"use server";

import { NextRequest, NextResponse } from "next/server";
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51HC3wNFnvtJccTeWBFXGho6m0mEuoP7BK0bayWS4gxd69YavllEMoNddDIu17Ou91WVdCwbbPAisf0hiYGwFuADQ00DTJ6WfD2"
);

export async function POST(request: NextRequest) {
  const data: Array<ICardCartShop> = await request.json();
  console.log("REQUEST----", data);

  // Convertir a formato line_items de Stripe
  const line_items = [
    data[0].productsId.map((product) => {
      return {
        price_data: {
          currency: "MXN",
          product_data: {
            name: product.title,
            images: [
              "https://s1.elespanol.com/2023/07/19/elbernabeu/780182500_234819104_1706x1280.jpg",
            ],
          },
          unit_amount: (product.price * 100) / product.quantity,
        },
        quantity: product.quantity,
      };
    })[0],
    {
      price_data: {
        currency: "MXN",
        product_data: {
          name: "Costo de envío",
        },
        unit_amount: 5 * 100,
      },
      quantity: 1,
    },
  ];

  console.log("line-items-------", line_items);
  fetch("http://localhost:3000/shop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      idUser: data[0].idUser,
      date: data[0].date,
      products: data[0].productsId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {});

  fetch("http://localhost:3000/cartShop/" + data[0].id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {});

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: "http://localhost:1811/pages/user-shop/id",
    cancel_url: "http://localhost:1811/pages/cart",
  });

  console.log("session url---------", session.url);
  return NextResponse.json(session.url);
}

export interface ICardCartShop {
  id: number;
  idUser: number;
  date: string;
  productsId: IProductsId[];
}

export interface IProductsId {
  id: number;
  size: string;
  quantity: number;
  title: string;
  image: string;
  price: number;
}
