"use client";
import React, { useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { Form, InputGroup } from "react-bootstrap";
import { IProducts } from "@/app/sections/products-list/products-list";
import { SelectButton } from "primereact/selectbutton";
import { useRouter } from "next/navigation";

const items = [
  {
    id: "S",
    name: "S",
  },
  {
    id: "M",
    name: "M",
  },
  {
    id: "L",
    name: "L",
  },
];

export default function ProductsPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<IProducts>();
  const [id, setId] = useState<any>();
  const [size, setSize] = useState<any>();

  const _router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    setId(id);
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const submitCart = (event: any) => {
    event.preventDefault();
    const data = {
      idUser: 1,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      productsId: [
        {
          id: product?.id,
          size: size?.name,
          title: product?.title,
          image: product?.image,
          quantity: quantity,
          price: product?.price,
        },
      ],
    };

    fetch("http://localhost:3000/cartShop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        _router.push("/pages/cart");
      });
  };

  return (
    <div className="container" style={{ margin: 0, padding: 0 }}>
      <div className="row" style={{ margin: 0 }}>
        <div className="col-8" style={{ margin: 0, padding: 0 }}>
          <img src={product?.image} alt="" />
        </div>

        <div className="col-4">
          <div className="row">
            <div className="col-12" style={{ margin: "40px 0px 40px 0px" }}>
              <h1>{product?.title}</h1>
            </div>

            <div className="col-12" style={{ margin: "40px 0px 40px 0px" }}>
              <h3>CA$ {product?.price}</h3>
            </div>

            <div className="col-12" style={{ margin: "40px 0px 40px 0px" }}>
              <h3>Available: {product?.quantity}</h3>
            </div>

            <hr />
          </div>

          <div className="row">
            <div className="col-12" style={{ margin: "15px 0px 0px 0px" }}>
              <p>Sizes</p>
            </div>

            <div className="col-12" style={{ margin: "0px 0px 40px 0px" }}>
              <div className="row size-button">
                <div className="col-12">
                  <SelectButton
                    onChange={(e: any) => setSize(e.value)}
                    optionLabel="name"
                    options={items}
                  />
                </div>
              </div>
            </div>

            <hr />

            <div
              className="col-12"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "40px",
              }}
            >
              <div className="row">
                <div className="col-6">
                  <InputGroup style={{ width: "120px" }}>
                    <InputGroup.Text
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      <button>-</button>
                    </InputGroup.Text>
                    <Form.Control
                      style={{ textAlign: "center" }}
                      value={quantity}
                      aria-label="coutProducts"
                    />
                    <InputGroup.Text
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      <button>+</button>
                    </InputGroup.Text>
                  </InputGroup>
                </div>

                <div className="col-6">
                  <button className="btn btn-success" onClick={submitCart}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
