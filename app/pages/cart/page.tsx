"use client";

import { IProducts } from "@/app/sections/products-list/products-list";
import { ProgressBar } from "primereact/progressbar";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
export default function ProductsPage() {
  const [selectedCity, setSelectedCity] = useState();
  const [cart, setCart] = useState<ICardCartShop>();
  const [priceTotal, setPriceTotal] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3000/cartShop?idUser=1")
      .then((res) => res.json())
      .then((data: ICardCartShop[]) => {
        setCart(data[0]);
        let price = 0;
        data[0]?.productsId.map((product: IProductsId) => {
          price = price + product.quantity * product.price;
          console.log(price);
          setPriceTotal(price);
        });
      });
  }, []);
  return (
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-12 mb-3">
                <h1>Your Cart</h1>
              </div>
              <div className="col-12 mb-2">
                <p style={{ textAlign: "center" }}>
                  your order is eligeble for free shipping!
                </p>
              </div>

              <div className="col-12 mb-3" style={{ textAlign: "center" }}>
                <ProgressBar
                  color="green"
                  value={100}
                  style={{ height: "10px", width: "90%", marginRight: "5%" }}
                ></ProgressBar>
              </div>

              {cart?.productsId.map((product: IProductsId) => {
                return (
                  <div className="col-12 mb-3">
                    <Card style={{ borderRadius: "30px", height: "180px" }}>
                      <div className="row" style={{ margin: "auto" }}>
                        <div className="col-3">
                          <img src={product.image} alt="" />
                        </div>

                        <div className="col-6">
                          <div className="row">
                            <div className="col-12">
                              <p>{product.title}</p>
                            </div>

                            <div className="col-12">
                              <p>CA$ {product.price}</p>
                            </div>

                            <div className="col-12">
                              <p>
                                <span>Size: </span>
                                {product.size}
                              </p>
                            </div>

                            <div className="col-12">
                              <InputGroup style={{ width: "120px" }}>
                                <InputGroup.Text>-</InputGroup.Text>
                                <Form.Control
                                  style={{ textAlign: "center" }}
                                  defaultValue={product.quantity}
                                  aria-label="coutProducts"
                                />
                                <InputGroup.Text>+</InputGroup.Text>
                              </InputGroup>
                            </div>
                          </div>
                        </div>

                        <div className="col-3">
                          <p>
                            CA$
                            {product.quantity * product.price}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-6">
            <div className="row" style={{ marginTop: "15%" }}>
              <div className="col-12">
                <Card style={{ height: "300px" }}>
                  <div className="row" style={{ margin: "30px" }}>
                    <div className="col-12">
                      <h3>ORDER SUMMARY</h3>
                    </div>
                  </div>

                  <div className="row" style={{ margin: "30px" }}>
                    <div className="col-6">
                      <p>SUBTOTAL: </p>
                    </div>
                    <div className="col-6">
                      <p>CA$ {priceTotal}</p>
                    </div>

                    <div className="col-12" style={{ marginTop: "12%" }}>
                      <Button
                        variant="success"
                        style={{
                          width: "100%",
                        }}
                      >
                        CHECKOUT
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
