"use client";
import React, { useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { Form, InputGroup } from "react-bootstrap";
export default function ProductsPage() {
  const [selectedCity, setSelectedCity] = useState();
  const [categories, setCategories] = useState();

  return (
    <div className="container" style={{ margin: 0, padding: 0 }}>
      <div className="row" style={{ margin: 0 }}>
        <div className="col-8" style={{ margin: 0, padding: 0 }}>
          <img src="/images/camisa-real.jpg" alt="" />
        </div>

        <div className="col-4">
          <div className="row">
            <div className="col-12" style={{ margin: "40px 0px 40px 0px" }}>
              <h1>Title Men's Real Madrid 2023/24 Third Jersey</h1>
            </div>

            <div className="col-12" style={{ margin: "40px 0px 40px 0px" }}>
              <h3>CA$140 PRICE</h3>
            </div>

            <hr />
          </div>

          <div className="row">
            <div className="col-12" style={{ margin: "15px 0px 0px 0px" }}>
              <p>Size</p>
            </div>

            <div className="col-12" style={{ margin: "0px 0px 40px 0px" }}>
              <div className="row size-button">
                <div className="col-4">
                  <button className="btn btn-success">XL</button>
                </div>

                <div className="col-4">
                  <button className="btn btn-success">M</button>
                </div>

                <div className="col-4">
                  <button className="btn btn-success">S</button>
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
                    <InputGroup.Text>-</InputGroup.Text>
                    <Form.Control
                      style={{ textAlign: "center" }}
                      value={1}
                      aria-label="coutProducts"
                    />
                    <InputGroup.Text>+</InputGroup.Text>
                  </InputGroup>
                </div>

                <div className="col-6">
                  <button className="btn btn-success">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
